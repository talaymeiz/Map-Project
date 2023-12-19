# Map-Project

<p align="center">
  <img src="MAP2.jpg">
</p>

Welcome to Travel-Map, Social Networking Platform: A unique network centered around travel experiences.<br>
an open-source web application that provides you with the ability to travel, pin your location and share your reviews with other users.<br>
Personal Travel Insights: Share and discover recommendations based on real experiences.<br>
Community-Driven Recommendations: Like/dislike feature to gauge popularity of destinations.<br>
Trip Inspiration Source: Ideal for finding new travel spots or sharing hidden gems.<br>
Travel Map project is developed using JavaScript.<br>
Technologies Used: React.js, MongoDB, Mapbox, react-map-gl.<br>
Development Focus: Combines front-end and back-end web development skills.<br>
Programming Language: Leveraging JavaScript and Node.js for a seamless experience. CSS for the view.<br>

Experience the app in action by watching the [Travel Map Video](https://www.youtube.com/watch?v=OH2ONU8T0nY).

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)

## Overview

I have a strong passion for exploring and gathering experiences in different corners of the globe. Motivated by this desire, I chose to create Travel-Map, catering to fellow travel enthusiasts or those aspiring to embark on their journeys for the first time. This app allows users to record the locations they have visited, provide ratings and save them for future reference. A trip map can be used as a personal database for users to recall their travel experiences, but most importantly, Va allows the ability to share the memories and ideas for these trips and experiences with others :)

### Technology Stack

- **Frontend:**
React: A JavaScript library for building user interfaces.<br>
react-map-gl: A React wrapper for Mapbox GL JS, a library for embedding interactive, customizable maps.<br>
axios: A promise-based HTTP client for making requests to the server.<br>
@mui/icons-material: Icons from the Material-UI library used for displaying star icons.<br>
The code integrates with Mapbox for rendering the map and markers. It communicates with a server to fetch and update data related to pins on the map using Axios for HTTP requests. The state is managed using React hooks, and the application includes components for user registration and login.<br>

- **Backen:**
  Express.js: A web application framework for Node.js used to create the server.<br>
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies interactions with MongoDB databases.<br>
MongoDB: A NoSQL database used to store the data.<br>
bcrypt: A library for hashing and salting passwords securely.<br>
The stack includes Node.js with Express for the server, Mongoose for MongoDB interactions, bcrypt for password hashing, and MongoDB as the database. The code structure follows a RESTful API design with separate routes for pins and users.<br>

- **view:** CSS.

### Features

- **Register:** If you are not a registered user, you can register for the system by providing your name, email, and password before starting to use the application. The registration is a one-time process.<br> 

- **login/logout** Following the registration process, you can log into the system. While actively using the application, it recognizes your user status, enabling it to operate according to your account. Exclusive to the login mode, you have the capability to append new pins, and these pins are uniquely distinguished. Upon completing your use of the application, you have the option to log out.

- **Adding a new location** By double-clicking on the map at a certain location, you can add a new pin. Provide a description, rate it, and share it with fellow users.

- **Location viewing** Clicking on the symbol of an already placed pin on the map will trigger a window to open, displaying detailed information about that specific location.
