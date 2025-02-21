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
