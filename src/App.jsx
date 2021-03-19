import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "./App.css";
let RowArr = ["", "", ""];
function App() {
  const [storeId, setStoreId] = useState("");
  const [devices, setDevices] = useState([]);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formObj = { storeId, devices, comments };
    console.log(formObj);
  };
  const handleChange = (i, value, name) => {
    let obj = {};
    if (devices[i]) {
      obj = devices[i];
    }
    obj[name] = value;
    let tempDevices = devices;
    tempDevices[i] = obj;
    setDevices([...tempDevices]);
  };
  return (
    <main>
      <header>
        <h2>Store Asset Management</h2>
      </header>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group controlId="orderId">
            <Form.Label>Store #:</Form.Label>
            <Form.Control
              value={storeId}
              onChange={(e) => setStoreId(e.target.value)}
              type="number"
              placeholder="Enter Store Id"
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>Register</Col>
          <Col>Device Type</Col>
          <Col>Serial</Col>
        </Row>
        {RowArr.map((d, i) => (
          <Row key={i}>
            <Col>
              <Form.Control
                name="register"
                value={devices[i] ? devices[i].register || "" : ""}
                onChange={(e) => handleChange(i, e.target.value, e.target.name)}
                as="select"
              >
                <option value="">Choose...</option>
                <option>123</option>
                <option>124</option>
                <option>125</option>
                <option>126</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                name="device"
                value={devices[i] ? devices[i].device || "" : ""}
                as="select"
                onChange={(e) => handleChange(i, e.target.value, e.target.name)}
              >
                <option value="" disabled>
                  Choose...
                </option>
                <option>ABC</option>
                <option>DEF</option>
                <option>GEH</option>
                <option>JKL</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                name="serial"
                value={devices[i] ? devices[i].serial || "" : ""}
                type="text"
                placeholder="Enter Serial Number"
                onChange={(e) => handleChange(i, e.target.value, e.target.name)}
              />
            </Col>
          </Row>
        ))}
        <Row>
          <Form.Control
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments"
            as="textarea"
            rows={3}
          />
        </Row>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </main>
  );
}

export default App;
