const socket = io(); //It Initialize the connection with server

// Ask user for their name once
const userName = prompt("Enter your name:") || "Anonymous";

if (navigator.geolocation){
  navigator.geolocation.watchPosition(
    (position) => {
      const {latitude, longitude} = position.coords;
      // Send name along with location
      socket.emit("send-location", {latitude, longitude, name: userName});
    },
    (error) => {
      console.error("Error", error)
    }, 
    {
      enableHighAccuracy: true,
      timeout: 5000,   // 5 seconds for high accuracy
      maximumAge: 0,   // No caching
    }
  )
}

// Leaflet map setup
const map = L.map("map").setView([0,0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Asiya's map"
}).addTo(map);

const markers = {};

socket.on("receive-location", (data) => {
  const {id, latitude, longitude, name} = data;
  const timestamp = new Date().toLocaleTimeString();
  const popupContent = `
    <b>👤 ${name}</b><br>
    🕒 Last updated: ${timestamp}
  `;

  map.setView([latitude, longitude]);

  if (markers[id]) {
    // Update existing marker position and popup
    markers[id].setLatLng([latitude, longitude]);
    markers[id].getPopup().setContent(popupContent);
  } else {
    // Create new marker with popup and a persistent tooltip (name label)
    markers[id] = L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(popupContent)             // Click to see details
      .bindTooltip(name, {                  // Always-visible name label
        permanent: true,
        direction: "top",
        offset: [0, -10]
      });
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]){
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
