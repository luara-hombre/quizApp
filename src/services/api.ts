import axios from 'axios';


let baseURL = 'https://test-quiz-app-backend.herokuapp.com';

const api = axios.create({
  baseURL,
});

export async function getCategories() {
    const response = await api.get('/categories');
    return response.data;
}

export async function newRound(body: object) {
    const response = await api.post('/rounds', body);
    return response.data;
}

export async function getInfosRound(id:number) {
    const response = await api.get(`/rounds/${id}`);
    return response.data;
}

export async function saveAnswer(id: number, body: object) {
    const response = await api.post(`/rounds/${id}/answers`, body);
    return response.data;
}
export async function getResults(id:number) {
    const response = await api.get(`/rounds/${id}/result`);
    return response.data;
}
