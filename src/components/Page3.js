import { Button, Container, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

function Page3() {
  const {value, setValue} = useContext(UserContext)
  return (
    <Container>
     <label>Nombre: {value.name}</label>
     <label>Apellido: fulana2</label>
     {/* <Button onClick={()=>setValue("klk")}>change value</Button> */}
    </Container>
  );
}

export default Page3;
