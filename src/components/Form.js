
import { Container, Row, Col, Form, InputGroup, FormControl, Card, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import qrcode from 'qrcode'

export default class WiFiForm extends Component {
    canvas = null;
    constructor(props) {
        super(props);
        this.state = {
            ssid: '',
            password: '',
            encryption: '',
        };
    
        this.handleSsid = this.handleSsid.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.canvas = document.getElementById('canvas')
    }

    handleSsid = (e) => {
        this.setState({ssid: e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }
    handleSelect = (e) => {
        this.setState({encryption: e.target.value})
    }
    handleSubmit = async (e) => {
        const { ssid, password, encryption } = this.state;
        var text = `WIFI:S:${ssid};T:${encryption};P:${password};;`
        qrcode.toCanvas(this.canvas, text, {width: 400})
        e.preventDefault()
        console.log(this.state)
    }
   
    render() {
        return (
            <div>
                <Container>
                    <Card className="p-3 mt-5" border='1'>
                        <Card.Header className="display-6 fw-bold">WiFi QR Generator</Card.Header>
                        <Card.Body>
                            <Row className="p-3">
                                <Col xs={12} md={6} lg={6} >
                                        <Form className="mt-3" onSubmit={this.handleSubmit}>
                                            <Form.Group>
                                                <label className="h6">WiFi SSID</label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><i className="material-icons">wifi</i></InputGroup.Text>
                                                    <FormControl required  id="inlineFormInputGroup" name="ssid" placeholder="SSID"  onChange={this.handleSsid} value={this.state.ssid} />
                                                </InputGroup>
                                                <label className="h6">WiFi Password</label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><i className="material-icons">password</i></InputGroup.Text>
                                                    <FormControl required  id="inlineFormInputGroup" placeholder="Password" name="password" type="password" onChange={this.handlePassword} value={this.state.password}/>
                                                </InputGroup>
                                                <label className="h6">Encryption Type</label>
                                                <InputGroup className="mb-3">
                                                    <Form.Select required  aria-label="Default select example" name="encryption" onChange={this.handleSelect} value={this.state.encryption}>
                                                        <option>--SELECT--</option>
                                                        <option value="WPA">WPA/WPA2</option>
                                                        <option value="WEP">WEP</option>
                                                        <option value="none">None</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Form.Group>
                                            <div className="text-end">
                                                <Button type="submit" variant="outline-primary">Generate</Button>
                                            </div>
                                        </Form>
                                </Col>
                                <Col xs={12} md={6} lg={6} >
                                    <h6 className="text-center">Your WiFi QR Code will be displayed here</h6>
                                    <div className="text-center">
                                        <canvas id="canvas" width="300" height="300"></canvas>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Row>
                                <Col>
                                    <a href=" https://github.com/donymvarkey/wifi-qr-gen.git" target="_blank">GitHub Repo</a>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Container>
            </div>
        )
    }
}

