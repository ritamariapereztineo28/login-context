import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/User/Appcontext";

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
  return (
    <Container
      style={{
        width: "fit-content",
        margin:'2% auto',
        padding: "5%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        name="name"
        onChange={(e) => handleChange(e)}
        fullWidth
      />

      <Link
        onClick={() => sendName()}
        to="/page2"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined" style={{ margin: "2%" }}>
          Registrar Nombre
        </Button>
      </Link>
    </Container>
  );
}

export default Page1;
