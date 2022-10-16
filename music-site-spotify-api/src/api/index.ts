import axios from 'axios';

const spotify_url = 'https://api.spotify.com/v1';
const token = localStorage.getItem('token');

export const fetchArtists =  async(search_key: string): Promise<object> => {
    const { data } = await axios.get(`${spotify_url}/search`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            q: search_key,
            type: 'artist',
        }
    })

    return data
};

export const fetchTracks =  async(search_key: string): Promise<object> => {
    const { data } = await axios.get(`${spotify_url}/search`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
            q: search_key,
            type: 'track',
        }
    })

    return data
};