// Initialize map
const map = L.map('map').setView(MAP_CONFIG.defaultCenter, MAP_CONFIG.defaultZoom);

// Add tile layer
L.tileLayer(MAP_CONFIG.tileLayer.url, {
    attribution: MAP_CONFIG.tileLayer.attribution,
    minZoom: MAP_CONFIG.minZoom,
    maxZoom: MAP_CONFIG.maxZoom
}).addTo(map);

// State variables
let selectedCategories = Object.keys(CATEGORY_COLORS);
let markers = [];
let selectedLocation = null;

// Create markers for each location
function createMarkers() {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Filter locations based on selected categories
    const visibleLocations = LOCATIONS.filter(location => 
        selectedCategories.includes(location.category)
    );

    // Create new markers
    visibleLocations.forEach(location => {
        const icon = L.icon({
            iconUrl: 'icons/placeholder.svg',
            iconSize: MAP_CONFIG.markerIconSize,
            iconAnchor: MAP_CONFIG.markerIconAnchor
        });

        const marker = L.marker(
            [location.coordinates.lat, location.coordinates.lng],
            { icon }
        ).addTo(map);

        // Add popup with basic info
        marker.bindPopup(`
            <strong>${location.name}</strong><br>
            ${location.category}<br>
            ${location.state}
        `);

        marker.on('click', () => showLocationDetails(location));
        markers.push(marker);
    });
}

// Show location details
function showLocationDetails(location) {
    selectedLocation = location;
    const detailsElement = document.getElementById('location-details');
    const nameElement = document.getElementById('location-name');
    const categoryElement = document.getElementById('location-category');
    const previewContainer = document.getElementById('location-preview');

    nameElement.textContent = location.name;
    categoryElement.textContent = `${location.category} • ${location.state}`;

    // Create Wikipedia embed URL with mobile view for better readability
    const wikiUrl = location.wikipediaUrl.replace('https://en.wikipedia.org/wiki/', 'https://en.m.wikipedia.org/wiki/');
    
    // Display Wikipedia content in iframe with better styling
    previewContainer.innerHTML = `
        <iframe 
            src="${wikiUrl}" 
            style="width: 100%; height: 100%; border: none; background: white;"
            title="Wikipedia content"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
    `;

    detailsElement.classList.add('visible');
}

// Close location details
document.getElementById('close-details').addEventListener('click', () => {
    document.getElementById('location-details').classList.remove('visible');
    selectedLocation = null;
});

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredLocations = LOCATIONS.filter(location =>
        location.name.toLowerCase().includes(query) ||
        location.state.toLowerCase().includes(query)
    );
    
    // Update markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    filteredLocations.forEach(location => {
        if (selectedCategories.includes(location.category)) {
            const icon = L.icon({
                iconUrl: 'icons/placeholder.svg',
                iconSize: MAP_CONFIG.markerIconSize,
                iconAnchor: MAP_CONFIG.markerIconAnchor
            });

            const marker = L.marker(
                [location.coordinates.lat, location.coordinates.lng],
                { icon }
            ).addTo(map);

            // Add popup with basic info
            marker.bindPopup(`
                <strong>${location.name}</strong><br>
                ${location.category}<br>
                ${location.state}
            `);

            marker.on('click', () => showLocationDetails(location));
            markers.push(marker);
        }
    });
});

// Category filter functionality
document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const category = chip.dataset.category;
        if (selectedCategories.includes(category)) {
            selectedCategories = selectedCategories.filter(c => c !== category);
            chip.classList.remove('selected');
        } else {
            selectedCategories.push(category);
            chip.classList.add('selected');
        }
        createMarkers();
    });
});

// Initialize markers
createMarkers(); 