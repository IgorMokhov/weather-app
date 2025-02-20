import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};
