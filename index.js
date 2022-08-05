latitude = document.getElementById("latitude-coordinates");
longitude = document.getElementById("longitude-coordinates");
box = document.getElementsByClassName("box");

function getLocator(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        box.innerHTML = "Geolocation is not supported by your browser";
    }
}

function showPosition(position){
    latitude.innerHTML = position.coords.latitude;
    longitude.innerHTML = position.coords.longitude;
}