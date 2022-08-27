import { Button, Container, TextField } from "@material-ui/core";
import { useReducer, useState } from "react";
import { initialState } from "../context/User/initialState";
import userReducer from "../context/User/userReducer";
import { Link } from "react-router-dom";
import { useAppState } from "../context/User/Appcontext";

function Page2() {
  const {state, dispatch} =useAppState()
  const [apellido, setApellido] = useState();

  const handleChange = ({ target: { value } }) => {
    setApellido(value);
  };
  const sendName = () => {
    dispatch({
      type: "APELLIDO",
      payload: apellido,
    });
  };
  console.log("klk----",state)

  return (
    <Container>
      {'nombre:',state.name}
      <TextField
        id="outlined-basic"
        label="Apellido"
        variant="outlined"
        name="apellido"
        onChange={(e) => handleChange(e)}
        fullWidth
      />
      <Link onClick={() => sendName()} to="/page3">
        registrar usuario
      </Link>
      {/* <Button onClick={()=>sendName()} href={"/page3"}>REGISTRAR APELLIDO</Button> */}
    </Container>
  );
}

export default Page2;
