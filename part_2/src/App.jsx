import {createRoot} from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
    return (
        <div>
            <h1>Pizza Explorer</h1>
            <Pizza name="Pizza Margarita" description="Minimalism is key!" />
            <Pizza name="Pizza Napoletana" description="Like Margarita, but without the basil." />
            <Pizza name="Pizza Bianca" description="Did somebody say oil?" />
        </div>
    );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);