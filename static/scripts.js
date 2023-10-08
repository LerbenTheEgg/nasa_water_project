var mapContainer = document.getElementById('map');
var map = L.map('map').setView([51.505, -0.09], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

function openNav(info1, info2) {
  document.getElementById("tab1").innerHTML = info1; 
  document.getElementById("tab2").innerHTML = info2;
  document.getElementById("mySidenav").style.width = "300px"; 
  mapContainer.style.width = 'calc(100% - 300px)';
  mapContainer.style.right = '300px';
  map.invalidateSize();
  document.getElementById("defaultOpen").click();
}

function closeNav() {
  var sidenav = document.getElementById("mySidenav");
  sidenav.style.transition = "width 0.5s ease-in-out";
  sidenav.style.width = "0";
  mapContainer.style.transition = "width 0.5s ease-in-out, right 0.5s ease-in-out";
  mapContainer.style.width = '100%';
  mapContainer.style.right = '0';
  setTimeout(function() {
    map.invalidateSize();
  }, 500);
}

fetch('/get_water_bodies')
  .then(response => response.json())
  .then(waterBodies => {
    waterBodies.forEach(function(waterBody) {
      L.marker([waterBody.latitude, waterBody.longitude])
        .addTo(map)
        .bindPopup(waterBody.name)
        .on('click', function() {
          openNav(`<h2>${waterBody.name}</h2><p>Water quality refers to the chemical, physical, and biological characteristics of water... for future generations.</p>`, `The extinction of species... diversity of life on Earth.`);
          map.flyTo([waterBody.latitude, waterBody.longitude], 10);
        });
    });
  })
  .catch(error => console.error('Error fetching the water bodies:', error));

function openTab(tabName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.opacity = '0';
    tabcontent[i].style.maxHeight = '0';
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  setTimeout(function(){
    document.getElementById(tabName).style.opacity = '1';
    document.getElementById(tabName).style.maxHeight = '500px';
    elmnt.classList.add("active");
  }, 500);
}


// client-side JavaScript
var waterBodies = [];

window.onload = function() {
    fetch('/static/water_bodies.json')
        .then(response => response.json())
        .then(data => {
            waterBodies = data.map(waterBody => ({
                name: waterBody.name,
                coords: {
                    latitude: waterBody.latitude,
                    longitude: waterBody.longitude
                }
            })).filter(waterBody => Boolean(waterBody.name));
        })
        .catch(error => console.error('Error loading water bodies data:', error));
};

function searchWaterBodies() {
    var input = document.getElementById('search-bar').value.toLowerCase();
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    resultsContainer.style.display = 'none'; // Hide results by default

    if (input === '') return; // If the search bar is empty, don't show any results

    waterBodies.forEach(function(waterBody) {
        if (waterBody.name.toLowerCase().includes(input)) {
            var resultDiv = document.createElement('div');
            resultDiv.textContent = waterBody.name;
            resultDiv.onclick = function() {
                openNavForWaterBody(waterBody);
            };
            resultsContainer.appendChild(resultDiv);
            resultsContainer.style.display = 'block'; // Show results if there are any
        }
    });
}

function openNavForWaterBody(waterBody) {
    var info1 = `<h2>${waterBody.name}</h2><p>More details about ${waterBody.name}...</p>`;
    var info2 = `Latitude: ${waterBody.coords.latitude}, Longitude: ${waterBody.coords.longitude}`;
    openNav(info1, info2);
    map.flyTo([parseFloat(waterBody.coords.latitude), parseFloat(waterBody.coords.longitude)], 10);
}

