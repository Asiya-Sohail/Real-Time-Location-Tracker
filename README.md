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

- Real-time location updates for all connected users
- User name identification (via prompt)
- Marker tooltips (visible names) and popups (name + timestamp)
- Automatic marker cleanup when users disconnect
- Interactive map integration with Leaflet.js
- Live communication using Socket.IO
- Dynamic rendering using EJS templates

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
├── steps.txt
└── README.md
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
npm install
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

- **Geolocation API**: Browser captures user coordinates.
- **Socket.IO**: Establishes a two-way connection to send location data to the server.
- **Backend (Node/Express)**: Receives coordinates and broadcasts them to everyone else.
- **Leaflet.js**: Renders the map and markers dynamically.

---

## 📚 Learning Source

This project was created by following the tutorial from Sheriyans Coding School and enhanced with additional features like user naming and timestamps.

Tutorial link: https://youtu.be/JmpDGMgRFfo?si=5pK_Lb-B7DbgjA6s

---

## 🔮 Future Improvements

- User authentication/Login system
- Persistent route history (database integration)
- Geo-fencing alerts
- Mobile-responsive UI refinements
- Custom marker icons
