import styled from 'styled-components';
import logo from '../../assets/icons/icon-logo.svg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 478px;
`;

const StyledLoader = styled.img`
  width: 120px;
  height: 100px;
  margin-top: 100px;
`;

export const Loader = () => {
  return (
    <StyledContainer>
      <StyledLoader src={logo} alt="loader" />
    </StyledContainer>
  );
};
