import { Container } from "@material-ui/core";
import React from "react";
import { useAppState } from "../context/User/Appcontext";

function Page3() {
  const { state } = useAppState();
  return (
    <Container
      style={{
        width: "fit-content",
        marginTop: "10%",
        padding: "5%",
      }}
    >
      <label>{`Nombre: ${state.name}`}</label>
      <br />
      <label>{`Apellido: ${state.lastname}`}</label>
    </Container>
  );
}

export default Page3;
