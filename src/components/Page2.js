import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/User/Appcontext";

function Page2() {
  const { state, dispatch } = useAppState();
  const [lastName, setLastName] = useState();

  const handleChange = ({ target: { value } }) => {
    setLastName(value);
  };
  const sendName = () => {
    dispatch({
      type: "LASTNAME",
      payload: lastName,
    });
  };
  return (
    <Container
      style={{
        width: "fit-content",
        margin: "2% auto",
        padding: "5%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Apellido"
        variant="outlined"
        name="lastname"
        onChange={(e) => handleChange(e)}
        fullWidth
      />
      <Link
        onClick={() => sendName()}
        to="/page3"
        style={{ textDecoration: "none" }}
      >
        <Button variant="outlined" style={{ margin: "2%" }}>
          Registrar Apellido
        </Button>
      </Link>
    </Container>
  );
}

export default Page2;
