import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background: ${colors.backgroundColor};
  `}
`;

const Button = styled.div`
  background: pink;
  padding: 20px;
`;

interface Props {
  setTheme: () => void;
}

const HomePage: React.FC<Props> = ({ setTheme }) => {
  const testing = 'Toggle Theme';

  return (
    <Container>
      <Button onClick={setTheme}>{testing}</Button>
    </Container>
  );
};

export default HomePage;
