import styled from 'styled-components';
import { Card } from '@material-ui/core';
import pic from './resources/Tal.jpg';
import { Desktop, MobileAndTablet } from "react-responsive-simple";

const BioDiv = styled.div`
  text-align: justify;
  margin: 0 5vw 50px 5vw;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const ContainerDivMobile = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

const BioText = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  color: black;
  font-size: 2em;
  margin: 20px;
`;

const BioTextMobile = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  color: black;
  font-size: 1em;
  margin: 20px;
`;

const BioTextBottom = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  color: black;
  font-size: 2em;
  margin: 0 20px 20px 20px;
`;

const BioTextBottomMobile = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  color: black;
  font-size: 1em;
  margin: 0 20px 20px 20px;
`;

const ProfilePic = styled.img`
  width: 18vw;
  height: 18vw;
  margin: 0 0 20px 20px;
`;

const ProfilePicMobile = styled.img`
  width: 75vw;
  height: 75vw;
  margin: 0 20px 20px 20px;
`;

const ProfilePicMobileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Bio() {
  return (
      <BioDiv>
        <Card>
          <Desktop>
            <BioText>
            Hi everyone! I’m Tal (he/him), and I’m running to be your ESC University Senator! I’m a sophomore studying CS and Political Science, and, fun fact, I miss Ferris pizza <span aria-label="pizza">🍕</span> dearly :(
            </BioText>
            <ContainerDiv>
              <ProfilePic src={pic}/>
              <BioTextBottom>
              SEAS students face a number of challenges, from cramped OH rooms to inequities in online learning. I plan to propose bold and creative solutions to these and other problems, and work closely with ESC to improve student life for our diverse community. We make up less than 2,000 people in a population of 50,000 – I want to ensure that your needs are well represented, day in, day out.
              </BioTextBottom>
            </ContainerDiv>
          </Desktop>

          <MobileAndTablet>
            <ContainerDivMobile>
              <BioTextMobile>
                Hi everyone! I’m Tal (he/him), and I’m running to be your ESC University Senator! I’m a sophomore studying CS and Political Science, and, fun fact, I miss Ferris pizza <span aria-label="pizza">🍕</span> dearly :(
              </BioTextMobile>
              <ProfilePicMobileDiv>
              <ProfilePicMobile src={pic}/>
              </ProfilePicMobileDiv>
              <BioTextBottomMobile>
                SEAS students face a number of challenges, from cramped OH rooms to inequities in online learning. I plan to propose bold and creative solutions to these and other problems, and work closely with ESC to improve student life for our diverse community. We make up less than 2,000 people in a population of 50,000 – I want to ensure that your needs are well represented, day in, day out.
              </BioTextBottomMobile>
              </ContainerDivMobile>
          </MobileAndTablet>
        </Card>
      </BioDiv>
  );
}

export default Bio;