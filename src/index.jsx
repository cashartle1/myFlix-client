import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

import "./index.scss";

const MyFlixApplication = () => {
    return (
        <Container>
            <MainView />
        </Container>
    );
};

//Root of App
const container = document.querySelector("#root");
const root = createRoot(container);

//Render app in the root DOM element
root.render(<MyFlixApplication />);