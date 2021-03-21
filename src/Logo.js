import styled from 'styled-components';

const LogoDiv = styled.div`
  width: 100vw;
  top: 0px;
  background-color: #000d74;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.h1`
  font-family: 'Lovelo Black', 'Roboto', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 9em;
  margin-bottom: 40px;
`;

function Logo() {
    return(
      <LogoDiv>
        <LogoText> TAL<br/>FOR<br/>SENATE </LogoText>
      </LogoDiv>
    );
}

export default Logo;