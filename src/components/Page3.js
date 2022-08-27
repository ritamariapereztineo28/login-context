import { Card, Container } from "@material-ui/core";
import React from "react";
import { useAppState } from "../context/User/Appcontext";

function Page3() {
  const { state } = useAppState();
  return (
    <Card
      style={{
        width: "fit-content",
        margin:'2% auto',
        padding: "5%",
      }}
    >
      <label>{`Nombre: ${state.name}`}</label>
      <br />
      <label>{`Apellido: ${state.lastname}`}</label>
    </Card>
  );
}

export default Page3;
