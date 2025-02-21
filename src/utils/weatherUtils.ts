import { IWeatherForecast, IWeatherData } from '../types/wheather';

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
