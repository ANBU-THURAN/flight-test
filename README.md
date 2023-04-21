#### This repository contains the backend APIs for a flight ticket booking system <br>
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
   If you are using Postman API, open Postman API and type these APIs and change the method to the corresponding present in the list.
   i) *POST* http://localhost:5000/api/v1/auth/login <br>
   Sample json : 
   
   

   
