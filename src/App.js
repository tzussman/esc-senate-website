import styled from 'styled-components';
import Logo from './Logo.js';
import { Card } from '@material-ui/core';

const BioDiv = styled.div`
  text-align: justify;
  margin: 0 50px 0 50px;
  top: 85vh;
`;

const BioText = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  color: black;
  font-size: 2em;
  margin: 20px;
`;

function App() {
  return (
    <>
      <Logo/>

      <BioDiv>
        <Card>
        <BioText>
          Hi everyone! I'm Tal and I'm running to be your ESC University Senator. R
        </BioText>
        </Card>
      </BioDiv>
    </>
  );
}

export default App;
