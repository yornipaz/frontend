import { unstable_noStore as noStore } from 'next/cache';
import { Weather } from './definitions';

export async function fetchWeatherData(): Promise<Weather> {
    noStore();
    const url: string = `${process.env.BASE_URL_BACKEND}/weather?key=${process.env.SECRET_KEY}`
    const res = await fetch(url)
    return res.json() as Promise<Weather>;
}