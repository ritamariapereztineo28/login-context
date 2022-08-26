import { Button, Container, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import useUser from "../context/User/useUser";


function Page3() {
  const { name, apellido } = useUser();
  return (
    <Container>
      <label>Nombre: {name}</label>
      <label>Apellido: {apellido}</label>
    </Container>
  );
}

export default Page3;
