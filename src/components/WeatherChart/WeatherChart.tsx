import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { IWeatherForecast } from '../../types/weather';
import { processWeatherData } from '../../utils/weatherUtils';

const StyledChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IWeatherChartProps {
  weather: IWeatherForecast | null;
}

export const WeatherChart = ({ weather }: IWeatherChartProps) => {
  const chartData = processWeatherData(weather);

  if (!weather) return null;

  return (
    <StyledChart>
      <AreaChart width={1200} height={350} data={chartData.list}>
        <defs>
          <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis domain={['auto', 'auto']} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTemp)"
        />
      </AreaChart>
    </StyledChart>
  );
};
