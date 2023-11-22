import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-bootstrap';

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar expand="lg" className="mb-5 justify-content-end navbar-style" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    MyFlix
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-end d-flex flex-grow-1">
                        {!user && (
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
