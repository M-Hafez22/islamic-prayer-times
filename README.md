![logo](./img/prayer.ico)
# Islamic Prayer Times
A website provides You with **Hijri Date** and **Prayer Times** depending on your time zone.
#### version 1.0.0
![App preview](./img/app.png)
## Table of Contents
- [General info](#general-info)
- [Features](#features)
- [Upcoming Features](#upcoming-features)
- [Manual](#manual)
- [Clone](#clone)
- [Technologies](#technologies)
- [Inspiration](#inspiration)
- [License](#license)

## General info
A web app uses **[AlAdhan.com](https://aladhan.com/prayer-times-api)** API to provide the user with the **Prayers times** and **Hijri date**.

 > This is a practice to what I learned about **React** & **React Hooks**

## Features
1. Current time ( in 12 formats)
2. Hijri Date
3. The prayers times for one day
4. Remaining time for the next prayer

## Upcoming Features
  - Changing Location manually
  - Add more languages

## Manual
![app map](./img/map.jpg)
 - Switching language
	- To switch the language just press the button of your language.
	- now it's only two languages **English** and **Arabic**. look at [Upcoming Features](#upcoming-features).

 - Location
	 - let the app to detect your location to present prayers times for your Time zone.
	 -  If you block location detecting it will present data for the default location ( Africa/Cairo ).
	 - The time zone will be displayed at the bottom of the app
    ![press Allow](./img/allow.png)

## Clone
To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer.
From your command line:

1. Clone this repository

	$ git clone https://github.com/M-Hafez22/islamic-prayer-times.git

1. Go into the repository

    $ cd islamic-prayer-times

3. Install dependencies

	$ npm install

4. Run the app

	$ npm start

5. when it opens in your browser it will ask for detecting your location
	choose *Allow*
## Technologies

 - React version : ^16.13.1
 - Sass version   : ^4.13.1

    you can see all dependencies from **[package.json](package.json)**

## Inspiration

- 	This project inspired by a chrome extension called **[Islamway Ramadan | طريق الإسلام](https://chrome.google.com/webstore/detail/islamway-ramadan-%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A5/mcbgkoikidgnmbekipnnhhhjhcaioflb)** which is powered by **[Islamway]([https://ar.islamway.net/](https://ar.islamway.net/))** website.

- I love this extension and I want to make a web app that provides the same features so after leaning React & React Hooks I start to implement what I learn to make what I like.


## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- Licensed under the **[MIT license](LICENSE)**
- Copyright (c) 2020 Mohamed Hafez
