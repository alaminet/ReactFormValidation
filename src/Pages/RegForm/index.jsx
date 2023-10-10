import React from "react";
import "./style.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const RegForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Container fixed>
        <h1 className="header">React Hook Form Validations third</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 4,
                    message: "minimum 4 letters is required",
                  },
                })}
                type="text"
                label="First Name"
                variant="standard"
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("lastName", {
                  required: "Last name is required",
                  maxLength: {
                    value: 5,
                    message: "Maximum 5 letters is allowed",
                  },
                })}
                type="text"
                label="Last Name"
                variant="standard"
                helperText={errors.lastName?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                label="Email"
                variant="standard"
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("password", {
                  required: "Email is required",
                })}
                type="password"
                label="Pasword"
                variant="standard"
              />
            </Grid>
            <Grid item xs={3}>
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default RegForm;
