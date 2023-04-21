#### This repository contains the backend APIs for a flight ticket booking system <br>
### Details : <br>
#### This repo contains all the backend APIs required for a basic functioning flight ticket booking system. <br> 
     Functionalities provided by APIs : 
           1) Register a new user (The user can be either user or admin) 
           2) Login ( It will check the existing database for the user and verify the credentials and it will provide a token if the details are valid)
           3) get all flights (It show the data of all the flights that are currently in the database )
           4) Add a flight ( add a new flight with the required details)
           5) delele flight (remove a flight if there is no booking made on it currently )
           6) flights list based on user booking (provides a list of all the flights in which the user has made booking ) 
           7) book flight ( book a flight after checking available seats, both economy class and business class )
 <br>
<b> HOSTED APIs : </b> <br>
---------------------- <br>
<b> 1. for authentication : </b> <br>
          i) *POST* https://flight-ticket-booking-sigma.vercel.app/api/v1/auth/login <br>
          ii) *POST* https://flight-ticket-booking-sigma.vercel.app/api/v1/auth/register <br>
<b> 2. for functionality : </b> <br>
          i) *GET* https://flight-ticket-booking-sigma.vercel.app/api/v1/flights <br>
          ii) *POST* https://flight-ticket-booking-sigma.vercel.app/api/v1/flights <br>
          iii) *DELETE* https://flight-ticket-booking-sigma.vercel.app/api/v1/flights/:id <br>
          iv) *GET* https://flight-ticket-booking-sigma.vercel.app/api/v1/flights/user/:id <br>
          v) *POST* https://flight-ticket-booking-sigma.vercel.app/api/v1/flights/bookFLight <br>

TO TEST IN LOCAL ENVIRONMENT : ( FOLLOW THE BELOW STEPS) <br>
-------------------------------
   1. Download the files in this repo (or) clone this repository.
   2. Open the folder.
   3. create a 'process.env' file that has the following content : <br>
        DB_HOST=localhost <br>
        DB_USERNAME=root <br>
        DB_PASSWORD= <br>
        DB_DBNAME=fbs <br>
        DB_NAME2=not_required <br>
        JWT_SECRET=NIL <br>
        ![image](https://user-images.githubusercontent.com/106261859/233544710-a64da2ee-65aa-4c30-b9f6-5f59b7dbb21d.png)
   4. The DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DBNAME should correspond to the database in your local environment. 
       (better advised to create a new database to test this)
   5. Then run the db.sql file in the database that you have created.
      The command to run the sql is "source <directory>"
      Command Ex : <br>
      <br> ![image](https://user-images.githubusercontent.com/106261859/233544172-0140ab38-7171-4143-8db0-28afd68a480f.png)
   6. Then go to the parent directory of this project and run "npm install" to install the required dependencies (present in package.json) <br>
      <br> ![image](https://user-images.githubusercontent.com/106261859/233544419-0f2bbb61-b379-48fd-aee8-33fb4640aa64.png)
   7. After it has installed all the packages, we can test the APIs.
   8. Run the index.js file by using "node index.js" command <br>
   <br> ![image](https://user-images.githubusercontent.com/106261859/233548580-5af0f952-a5f0-414d-a0cf-a47a0f9310bc.png)
   9. You should see the following messages :
   "Server is running ....",
   "Connected successfully <br>
   10. You can test the APIs using any API testers (Postman API preferred)
   11. By default, the server runs on "http://localhost:5000/" , If you want to change the port, you can change it in index.js file present in the parent folder.
      <br> ![image](https://user-images.githubusercontent.com/106261859/233545421-c42c0774-bcd7-4d33-9d1e-d522b7c86099.png)
# APIs PRESENT :
----------------
  1. for authentication :  <br>
          i) *POST* http://localhost:5000/api/v1/auth/login <br>
          ii) *POST* http://localhost:5000/api/v1/auth/register <br>
  2. for functionality : <br>
          i) *GET* http://localhost:5000/api/v1/flights <br>
          ii) *POST* http://localhost:5000/api/v1/flights <br>
          iii) *DELETE* http://localhost:5000/api/v1/flights/:id <br>
          iv) *GET* http://localhost:5000/api/v1/flights/user/:id <br>
          v) *POST* http://localhost:5000/api/v1/flights/bookFLight <br>
          
  # DETAILS ABOUT EACH API (HOW TO TEST) <br>
  --------------------------------------
   If you are using Postman API, open Postman API and type these APIs and change the method to the corresponding present in the list. <br>
   <b> Authentication : </b> <br>
   ### <b> i) *POST* http://localhost:5000/api/v1/auth/login </b> <br>
   Sample json : <br>
   {
       "userName" : "anbu",
       "password" : "1234"
   }
   <br>
   ![image](https://user-images.githubusercontent.com/106261859/233549860-3425bf93-ec66-447a-8a86-99a6bede37ec.png)
   <br> After you press send, you should see a token as output like this.
   <br> <b> Note : </b> This user would've been created when you ran the sql code. So, no need to register for this user. But if you want to login with a different user, you should register it first <br><br>
   ### <b> ii) *POST* http://localhost:5000/api/v1/auth/register </b> <br> 
   Sample json : <br>
    {
       "userID" : 102,
       "userType" : "user",
       "userName" : "sampleUser",
       "password" : "4567",
       "gender" : "male",
       "mobile_no" : "7777777777",
       "email" : "testing@gmail.com",
       "age" : 40
   } 
   <br> 
   ![image](https://user-images.githubusercontent.com/106261859/233551275-f125fc1d-5c4a-4c78-873a-f642053eb38b.png) <br>
   You should see a message that says "User registered successfully" <br>
   During registration, the password will be hashed and stored in the database for safety purposes <br>
   <b> Functionalities : </b> <br>
   ### <b> i) *GET* http://localhost:5000/api/v1/flights </b> <br>
   This API will list all the flights that have already been added with their details (like destination, takeoff time, etc) <br>
   ![image](https://user-images.githubusercontent.com/106261859/233552970-0c97f89a-4888-405e-bbc1-f0674a87e2a0.png) <br>
   You should see a output like this , that has all the flight details. <br>
   If you have not already added any flights, the output may have no flights. In that case, add a flight first, then call this API <br>
   ### <b> ii) *POST* http://localhost:5000/api/v1/flights </b> <br>
   To add a new flight, use this API, <br>
   Sample json : <br>
   {
       "flightID" : 1001,
       "startplace" : "Chennai",
       "endplace" : "Chennai",
       "curplace" : "Chennai",
       "curdest" : "Hydrebad",
       "takeoff_time" : "2023-10-10 14:20:00",
       "landing_time" : "2023-10-10 17:30:00"
   }
   <br>
   The places and their Ids were added during the execution of the sql code. <br>
   The places you are using here should be a valid place that is already present in the database <br>
    
   ![image](https://user-images.githubusercontent.com/106261859/233555744-dc2ce6f1-2e2d-4fa3-8b89-799ec09c1f7e.png) <br>
   You should see the message "Flight added successfully" <br>
   ### <b> iii)  *DELETE* http://localhost:5000/api/v1/flights/:id </b> <br>
   This API is used to remove a flight from the database given it's flightID , the id should be given in the params. <br>
   Sample : <br>
   ![image](https://user-images.githubusercontent.com/106261859/233556280-171b9e98-ae56-4e2a-bc3d-fb029bb1c0c5.png) <br>
   You should see the message :Flight deleted successfully" <br>
   ### <b> iv) *GET* http://localhost:5000/api/v1/flights/user/:id </b> <br>
   This API is used to get all the flights that a user has booked seats in. It will list all the flights based on the user ID provided in the params. <br>
   Sample : <br>
   ![image](https://user-images.githubusercontent.com/106261859/233558023-26d40092-bb72-4e78-b4db-8521ea2ff77b.png) <br>
   If there are no bookings on the userID, you will receive a empty data as response. <br>
   ### <b> v) *POST* http://localhost:5000/api/v1/flights/bookFLight </b> <br>
   This API is used to book a new flight for a user. <br> 
   Sample JSON : <br> 
   {
       "bookingID" : 1,
       "flightID" : 100,
       "eco" : 2,
       "buss" : 3,
       "userID" : 101,
       "userType" : "admin",
       "ticketPrice" : 2000
  } <br>
  During post, ensure that you have a correct flightID and userID (They should already exist). <br>
  You will receive a output like this, <br>
  ![image](https://user-images.githubusercontent.com/106261859/233558890-8eb71603-efc3-4fc4-9332-6e3d6217c92a.png) <br>
  
   

   
    
   
   
   
   
