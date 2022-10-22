import axios from 'axios';
import store from '@/store';

const spotify_url = 'https://api.spotify.com/v1';

export const fetchArtists =  async(search_key: string): Promise<object> => {
    const { data } = await axios.get(`${spotify_url}/search`, {
        headers: { Authorization: `Bearer ${store.getters.getToken}` },
        params: {
            q: search_key,
            type: 'artist',
        }
    })

    return data
};

export const fetchTracks =  async(search_key: string): Promise<object> => {
    const { data } = await axios.get(`${spotify_url}/search`, {
        headers: { Authorization: `Bearer ${store.getters.getToken}` },
        params: {
            q: search_key,
            type: 'track',
        }
    })

    return data
};

export const startTrack = async(): Promise<object> => {
    const { data } = await axios.put(`${spotify_url}/me/player/play`)

    return data;
}