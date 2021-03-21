import styled from 'styled-components';
import { Desktop, MobileAndTablet } from "react-responsive-simple";

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

const LogoTextMobile = styled.h1`
  font-family: 'Lovelo Black', 'Roboto', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 5em;
  margin-bottom: 40px;
`;

function Logo() {
    return(
      <LogoDiv>
        <Desktop>
          <LogoText>TAL<br/>FOR<br/>SENATE</LogoText>
        </Desktop>
        
        <MobileAndTablet>
          <LogoTextMobile>TAL<br/>FOR<br/>SENATE</LogoTextMobile>
        </MobileAndTablet>
      </LogoDiv>
    );
}

export default Logo;