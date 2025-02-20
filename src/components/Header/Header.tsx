import styled from 'styled-components';
import iconLogo from '../../assets/icons/icon-logo.svg';

const StyledHeader = styled.header`
  margin-bottom: 100px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  left: 330px;
  top: 8px;
  width: 70px;
  height: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  padding-top: 30px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Image src={iconLogo} alt="logo" />
      <Title>Weather App</Title>
    </StyledHeader>
  );
};
