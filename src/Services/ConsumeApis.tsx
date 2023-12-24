import axios from 'axios';

//export const linkHoroscope = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign={{sign}}&day=TODAY';
export const linkSri = 'https://srienlinea.sri.gob.ec/movil-servicios/api/v1.0/deudas/porIdentificacion/{{identification}}/?tipoPersona=N&_=1703018819045'
export const numberApi='http://numbersapi.com/{{number}}/math'
/*
export const fetchTodayHoroscope = async (sign: string) => {
    const response = await axios.get(linkHoroscope.replace('{{sign}}',sign));
    return response.data;
};
*/
export const fetchDebtsSri= async (ci:string)=>{
    const response=await axios.get(linkSri.replace('{{identification}}',ci));
    return response.data
}

export const fetchNumberApi = async (num: number)=>{
    const response=await axios.get(numberApi.replace('{{number}}',`${num}`));
    return response.data
}

