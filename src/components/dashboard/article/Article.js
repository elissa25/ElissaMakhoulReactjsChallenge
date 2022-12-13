import { useSelector } from "react-redux";

import {Typography} from "@mui/material";

import Highlighter from "react-highlight-words";
import ReactReadMoreReadLess from "react-read-more-read-less";

import Card from "../../ui/Card";

function Article(props) {

  const {searchField}=useSelector((state)=>state.articles);
  
  return (
  
     <Card>
        <Typography variant="h6">Abstract:</Typography>
        <Highlighter
          searchWords={[searchField]}
          autoEscape={true}
          textToHighlight={props.abstract}
        />
        <ReactReadMoreReadLess
          charLimit={50}
          readMoreText={"Read More ▼"}
          readLessText={"Read Less ▲"}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
        >
          {props.abstract}
        </ReactReadMoreReadLess>
        <Typography variant="h6">Lead Paragraph:</Typography>
        <Highlighter
          searchWords={[searchField]}
         
          textToHighlight={props.abstract}
        />
        <ReactReadMoreReadLess
          charLimit={5}
          readMoreText={"Read More ▼"}
          readLessText={"Read Less ▲"}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
        >
          {props.lead_paragraph}
        </ReactReadMoreReadLess>
        </Card>
    );}

export default Article;
