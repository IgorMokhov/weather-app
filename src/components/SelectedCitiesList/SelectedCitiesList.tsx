import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 65px;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--bg-color);
  color: var(--primary-color);
  padding: 5px 20px;
  border-radius: 25px;
  border: 1px solid var(--primary-color);
  cursor: pointer;

  &::after {
    content: '×';
    font-size: 24px;
    position: relative;
    color: var(--error-color);
  }
`;

interface ISelectedCitiesListProps {
  selectedCities: string[] | [];
  toggleSelectedCity: (currentCity: string) => void;
}

export const SelectedCitiesList = ({
  selectedCities,
  toggleSelectedCity,
}: ISelectedCitiesListProps) => {
  return (
    <StyledList>
      {selectedCities.map((city) => (
        <StyledItem onClick={() => toggleSelectedCity(city)} key={city}>
          {city}
        </StyledItem>
      ))}
    </StyledList>
  );
};
