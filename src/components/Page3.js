import { Button, Container, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import useUser from "../context/useUser";

function Page3() {
  const user = useUser()
  return (
    <Container>
     <label>Nombre: {user.name}</label>
     <label>Apellido: {user.apellido}</label>
     {/* <Button onClick={()=>setValue("klk")}>change value</Button> */}
    </Container>
  );
}

export default Page3;
