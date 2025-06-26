// src/data/jetsData.js
import heroImage1 from '../assets/avions-prives-sur-le-terrain.jpg';  // Importer les images directement
import heroImage2 from '../assets/plane.png';
import heroImage3 from '../assets/hero.png';

export const jetsData = [
  {
    id: 1,
    name: "Hawker 800XPi",
    capacity: 8,
    price_per_hour: 3500,
    image: heroImage1,  // Utiliser l'import
  },
  {
    id: 2,
    name: "Beechcraft King Air",
    capacity: 6,
    price_per_hour: 2500,
    image: heroImage2,  // Utiliser l'import
  },
  {
    id: 3,
    name: "Challenger 604",
    capacity: 10,
    price_per_hour: 5000,
    image: heroImage3,  // Utiliser l'import
  },
  // Ajoutez plus de jets ici si nécessaire
];
