import axios from "axios";

// Création d'une instance Axios avec une configuration de base
const api = axios.create({
    baseURL: 'https://dev.3findustrie.com/api', // URL de base de votre API Symfony
    timeout: 5000, // Timeout de 5 secondes pour les requêtes
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`, // Inclure si nécessaire pour les requêtes authentifiées
    },
});

