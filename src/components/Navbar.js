import React from 'react'
import { Container, Navbar,} from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        Wifi QR Generator
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
