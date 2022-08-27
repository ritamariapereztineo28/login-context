import { Button, Container, TextField } from "@material-ui/core";
import { Pagination, Stack } from "@mui/material";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/User/Appcontext";
import { initialState } from "../context/User/initialState";
import userReducer from "../context/User/userReducer";

function Page1() {
  const { state, dispatch } = useAppState();
  const [name, setName] = useState();
  const handleChange = ({ target: { value } }) => {
    setName(value);
  };
  const sendName = () => {
    dispatch({
      type: "NAME",
      payload: name,
    });
  };
  console.log(state);
  return (
    <Container>
      {("nombre:", state.name)}
      <TextField
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        name="name"
        onChange={(e) => handleChange(e)}
        fullWidth
      />

      <Link onClick={() => sendName()} to="/page2">
        registrar usuario
      </Link>
      {/* <Button onClick={()=>sendName()} to={"/page2"} tag={Link}>REGISTRAR NOMBRE</Button> */}
    </Container>
  );
}

export default Page1;
