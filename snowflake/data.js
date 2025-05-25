const LOCATIONS = [
    {
        id: '1',
        name: 'Jim Corbett National Park',
        state: 'Uttarakhand',
        category: 'National Park',
        coordinates: {
            lat: 29.5328,
            lng: 78.9417
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Jim_Corbett_National_Park',
        summary: 'India\'s oldest national park, known for its Bengal tigers and diverse wildlife.'
    },
    {
        id: '2',
        name: 'Kaziranga National Park',
        state: 'Assam',
        category: 'National Park',
        coordinates: {
            lat: 26.5720,
            lng: 93.1734
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Kaziranga_National_Park',
        summary: 'Famous for its one-horned rhinoceros and diverse wildlife.'
    },
    {
        id: '3',
        name: 'Taj Mahal',
        state: 'Uttar Pradesh',
        category: 'Temple',
        coordinates: {
            lat: 27.1751,
            lng: 78.0421
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Taj_Mahal',
        summary: 'A stunning white marble mausoleum and one of the Seven Wonders of the World.'
    },
    {
        id: '4',
        name: 'Kerala Backwaters',
        state: 'Kerala',
        category: 'Scenic Place',
        coordinates: {
            lat: 9.4981,
            lng: 76.3388
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Kerala_backwaters',
        summary: 'A network of brackish lagoons and lakes lying parallel to the Arabian Sea coast.'
    },
    {
        id: '5',
        name: 'Sundarbans National Park',
        state: 'West Bengal',
        category: 'National Park',
        coordinates: {
            lat: 21.9497,
            lng: 89.1833
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Sundarbans_National_Park',
        summary: 'A UNESCO World Heritage site known for its mangrove forests and Royal Bengal Tigers.'
    },
    {
        id: '6',
        name: 'Lalbagh Botanical Garden',
        state: 'Karnataka',
        category: 'Botanical Garden',
        coordinates: {
            lat: 12.9507,
            lng: 77.5848
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Lalbagh_Botanical_Garden',
        summary: 'A famous botanical garden in Bangalore, home to rare plants and a glass house.'
    },
    {
        id: '7',
        name: 'Gir Forest National Park',
        state: 'Gujarat',
        category: 'Wildlife Sanctuary',
        coordinates: {
            lat: 21.1350,
            lng: 70.7900
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Gir_Forest_National_Park',
        summary: 'The only place in the world where you can see Asiatic lions in their natural habitat.'
    },
    {
        id: '8',
        name: 'Kedarnath Temple',
        state: 'Uttarakhand',
        category: 'Temple',
        coordinates: {
            lat: 30.7346,
            lng: 79.0669
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Kedarnath_Temple',
        summary: 'One of the holiest Hindu temples dedicated to Lord Shiva, located in the Himalayas.'
    },
    {
        id: '9',
        name: 'Ranthambore National Park',
        state: 'Rajasthan',
        category: 'National Park',
        coordinates: {
            lat: 26.0173,
            lng: 76.5026
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Ranthambore_National_Park',
        summary: 'A renowned tiger reserve and wildlife sanctuary in Rajasthan.'
    },
    {
        id: '10',
        name: 'Periyar National Park',
        state: 'Kerala',
        category: 'National Park',
        coordinates: {
            lat: 9.4669,
            lng: 77.2368
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Periyar_National_Park',
        summary: 'A protected area in the Western Ghats, known for elephants and scenic beauty.'
    },
    {
        id: '11',
        name: 'Valley of Flowers National Park',
        state: 'Uttarakhand',
        category: 'National Park',
        coordinates: {
            lat: 30.7280,
            lng: 79.6050
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Valley_of_Flowers_National_Park',
        summary: 'A UNESCO World Heritage site known for its endemic alpine flowers and diverse fauna.'
    },
    {
        id: '12',
        name: 'Bandipur National Park',
        state: 'Karnataka',
        category: 'National Park',
        coordinates: {
            lat: 11.6540,
            lng: 76.6295
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Bandipur_National_Park',
        summary: 'A tiger reserve and national park located in the southern Indian state of Karnataka.'
    },
    {
        id: '13',
        name: 'Meenakshi Temple',
        state: 'Tamil Nadu',
        category: 'Temple',
        coordinates: {
            lat: 9.9195,
            lng: 78.1190
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Meenakshi_Temple',
        summary: 'A historic Hindu temple located on the southern bank of the Vaigai River in Madurai.'
    },
    {
        id: '14',
        name: 'Loktak Lake',
        state: 'Manipur',
        category: 'Scenic Place',
        coordinates: {
            lat: 24.4983,
            lng: 93.8037
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Loktak_Lake',
        summary: 'The largest freshwater lake in northeastern India, famous for its phumdis.'
    },
    {
        id: '15',
        name: 'Chilika Lake',
        state: 'Odisha',
        category: 'Scenic Place',
        coordinates: {
            lat: 19.7540,
            lng: 85.5050
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Chilika_Lake',
        summary: 'Asia\'s largest brackish water lagoon, known for bird watching and biodiversity.'
    },
    {
        id: '16',
        name: 'Nanda Devi National Park',
        state: 'Uttarakhand',
        category: 'National Park',
        coordinates: {
            lat: 30.3753,
            lng: 79.9712
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Nanda_Devi_National_Park',
        summary: 'A UNESCO World Heritage site encompassing the Nanda Devi Peak and surrounding areas.'
    },
    {
        id: '17',
        name: 'Kanha National Park',
        state: 'Madhya Pradesh',
        category: 'National Park',
        coordinates: {
            lat: 22.3344,
            lng: 80.6115
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Kanha_National_Park',
        summary: 'One of the largest national parks in Madhya Pradesh, known for its tiger reserve.'
    },
    {
        id: '18',
        name: 'Bandhavgarh National Park',
        state: 'Madhya Pradesh',
        category: 'National Park',
        coordinates: {
            lat: 23.6951,
            lng: 81.0059
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Bandhavgarh_National_Park',
        summary: 'A national park with a high density of Bengal tigers and rich biodiversity.'
    },
    {
        id: '19',
        name: 'Keoladeo National Park',
        state: 'Rajasthan',
        category: 'National Park',
        coordinates: {
            lat: 27.1591,
            lng: 77.5210
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Keoladeo_National_Park',
        summary: 'A man-made wetland and bird sanctuary in Bharatpur, Rajasthan.'
    },
    {
        id: '20',
        name: 'Bhagwan Mahavir Wildlife Sanctuary',
        state: 'Goa',
        category: 'Wildlife Sanctuary',
        coordinates: {
            lat: 15.4089,
            lng: 74.2730
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Bhagwan_Mahavir_Wildlife_Sanctuary',
        summary: 'The largest wildlife sanctuary in Goa, home to a variety of flora and fauna.'
    },
    {
        id: '21',
        name: 'Sariska Tiger Reserve',
        state: 'Rajasthan',
        category: 'Wildlife Sanctuary',
        coordinates: {
            lat: 27.3286,
            lng: 76.4375
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Sariska_Tiger_Reserve',
        summary: 'A tiger reserve located in the Alwar district of Rajasthan.'
    },
    {
        id: '22',
        name: 'Anamudi Shola National Park',
        state: 'Kerala',
        category: 'National Park',
        coordinates: {
            lat: 10.2030,
            lng: 77.0880
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Anamudi_Shola_National_Park',
        summary: 'A protected area located in the Idukki district of Kerala.'
    },
    {
        id: '23',
        name: 'Acharya Jagadish Chandra Bose Indian Botanic Garden',
        state: 'West Bengal',
        category: 'Botanical Garden',
        coordinates: {
            lat: 22.5362,
            lng: 88.2960
        },
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Acharya_Jagadish_Chandra_Bose_Indian_Botanic_Garden',
        summary: 'The largest and oldest botanical garden in India, located in Howrah.'
    }
];
 
