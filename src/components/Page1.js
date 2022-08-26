import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react";

function Page1() {
    
  const [data, setData] = useState(value);

  const handleChange = ({ target: { name, value } }) => {

    // setData({
    //   ...data,
    //   [name]: value,
    // });
  };
  console.log("esta es nombre", data);
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
      <Button href={"/page2"}>REGISTRAR NOMBRE</Button>
    </Container>
  );
}

export default Page1;
