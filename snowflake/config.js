const MAP_CONFIG = {
    defaultCenter: [20.5937, 78.9629], // Center of India
    defaultZoom: 5,
    minZoom: 4,
    maxZoom: 18,
    stateZoom: 8,
    locationZoom: 12,
    tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    markerIconSize: [32, 32],
    markerIconAnchor: [16, 16]
};

const CATEGORY_COLORS = {
    'Wildlife Sanctuary': '#4CAF50',
    'Forest Reserve': '#2E7D32',
    'National Park': '#1B5E20',
    'Botanical Garden': '#81C784',
    'Scenic Place': '#2196F3',
    'Temple': '#FF9800'
};

const CATEGORY_ICONS = {
    'Wildlife Sanctuary': 'paw.png',
    'Forest Reserve': 'tree.png',
    'National Park': 'mountain.png',
    'Botanical Garden': 'flower.png',
    'Scenic Place': 'camera.png',
    'Temple': 'temple.png'
}; 