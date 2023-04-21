const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database/index');
const validTokens =[];
const authController = {
  register: async (req, res) => {
    const userID = req.body.userID;
    const userType = req.body.userType;
    const userName = req.body.userName;
    const password = req.body.password;
    const gender = req.body.gender;
    const mobile_no = req.body.mobile_no;
    const email = req.body.email;
    const age = req.body.age;
    try {
      // Check if user already exists
      const [existingUser] = await pool.query('SELECT * FROM Users WHERE username = ?', [userName]);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }
      // Hash password
      const hashedPassword = await hashPassword(password);
      // Insert new user into database
      await pool.query('INSERT INTO Users (userID, userType, username, password, gender, mobile_no, email, age) VALUES (?,?, ?, ?, ?, ?, ?, ?)', [userID, userType, userName, hashedPassword, gender, mobile_no, email, age]);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
  login: async (req, res) => {
    const username = req.body.userName;
    const password = req.body.password;
    try {
      // Check if user exists
      const [existingUser] = await pool.query('SELECT * FROM Users WHERE username = ?', [username]);
      if (existingUser.length === 0) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
      
      const isPasswordValid = await checkPassword(password,existingUser[0].password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
      // Create and return a JWT
      const token = jwt.sign({ userId: existingUser[0].userID }, process.env.JWT_SECRET);
      res.json({ token });
      validTokens.push(token);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};
async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
async function checkPassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

module.exports = authController;
