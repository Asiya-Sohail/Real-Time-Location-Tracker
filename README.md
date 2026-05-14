# Real Time Location Tracker

A simple real-time location tracking application built using Node.js, Express.js, Socket.IO, and Leaflet.js.

This project enables live location tracking on a map with real-time communication between frontend and backend.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- EJS Template Engine
- Socket.IO
- Leaflet.js CDN
- HTML
- CSS
- JavaScript

---

## ✨ Features

- Real-time location updates
- Live communication using Socket.IO
- Interactive map integration with Leaflet.js
- Dynamic rendering using EJS templates
- Simple and clean backend architecture
- Automatic marker updates on map

---

## 📁 Project Structure

```bash
project/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── views/
│   └── index.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
npm i
```

---

## ▶️ Run the Project

Start the server using:

```bash
npx nodemon app.js
```

Server will run on:

```bash
http://localhost:3000
```

---

## 🔌 How It Works

- Frontend sends user location data.
- Socket.IO establishes real-time communication between client and server.
- Backend broadcasts updated locations instantly.
- Leaflet.js displays live locations on the map.

---

## 📚 Learning Source

This project was created by following the tutorial from Sheriyans Coding School:

https://youtu.be/JmpDGMgRFfo?si=5pK_Lb-B7DbgjA6s

---

## 🔮 Future Improvements

- User authentication
- Multiple user tracking
- Route history tracking
- Mobile responsive UI
- Better UI/UX design
