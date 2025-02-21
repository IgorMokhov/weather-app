import {
  IWeatherForecast,
  IWeatherData,
  IChartWeatherData,
} from '../types/weather';

export const filterDailyForecast = (
  weatherData: IWeatherForecast
): IWeatherForecast => {
  const filteredList = weatherData.list.reduce<IWeatherData[]>((acc, entry) => {
    const date = entry.dt_txt.split(' ')[0];
    const isNewNoonForecast =
      !acc.some((item) => item.dt_txt.startsWith(date)) &&
      entry.dt_txt.includes('12:00:00');

    if (isNewNoonForecast) {
      acc.push(entry);
    }

    return acc;
  }, []);

  return {
    ...weatherData,
    list: filteredList,
  };
};

export const processWeatherData = (
  weather: IWeatherForecast | null
): IChartWeatherData => {
  if (!weather) return { city: '', list: [] };

  return {
    city: weather?.city.name,
    list: weather?.list.map(({ main, wind, dt_txt }) => ({
      time: dt_txt.split(' ')[0],
      temp: main.temp,
      humidity: main.humidity,
      pressure: main.pressure,
      windTemp: wind.deg,
      windSpeed: wind.speed,
    })),
  };
};
