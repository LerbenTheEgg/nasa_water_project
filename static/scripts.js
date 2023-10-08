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
          openNav(
            `
              <h2>${waterBody.name || 'Data not available'}</h2>
              ${waterBody.elevation != null ? `<p><strong>Elevation:</strong> ${waterBody.elevation} meters</p>` : ''}
              ${waterBody.shoreline_length != null ? `<p><strong>Shoreline Length:</strong> ${waterBody.shoreline_length} kilometers</p>` : ''}
              ${waterBody.average_depth != null ? `<p><strong>Average Depth:</strong> ${waterBody.average_depth} meters</p>` : ''}
              ${waterBody.max_depth != null ? `<p><strong>Maximum Depth:</strong> ${waterBody.max_depth} meters</p>` : ''}
              ${waterBody.volume != null ? `<p><strong>Volume:</strong> ${waterBody.volume} cubic kilometers</p>` : ''}
            `,
            `The extinction of species and the loss of biodiversity significantly affect the diversity of life on Earth. Biodiversity is crucial for maintaining balanced ecosystems and human survival.`
          );
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
  var inputElement = document.getElementById('search-bar');
  var input = inputElement.value.toLowerCase();
  var resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';
  resultsContainer.style.display = 'none';

  if (input === '') return;

  waterBodies.forEach(function(waterBody) {
      if (waterBody.name.toLowerCase().includes(input)) {
          var resultDiv = document.createElement('div');
          resultDiv.textContent = waterBody.name;
          resultDiv.onclick = function() {
              // Set the search bar's value to the clicked water body's name
              inputElement.value = waterBody.name;
              // Call the 'openNavForWaterBody' function with the clicked 'waterBody'
              openNavForWaterBody(waterBody);
              // Hide the results container after a selection is made
              resultsContainer.style.display = 'none';
          };
          resultsContainer.appendChild(resultDiv);
          resultsContainer.style.display = 'block';
      }
  });
}

function openNavForWaterBody(waterBody) {
  var info1 = `<h2>${waterBody.name}</h2><p>More details about ${waterBody.name}...</p>`;
  var info2 = `Latitude: ${waterBody.coords.latitude}, Longitude: ${waterBody.coords.longitude}`;

  // Create a marker at the water body's coordinates
  var marker = L.marker([parseFloat(waterBody.coords.latitude), parseFloat(waterBody.coords.longitude)]).addTo(map);

  // Create a popup and set its content to the water body's name
  var popup = L.popup().setContent(waterBody.name);

  // Bind the popup to the marker
  marker.bindPopup(popup);

  // Open the popup
  marker.openPopup();

  // Open the navigation panel
  openNav(info1, info2);

  // Zoom to the marker's location
  map.flyTo([parseFloat(waterBody.coords.latitude), parseFloat(waterBody.coords.longitude)], 10);
}
