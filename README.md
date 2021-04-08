# Welcome to Infinitus!

## Introduction 
Semester Project of winter semester 20/21 ***Flashcard Infinitus*** is a simple flashcard web application, which allows users to learn terms/phrases by using flashcards.

![image](https://user-images.githubusercontent.com/57114344/114031556-c9dc7600-987b-11eb-8765-c4b9f78c1de7.png)

## Technologies
 ***Flashcards Infinitus*** is created with 

 - [Angular CLI](https://github.com/angular/angular-cli) version **11.2.2**,
  
 - [NodeJS](https://github.com/nodejs/node) version **12.18.4**,
 - [Bootstrap](https://getbootstrap.com) version **v5.0.0-beta3** and
 - [MySQL](https://www.mysql.com).

## Database
The database is created with MySQL of **HTW Berlin Studi-Server**. Access to the database is saved in a file called **db.config.js** It is defined with one table, which is named ***"cards"***. Cards has 5 rows: 
- The **id** column is of type int and will hold an **integer**, which is also the **primary key** of the table.
- The **front, back, setname,** and **notes** columns are of type **varchar** and will hold characters, and the maximum length for these fields is **255** characters.

![image](https://user-images.githubusercontent.com/57114344/114033902-fb564100-987d-11eb-82bd-c5e6891a9f13.png)


## Features

 - With ***Flashcard Infinitus*** users can easily **create, change contents** of flashcards, as well as **delete** their existing cards. 
 - Users also can **search** for a string, which is included in existing cards.
 - Learning their cards is very simple with **flipping** function.

## Set up for frontend

After cloning the projekt with `git clone https://github.com/buhali10/Projekt_Webtech_2021`,

Navigate your terminal to **frontend** file  and run: 

    npm install 
    npm install -g @angular/cli


For a dev server, run `ng serve` . On the console a link `http://localhost:4200/` will appear, click on the link. The app will automatically reload if you change any of the source files.

## Set Up for backend
Navigate another terminal window to **backend** file  and run: 

    npm install express mysql body-parser --save

and start with: 

    node server.js

It's connected to the database when you see: 

> Server is running on port 3000. 
> Successfully connected to the database.



## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run  `ng test`  to execute the unit tests via  [Karma](https://karma-runner.github.io/).

## [](https://github.com/jfreiheit/prog1#running-end-to-end-tests)Running end-to-end tests

Run  `ng e2e`  to execute the end-to-end tests via  [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via  `ng serve`.

## [](https://github.com/jfreiheit/prog1#deploying-to-github-pages)Deploying to GitHub Pages

Run  `ng github-pages:deploy`  to deploy to GitHub Pages.

## [](https://github.com/jfreiheit/prog1#further-help)Further help

To get more help on the  `angular-cli`  use  `ng help`  or go check out the  [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
