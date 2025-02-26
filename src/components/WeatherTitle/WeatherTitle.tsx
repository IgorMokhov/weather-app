import styled from 'styled-components';

const StyledTitle = styled.h2`
  margin-left: 100px;
  font-size: 50px;
  font-weight: 200;
  cursor: pointer;
`;

interface IWeatherTitleProps {
  title: string;
  isSelected: boolean;
  toggleSelectedCity: (nameCity: string) => void;
}

export const WeatherTitle = ({
  title,
  toggleSelectedCity,
  isSelected,
}: IWeatherTitleProps) => {
  return (
    <StyledTitle onClick={() => toggleSelectedCity(title)}>
      {title} {isSelected ? '-' : '+'}
    </StyledTitle>
  );
};
