import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PlatformDiv = styled.div`
  margin: 0 5vw 50px 5vw;
`;

const PlatformText = styled.p`
  font-family: 'Lovelo Black', 'Roboto', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 2em;
  margin-bottom: 10px;
`;

function Platform() {
  return (
    <PlatformDiv>
      <PlatformText>PLATFORM:</PlatformText>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Space Availability
        </AccordionSummary>
        <AccordionDetails>
          In 2017, only 41.4% of Columbia students were satisfied with the availability of space on campus. Our small campus is beautiful, but it has its issues. For years, Columbia has recognized the desire for a dining facility on the north side of campus, but no obvious location presented itself. Similarly, the administration has acknowledged the need for a new health center, but where to put it? If you’ve ever been in the CS help room, you know that it’s cramped and stressful, but there’s nowhere to expand to (other than the couches in the hallway…).
          <br/><br/>
          However, with the Business School moving to Manhattanville soon, there’s a big empty building in the middle of campus: Uris Hall. Rather than let the administration use the space for its flashy new initiatives, like the Climate School, I believe that the space should be used for necessary improvements to undergrad life. Columbia’s growth shouldn’t come at the cost of undergrad health and education.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Digital Resources
        </AccordionSummary>
        <AccordionDetails>
          Columbia offers a ton of resources through CUIT and the Library, such as free software, seminars on Python and High Performance Computing led by experts, and servers available for student use. However, very few students take full advantage of these programs. I want to raise awareness and find ways to expand these initiatives, so that students can get a leg up on classes, research, or their own personal projects.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Pandemic
        </AccordionSummary>
        <AccordionDetails>
          Due to the inequities inherent in online learning, not all students will be in the same position coming into next year. I plan to work closely with the other members of ESC to ensure that all students have a fair shot at success by developing potential policies for accommodations. Additionally, I will push for Columbia to keep recording lectures, even when in-person classes resume.
        </AccordionDetails>
      </Accordion>
    </PlatformDiv>
  );
}

export default Platform;