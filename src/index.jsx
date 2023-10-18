import { createRoot } from 'react-dom/client';

import "./index.scss";

//Main component (will eventually use all the others)
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <div>Good morning</div>
        </div>
    );
};

//Root of App
const container = document.querySelector("#root");
const root = createRoot(container);

//Render app in the root DOM element
root.render(<MyFlixApplication />);