import { Button, Container, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useAppState } from "../context/User/Appcontext";
import useUser from "../context/User/useUser";


function Page3() {
  const {state, dispatch} =useAppState()
  console.log(state)
  return (
    <Container>
      <label>Nombre: {state.name}</label>
      <label>Apellido: {state.apellido}</label>
    </Container>
  );
}

export default Page3;
