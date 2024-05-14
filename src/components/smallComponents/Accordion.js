import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionFunc = (props) => {
  return (
    <div>
        <Accordion defaultExpanded className="accordian">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography ><span className="accordian-title">{props.title} ({props.itemCards.length})</span></Typography>
                </AccordionSummary>
                <AccordionDetails>{props.itemCardsItems}</AccordionDetails>
        </Accordion>
    </div>
  )
}

export default AccordionFunc