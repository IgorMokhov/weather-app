import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { WeatherTimeRange } from '../../types/weather';

const StyledLabel = styled.label`
  cursor: pointer;
  font-size: 16px;
`;

const StyledInput = styled.input`
  cursor: pointer;
  margin-right: 10px;
  transform: scale(1.6);
`;

interface WeatherPeriodSwitchProps {
  timeRange: WeatherTimeRange;
  onToggle: (range: WeatherTimeRange) => void;
}

export const WeatherPeriodSwitch = ({
  timeRange,
  onToggle,
}: WeatherPeriodSwitchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked ? '3h' : '1d');
  };

  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        checked={timeRange === '3h'}
        onChange={handleChange}
      />
      Every 3 hours
    </StyledLabel>
  );
};
