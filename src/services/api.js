import { API } from "../config";

async function request(endpoint) {

    const response = await fetch(API.BASE + endpoint);

    if (!response.ok) {

        throw new Error("Errore server");

    }

    return response.json();

}

export async function getHealth() {

    return request(API.ENDPOINTS.HEALTH);

}

export async function getMatches() {

    return request(API.ENDPOINTS.MATCHES);

}

export async function getPredictions() {

    return request(API.ENDPOINTS.PREDICTIONS);

}