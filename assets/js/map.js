/*
*code taken from https://discuss.emberjs.com/t/google-is-not-defined-jshint-error/5762
* so that google will not be an undefined variable during jshint validation
*/
/*global google */


// codes taken from frozan and codeinwp and was altered to fit the project
let map;

const MAP_LOCATION = {
  zoom: 12,
  center: {
    lat: 53.372367084979494,
    lng: -6.253238987011552,
  },
};

const MY_MARKERS = [
  {
    position: { lat: 53.39995151313046, lng: -6.239245072942184 },
    title: "Lumiere Santry",
    adress: "<p>S22 Oak Lawn, Royal Oak, Dublin 9, D09 HR74</p>",
    icon: "assets/images/icon.png",
  },
  {
    position: { lat: 53.372367084979494, lng: -6.253238987011552 },
    title: "Lumiere Drumcondra",
    adress: "<p>9 Drumcondra Rd Upper, Drumcondra, Dublin 9</p>",
    icon: "assets/images/icon.png",
  },
  {
    position: { lat: 53.39199654021929, lng: -6.391000972942499 },
    title: "Lumiere Blanchardstown",
    adress: "<p>Blanchardstown Rd S, Blanchardstown, Dublin</p>",
    icon: "assets/images/icon.png",
  },
  {
    position: { lat: 53.46245780316168, lng: -6.22928287293971 },
    title: "Lumiere Swords",
    adress: "<p>Unit 3, Rathbeale Rd, Commons West, Swords, Co. Dublin</p>",
    icon: "assets/images/icon.png",
  },
];

/**
 * Function to add marker to the map with a title, infowindow, and a custom marker from the array MY_MARKERS.
 * Adds a click function to the marker to open the infoWindow.
 */
function initiateMarker() {
  MY_MARKERS.forEach(function (myMarker) {
    let marker = new google.maps.Marker({
      position: myMarker.position,
      title: myMarker.title,
      icon: myMarker.icon,
      map: map,
    });

    let infoWindow = new google.maps.InfoWindow({
      content: myMarker.adress,
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
}

/**
 * Adds a click event listener to buttons to change the location of the map.
 */
function initialiseCityMap() {
  document.getElementById("santryMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 53.39995151313046, lng: -6.239245072942184 });
    });
  document.getElementById("drumcondraMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 53.372367084979494, lng: -6.253238987011552 });
    });
  document.getElementById("blanchardstownMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 53.39199654021929, lng: -6.391000972942499 });
    });
    document.getElementById("swordsMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 53.46245780316168, lng: -6.22928287293971 });
    });
}

/**
 * Creates a map and sets location on the map from MAP_LOCATION.
 * Calls the functions to set markers on the map and change locations with the buttons.
 */
function initMap() {
  window.onload = (event) => {
    map = new google.maps.Map(document.getElementById("map"), MAP_LOCATION);

    initiateMarker();

    initialiseCityMap();
  };
}