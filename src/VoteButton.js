import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700]
    },
    fontSize: '2em'
  }
}))(Button);

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 50px 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

function VoteButton() {
    return(
    <StyledDiv>
      <StyledLink href="https://lionlink.columbia.edu/submitter/election/start/473647" target="_blank" rel="noreferrer noopener">
        <ColorButton
            variant="contained"
            color="primary"
            size="large"
          >
            Vote now!
        </ColorButton>
      </StyledLink>
    </StyledDiv>
    );
}

export default VoteButton;