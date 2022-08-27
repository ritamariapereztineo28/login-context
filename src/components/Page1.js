import { Button, Container, TextField } from "@material-ui/core";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { initialState } from "../context/User/initialState";
import userReducer from "../context/User/userReducer";

function Page1() {
  const [name, setName] = useState();
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isRedirect, setIsRedirect] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };
  const sendName = () => {
    dispatch({
      type: "NAME",
      payload: name,
    });
  };
  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        name="name"
        onChange={(e) => handleChange(e)}
        fullWidth
      />
      <Link to="/page2">
        <button type="button">Click Me!</button>
      </Link>

      <Button onClick={()=>sendName()} href={"/page3"}>REGISTRAR NOMBRE</Button>
    </Container>
  );
}

export default Page1;
