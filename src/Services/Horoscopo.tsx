import axios from 'axios';

export const linkHoroscope = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign={{sign}}&day=TODAY';

export const fetchTodayHoroscope = async (sign: string) => {
    const response = await axios.get(linkHoroscope.replace('{{sign}}',sign));
    return response.data;
};


