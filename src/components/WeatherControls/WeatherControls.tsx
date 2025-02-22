import styled from 'styled-components';
import { WeatherFilters, WeatherTimeRange } from '../../types/weather';
import { WeatherSelect } from '../WeatherSelect/WeatherSelect';
import { WeatherPeriodSwitch } from '../WeatherPeriodSwitch/WeatherPeriodSwitch';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

interface IWeatherControlsProps {
  activeFilter: WeatherFilters;
  timeRange: WeatherTimeRange;
  setActiveFilter: (filter: WeatherFilters) => void;
  setTimeRange: (range: WeatherTimeRange) => void;
}

export const WeatherControls = ({
  activeFilter,
  timeRange,
  setActiveFilter,
  setTimeRange,
}: IWeatherControlsProps) => {
  return (
    <StyledContainer>
      <WeatherPeriodSwitch timeRange={timeRange} onToggle={setTimeRange} />
      <WeatherSelect
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </StyledContainer>
  );
};
