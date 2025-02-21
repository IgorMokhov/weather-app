import axios from 'axios';
import { ICityGeoData, IWeatherForecast } from '../types/wheather';

const BASE_URL = 'http://api.openweathermap.org';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const LIMIT = 1;

export const getCityGeoData = async (city: string) => {
  try {
    const response = await axios.get<ICityGeoData[]>(
      `${BASE_URL}/geo/1.0/direct?q=${city}&limit=${LIMIT}&appid=${API_KEY}`
    );
    return response.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
};

export const getWeatherForecast = async ({ lat, lon }: ICityGeoData) => {
  try {
    const response = await axios.get<IWeatherForecast>(
      `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
};
