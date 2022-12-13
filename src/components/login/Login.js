import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, Field } from "formik";

import CustomInput from "./CustomInput";
import { advancedSchema } from "./SchemaForm";
import {
  Typography,
  Button,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Card from "../ui/Card";
import { loginUser } from "../../store/login/login-actions";
import Loading from "../ui/Loading";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, loading } = useSelector((state) => state.login);

  const onSubmit = async (values, actions) => {
    dispatch(loginUser(values));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    actions.resetForm();
  };

  const [values, setValues] = useState({
    username: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({ ...values, showPass: !values.showPass });
  };


  useEffect(() => {
    if (status === "success") {
      navigate("/dashboard");
    } 
  }, [status]);

  
  return (
    <Card>
        <Grid align="center">
          <Typography variant="h6">Login Here</Typography>
        </Grid>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={advancedSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <Grid container direction="column" spacing={2}>
                <Field
                  component={CustomInput}
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  type={values.showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePassVisibilty}
                          aria-label="toggle password"
                          edge="end"
                        >
                          {values.showPass ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Grid item>
                  <Button
                    disabled={
                      !formik.values.username ||
                      !formik.values.username ||
                      loading
                    }
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid>{loading && <Loading />}</Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        {status==="failed" && <Typography variant="h6" style={{color:"red"}}>Try Again</Typography>}
     </Card>
  );
}

export default Login;
