CREATE TABLE Users (
  userID int primary key not null,
  userType varchar(50) not null,
  username varchar(50) not null,
  password varchar(50) not null,
  gender varchar(50) not null,
  mobile_no varchar(15) not null,
  email varchar(50) not null,
  age int
);
CREATE TABLE Places(
  placeID int primary key not null,
  placeName varchar(50) not null
);
CREATE TABLE flights(
  flightID int primary key not null,
  start_placeID int,
  end_placeID int,
  cur_placeID int,
  cur_destID int,
  takeoff_time datetime,
  landing_time datetime,
  eco_balance_seats int,
  buss_balance_seats int,
  foreign key(start_placeID) references places(placeID),
  foreign key(end_placeID) references places(placeID),
  foreign key(cur_placeID) references places(placeID),
  foreign key(cur_destID) references places(placeID)
);
CREATE TABLE ticket_details(
  start_placeID int,
  end_placeID int,
  total_dist int,
  ticket_price int not null,
  foreign key(start_placeID) references places(placeID),
  foreign key(end_placeID) references places(placeID)
);
CREATE TABLE bookings(
 bookingID int primary key,
 flightID int,
 userID int,
 num_of_seats int,
 foreign key(flightID) references flights(flightID),
 foreign key(userID) references users(userID),
);

insert into Users values(101,"admin","anbu","1234","male","9999999999","sample@gmail.com",20);
insert into Places values(1,"Chennai");
insert into Places values(2,"Bangalore");
insert into Places values(3,"Hydrebad");
insert into Places values(4,"Delhi");
insert into flights values(100,1,1,1,2,"2023-11-11 09:00:00","2023-11-11 13:00:00",40,20);
