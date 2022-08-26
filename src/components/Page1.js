import { Button, Container, TextField } from "@material-ui/core";
import { useReducer, useState } from "react";
import { initialState } from "../context/User/initialState";
import userReducer from "../context/User/userReducer";
import { Link, Redirect } from "react-router-dom";

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
    setIsRedirect(true)
  };
  console.log(state);
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
      <Button onClick={() => sendName()}>
        REGISTRAR NOMBRE
      </Button>
      {isRedirect && <Redirect to="/page2" />}
    </Container>
  );
}

export default Page1;
