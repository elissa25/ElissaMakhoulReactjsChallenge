
import {Grid,TextField,Box} from "@mui/material";

const CustomInput = ({field, form :{touched,errors},...props }) => {
  
  return (
    <> 
 	<Grid item>
		<TextField
		     {...field}
         {...props}
         fullWidth
         variant="outlined"
		     required  
        sx={{borderColor: field.touched && field.error ? 'red' : ""}}    
		/>
    { errors[field.name] && touched[field.name]?
       <Box sx={{color:'red'}}>{errors[field.name]}</Box>
      :null
      }

	</Grid>
    </> 
  );
};
export default CustomInput;