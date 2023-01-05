import { apiKey, apiUrl } from ".";

export const getSources = async () => {
    return await fetch(`${apiUrl}/sources?language=en&apiKey=${apiKey}`)
        .then(res => res.json());
}

export const getArticlesById = async (source: string) => {
    return await fetch(`${apiUrl}/top-headlines?sources=${source}&apiKey=${apiKey}`)
        .then(res => res.json());
}

export const getArticles = async () => {
    return await fetch(`${apiUrl}/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
        .then(res => res.json());
}