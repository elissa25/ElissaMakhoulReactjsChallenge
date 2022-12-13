import React from "react";

import {Paper, Grid,} from "@mui/material";

function Card(props) {
  const paperStyle = { padding: "100px 50px", width: 300, margin: "50px auto" };

  return (
    <Grid item xs={8} lg={4} md={6}>
      <Paper elevation={5} style={paperStyle} xs={12} lg={6}>
     {props.children}
      </Paper>

    </Grid>
  );
}

export default Card;
