const pool = require('../database/index')
const flightsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query(`
            SELECT f.flightID, p1.placeName as start_place, p2.placeName as end_place, f.takeoff_time, f.landing_time, f.eco_balance_seats, f.buss_balance_seats
            FROM flights f
            INNER JOIN Places p1 ON f.start_placeID = p1.placeID
            INNER JOIN Places p2 ON f.cur_destID = p2.placeID;
            `)
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    deleteById: async (req, res) => {
        try {
            const { id } = req.params;

            const [flight] = await pool.query(`
                    SELECT *
                    FROM flights
                    WHERE flightID = ?
                `, [id]);

            if (flight.length === 0) {
                return res.status(404).json({
                    message: "Flight not found"
                });
            }

            if (flight[0].eco_balance_seats !== 40 || flight[0].buss_balance_seats !== 20) {
                return res.status(400).json({
                    message: "Cannot delete flight! there are tickets booked in this flight"
                });
            }

            await pool.query(`
                    DELETE FROM flights
                    WHERE flightID = ?
                `, [id]);

            res.json({
                message: "Flight deleted successfully"
            });
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            });
        }
    },

    addFlight: async (req, res) => {
        try {
            const flightID = req.body.flightID;
            const startplace = req.body.startplace;
            const endplace = req.body.endplace;
            const curplace = req.body.curplace;
            const curdest = req.body.curdest;
            const takeoff_time = req.body.takeoff_time;
            const landing_time = req.body.landing_time;

            // Get place IDs
            const [startPlace] = await pool.query(`
                    SELECT placeID
                    FROM Places
                    WHERE placeName = ?
                `, [startplace]);

            const [endPlace] = await pool.query(`
                    SELECT placeID
                    FROM Places
                    WHERE placeName = ?
                `, [endplace]);

            const [curPlace] = await pool.query(`
                    SELECT placeID
                    FROM Places
                    WHERE placeName = ?
                `, [curplace]);

            const [curDest] = await pool.query(`
                    SELECT placeID
                    FROM Places
                    WHERE placeName = ?
                `, [curdest]);

            await pool.query(`
                    INSERT INTO flights 
                    VALUES (?, ?, ?, ?, ?, ?, ?, 40, 20)
                `, [flightID, startPlace[0].placeID, endPlace[0].placeID, curPlace[0].placeID, curDest[0].placeID,takeoff_time,landing_time]
                );

            res.json({
                message: "Flight added successfully"
            });
        } catch (error) {
            console.log(error);
            res.json({
                status: "error"
            });
        }
    },
    getFlightsUser: async (req, res) => {
        const userID = req.params.id;
        try {
            const [flights] = await pool.query('SELECT * from bookings where userID = ?', [userID]);
            res.json(flights);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
    bookFlightTicket : async(req, res) => {
        let bookingID = req.body.bookingID;
        const flightID = req.body.flightID;
        const ecoSeatsToBook = req.body.eco;
        const bussSeatsToBook = req.body.buss;
        const userID = req.body.userID;
        const userType = req.body.userType;
        const ticketPrice = req.body.ticketPrice;
        const [flightDetails] = await pool.query('SELECT * from flights where flightID = ?', [flightID]);
        const currFlight = flightDetails[0];
        const [users] = await pool.query('SELECT * FROM users WHERE userID = ?', [userID]); 
        if(users.length === 0){
            return res.json({
                status : "404",
                reason : "User not found"
            })
        }
        if(currFlight.eco_balance_seats < ecoSeatsToBook || currFlight.buss_balance_seats < bussSeatsToBook)
        {
            return res.json({
                status : 'not booked',
                reason : 'not enough seats',
            })
        }
        try{
            const type ="eco"
            if(ecoSeatsToBook > 0){
                await pool.query('INSERT INTO bookings values(?,?,?,?,?,?,?)',[bookingID,flightID,userID,userType,ticketPrice,type,ecoSeatsToBook]);
            }
        }
        catch(err){
            return res.json({
                status : '101',
                message : err.message
            })
        }
        try{
            await pool.query('UPDATE flights SET eco_balance_seats = ? WHERE flightID = ?',[(currFlight.eco_balance_seats - ecoSeatsToBook), flightID]);
        }catch(err){
            return res.json({
                status : '102',
                message : err.message
            })
        }
        bookingID++;
        try{
            const type = "buss"
            if(bussSeatsToBook > 0){
                await pool.query('INSERT INTO bookings values(?,?,?,?,?,?,?)',[bookingID,flightID,userID,userType,ticketPrice,type,bussSeatsToBook]);
            }
        }catch(err){
            return res.json({
                status : '103',
                message : err.message
            })
        }
        try{
            await pool.query('UPDATE flights SET buss_balance_seats = ? WHERE flightID = ?',[(currFlight.buss_balance_seats - bussSeatsToBook), flightID]);
        }catch(err){
            return res.json({
                status : '104',
                message : err.message
            })
        }
        res.json({
            message : 'ticket booked successfully!'
        })

    }
};

module.exports = flightsController;
