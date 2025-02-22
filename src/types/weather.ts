export type WeatherTimeRange = '1d' | '3h';

export type WeatherFilters =
  | 'temp'
  | 'humidity'
  | 'pressure'
  | 'windTemp'
  | 'windSpeed';

export interface ICityGeoData {
  lat: number;
  lon: number;
}

export interface IWeatherData {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
}

export interface IWeatherForecast {
  city: {
    name: string;
  };
  list: IWeatherData[];
}

export interface IChartWeatherData {
  city: string;
  list: {
    time: string;
    temp: number;
    humidity: number;
    pressure: number;
    windTemp: number;
    windSpeed: number;
  }[];
}
