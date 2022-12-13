

import { Grid,Box,Typography } from "@mui/material";

const NoArticlesFound = () => {
  return (
    <Grid  >
    <Box display="flex" 
    alignItems="center"
    justifyContent="center">
       <Typography variant="h3"> No Articles found!</Typography>
     
     </Box>
      
    </Grid>
  );
};

export default NoArticlesFound;