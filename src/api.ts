export const fetchNews = async () => {
    const response = await fetch(`${import.meta.env.VITE_NEWS_URL}/latest?apikey=${import.meta.env.VITE_NEWS_API_KEY}&country=np`)
    const data = await response.json();
    return data.results;
}