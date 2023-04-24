import React, { useState, useRef } from "react";
import axios from "axios";
import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
} from "./styles";
import { Link } from "react-router-dom";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  // const navigate = useNavigate();
  // const users = [];
  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users/", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    // navigate("/usuarios")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" ref={inputName} />
        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />
        <Link to="/usuarios">
          <Button onClick={addNewUser}>
            Cadastrar
            <img alt="seta" src={Arrow} />
          </Button>
        </Link>
      </ContainerItems>
    </Container>
  );
}
export default Home;
