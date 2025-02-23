import styled from 'styled-components';
import { IWeatherForecast } from '../../types/weather';

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin-left: 65px;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #d9d9d9;
  color: #524e4e;
  padding: 5px 20px;
  border-radius: 25px;
  cursor: pointer;

  &::after {
    content: '×';
    font-size: 24px;
    position: relative;
    color: tomato;
  }
`;

interface ISelectedCitiesListProps {
  selectedCities: IWeatherForecast[] | [];
  toggleSelectedCity: (currentCity: IWeatherForecast) => void;
}

export const SelectedCitiesList = ({
  selectedCities,
  toggleSelectedCity,
}: ISelectedCitiesListProps) => {
  return (
    <StyledList>
      {selectedCities.map((city) => (
        <StyledItem
          onClick={() => toggleSelectedCity(city)}
          key={city.city.name}
        >
          {city.city.name}
        </StyledItem>
      ))}
    </StyledList>
  );
};
