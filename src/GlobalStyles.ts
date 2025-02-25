import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  :root {
    --bg-color: #d9d9d9;
    --font-color: #252323;
    --primary-color: #524e4e;
    --error-color: tomato;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  background-color: var(--bg-color);
  color:  var(--font-color)
}
`;
