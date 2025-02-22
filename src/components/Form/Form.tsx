import styled from 'styled-components';
import iconSearch from '../../assets/icons/icon-search.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { getCityGeoData, getWeatherForecast } from '../../api/weatherApi';
import { filterDailyForecast } from '../../utils/weatherUtils';
import { IWeatherForecast } from '../../types/weather';

const StyledForm = styled.form`
  position: relative;
  margin: 0 auto 70px;
  max-width: 750px;
`;

const StyledInput = styled.input`
  background-color: #d9d9d9;
  width: 100%;
  padding: 18px 100px;
  border-radius: 25px;
  font-size: 20px;
  outline: none;
  border: none;

  &::placeholder {
    font-size: 20px;
    color: #524e4e;
    font-weight: 200;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  left: 40px;
  top: 10px;
  width: 40px;
  height: 40px;
`;

const StyledError = styled.p`
  color: tomato;
  position: absolute;
  top: 70px;
  left: 100px;
`;

interface IFormProps {
  saveWeatherForecast: (weatherForecast: IWeatherForecast) => void;
}

export const Form = ({ saveWeatherForecast }: IFormProps) => {
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;

    try {
      const coordinates = await getCityGeoData(search);
      const weather = await getWeatherForecast(coordinates);
      const filteredWeather = filterDailyForecast(weather);
      saveWeatherForecast(filteredWeather);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }

    setSearch('');
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledImage
        src={iconSearch}
        alt="icon-search"
        aria-label="Search Icon"
      />
      <StyledInput
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledForm>
  );
};
