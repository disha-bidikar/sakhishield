# SakhiShield

Smart women safety alert and live tracking system with SOS alerts, live location sharing, emergency contacts, and Google Maps integration.

## Features

* SOS alert system for emergency situations
* Live location sharing with trusted contacts
* Emergency contact management
* Nearby police station and hospital suggestions
* Safe-zone detection using Google Maps API
* Alert history storage using MongoDB
* Real-time notifications and tracking
* Responsive and aesthetic user interface

## Tech Stack

### Frontend

* React.js
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### APIs & Tools

* Google Maps API
* Git & GitHub
* VS Code
* Postman

## Folder Structure

```bash
sakhishield_project/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   └── styles/
│
├── server/
│   ├── models/
│   │   ├── User.js
│   │   └── Alert.js
│   ├── routes/
│   │   └── alertRoutes.js
│   ├── server.js
│
├── .gitignore
├── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/sakhishield.git
cd sakhishield
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

## Run the Project

### Start backend server

```bash
cd server
node server.js
```

### Start frontend server

```bash
cd client
npm start
```

Frontend will run on:

```bash
http://localhost:3000
```

Backend API will run on:

```bash
http://localhost:5000
```

## Future Improvements

* User authentication and login
* SMS and email notifications
* Real-time route monitoring
* AI-powered danger detection
* Voice-activated SOS trigger
* Mobile app integration

## Screenshot

![SakhiShield Homepage](./screenshots/homepage.png)
