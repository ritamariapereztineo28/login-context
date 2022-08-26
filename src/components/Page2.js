import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react";

function Page2() {
  const [data, setData] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };
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
      <Button href={"/page3"}>REGISTRAR APELLIDO</Button>
    </Container>
  );
}

export default Page2;
