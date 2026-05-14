const socket = io(); //It Initialize the connection with server

if (navigator.geolocation){
  navigator.geolocation.watchPosition(
    (position) => {
      const {latitude,longitude} = position.coords;
      socket.emit("send-location",{latitude, longitude}) //send to backend
    },
    (error) => {
    console.error("Error",error)
    }, 
    {
      enableHighAccuracy: true,
      timeout: 5000, //5 second for high accuracy
      maximumAge: 0, //Person will not cache because of it
    }
  )
}

// Leaflet functionality
const map = L.map("map").setView([0,0], 16); //16 for zoom and [0,0] mean center of world

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:"Asiya's map"
}).addTo(map)

const markers = {}

socket.on("receive-location", (data)=>{
  const {id, latitude, longitude} = data
  map.setView([latitude, longitude]) //16 for zoom
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude])
  }
  else{
    markers[id] = L.marker([latitude, longitude]).addTo(map)
  }
})

socket.on('user-disconnected', (id) => {
  if (markers[id]){
    map.removeLayer(markers[id]);
    delete markers[id];
  }
})
