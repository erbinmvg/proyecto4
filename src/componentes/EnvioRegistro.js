
import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { COLECCION, saveData, readData } from './CltesProvider';
const mail = React.createRef();
const nombre = React.createRef();
const apellidos = React.createRef();
const fono = React.createRef();
const mensaje = React.createRef();

function EnvioRegistro() {

  const [setCltes] = React.useState([]);

  const addCltes = async () => {
    await saveData(COLECCION, mail.current.value, nombre.current.value,apellidos.current.value,fono.current.value, mensaje.current.value)
      .then(() => {
        readData(COLECCION)
          .then((data) => {
            setCltes(data);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (



    
    <Row className="justify-content-md-center">
      <Col xs lg="6">
        <Form>
          <Form.Group className="mb-3" id="formNick">
            <Form.Control ref={mail} type="text" placeholder="eMail"></Form.Control>
          </Form.Group>

           <Form.Group className="mb-3" id="formNick">
            <Form.Control ref={nombre} type="text" placeholder="Nombre"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" id="formNick">
            <Form.Control ref={apellidos} type="text" placeholder="Apellidos"></Form.Control>
          </Form.Group>
         
          <Form.Group className="mb-3" id="formNick">
            <Form.Control ref={fono} type="text" placeholder="Teléfono"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" id="formMessage">
            <Form.Control ref={mensaje} as="textarea" rows={4} placeholder="Mensaje"></Form.Control>
          </Form.Group>
          
          <Form.Group className="mb-3" id="formSubmit">
            <Button onClick={() => addCltes()} variant="primary" type="button">Enviar</Button>
          </Form.Group>
          
        </Form>
      </Col>
    </Row>
  );

}

export { EnvioRegistro };