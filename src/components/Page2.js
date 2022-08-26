import { Button, Container, TextField } from "@material-ui/core";
import { useReducer, useState } from "react";
import { initialState } from "../context/User/initialState";
import userReducer from "../context/User/userReducer";

function Page2() {
  const [apellido, setApellido] = useState();
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleChange = ({ target: { value } }) => {
    setApellido(value);
  };
  const sendName = () => {
    dispatch({
      type: "APELLIDO",
      payload: apellido,
    });
  };
  console.log(state)
  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="Apellido"
        variant="outlined"
        name="apellido"
        onChange={(e) => handleChange(e)}
        fullWidth
      />
      <Button onClick={()=>sendName()} href={"/page3"}>REGISTRAR APELLIDO</Button>
    </Container>
  );
}

export default Page2;
