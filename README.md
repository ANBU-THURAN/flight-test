This repository contains the backend APIs required for a flight ticket booking system
#DETAILS
#TO TEST IN LOCAL ENVIRONMENT : ( FOLLOW THE BELOW STEPS)
-------------------------------
   1. Download the files in this repo (or) clone this repository.
   2. Open the folder.
   3. create a 'process.env' file that has the following content : 
        DB_HOST=localhost
        DB_USERNAME=root
        DB_PASSWORD=
        DB_DBNAME=fbs
        DB_NAME2=not_required
        JWT_SECRET=NIL
        ![image](https://user-images.githubusercontent.com/106261859/233544710-a64da2ee-65aa-4c30-b9f6-5f59b7dbb21d.png)
   4. The DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DBNAME should correspond to the database in your local environment. 
       (better advised to create a new database to test this)
   5. Then run the db.sql file in the database that you have created.
      The command to run the sql is "source <directory>"
      Command Ex : 
      ![image](https://user-images.githubusercontent.com/106261859/233544172-0140ab38-7171-4143-8db0-28afd68a480f.png)
   6. Then go to the parent directory of this project and run "npm install" to install the required dependencies (present in package.json)
      ![image](https://user-images.githubusercontent.com/106261859/233544419-0f2bbb61-b379-48fd-aee8-33fb4640aa64.png)
   7. After it has installed all the packages, we can test the APIs.
   8. You can test the APIs using any API testers (Postman API preferred)
   9. By default, the server runs on "http://localhost:5000/" , If you want to change the port, you can change it in index.js file present in the parent folder.
      ![image](https://user-images.githubusercontent.com/106261859/233545421-c42c0774-bcd7-4d33-9d1e-d522b7c86099.png)
# APIs PRESENT :
----------------
  1. for authentication : 
          i) *POST* http://localhost:5000/api/v1/auth/login
          ii) *POST* http://localhost:5000/api/v1/auth/register
  2. for functionality :
          i) *GET* http://localhost:5000/api/v1/flights
          ii) *POST* http://localhost:5000/api/v1/flights
          iii) *DELETE* http://localhost:5000/api/v1/flights/:id
          iv) *GET* http://localhost:5000/api/v1/flights/user/:id
          v) *POST* http://localhost:5000/api/v1/flights/bookFLight
          
  # DETAILS ABOUT EACH API (HOW TO TEST)
  --------------------------------------
    

   
