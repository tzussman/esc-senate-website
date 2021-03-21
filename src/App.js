import styled from 'styled-components';
import Logo from './Logo.js';
import { Card } from '@material-ui/core';

const BioDiv = styled.div`
  text-align: justify;
  margin: 0 50px 50px 50px;
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
          Hi everyone! I’m Tal (he/him), and I’m running to be your ESC University Senator! I’m a sophomore studying CS and Political Science, and, fun fact, I miss Ferris pizza dearly :(
          <br/>
          <br/>
          SEAS students face a number of challenges, from cramped OH rooms to inequities in online learning. I plan to propose bold and creative solutions to these and other problems, and work closely with ESC to improve student life for our diverse community. We make up less than 2,000 people in a population of 50,000 – I want to ensure that your needs are well represented, day in, day out.
        </BioText>
        </Card>
      </BioDiv>
    </>
  );
}

export default App;
