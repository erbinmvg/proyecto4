import React from "react";
import { Container } from "react-bootstrap";
import { EnvioRegistro } from "./componentes/EnvioRegistro";
import { EnvioReserva } from "./componentes/envioReserva";
//import { EnvioReserva } from "./componentes/envioReserva";
//import { Empty } from "./componentes/Empty";

import { Header } from "./componentes/Header";
import { HeaderReserva } from "./componentes/HeaderReserva";
//import { Cliente} from "./componentes/Cliente";
//import { ListaCltes } from "./componentes/ListaCltes";
//import { readData, COLECCION } from "./componentes/CltesProvider";

function App() {

  //const [clientes, setTuits] = React.useState([]);

  //React.useEffect(() => {
   // readData(COLECCION)
    //  .then((data) => {
      //  setTuits(data);
     // });

 // });

  return (
    <Container>
      
      <Header />
      <EnvioRegistro />
      <hr />
      
    </Container>
  );
}

export default App;