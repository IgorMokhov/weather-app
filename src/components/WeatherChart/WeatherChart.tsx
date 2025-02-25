import styled from 'styled-components';
import { IChartWeatherData, WeatherFilters } from '../../types/weather';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { SeriesOptionsType } from 'highcharts';

const StyledChart = styled.div`
  margin: 35px 0;
  border-radius: 10px;
`;

interface IWeatherChartProps {
  weatherList: IChartWeatherData[];
  activeFilter: WeatherFilters;
}

export const WeatherChart = ({
  weatherList,
  activeFilter,
}: IWeatherChartProps) => {
  const processDataForHighcharts = (weatherList: IChartWeatherData[]) => {
    return weatherList.map(
      (weather) =>
        ({
          name: weather.city,
          data: weather.list.map((item) => [item.time, item[activeFilter]]),
          type: 'spline',
        } as SeriesOptionsType)
    );
  };

  const series = processDataForHighcharts(weatherList);

  const options: Highcharts.Options = {
    chart: {
      type: 'spline',
      backgroundColor: 'var(--bg-color)',
      height: 350,
      width: 1200,
      style: {
        borderRadius: 25,
      },
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
    },
    yAxis: {
      title: {
        text: activeFilter,
      },
    },
    tooltip: {
      xDateFormat: '%Y-%m-%d',
    },
    series: series,
  };

  if (!weatherList?.length) return null;

  return (
    <StyledChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledChart>
  );
};
