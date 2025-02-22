import styled from 'styled-components';
import { WeatherFilters } from '../../types/weather';
import { WeatherSelect } from '../WeatherSelect/WeatherSelect';

const StyledContainer = styled.div``;

interface IWeatherControlsProps {
  activeFilter: WeatherFilters;
  setActiveFilter: (filter: WeatherFilters) => void;
}

export const WeatherControls = ({
  activeFilter,
  setActiveFilter,
}: IWeatherControlsProps) => {
  return (
    <StyledContainer>
      <WeatherSelect
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </StyledContainer>
  );
};
