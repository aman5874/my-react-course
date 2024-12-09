const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
};

const App =() => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Pizza Explorer"),
        React.createElement(Pizza, {
            name: "Pizza Margarita",
            description: "Minimalism is key!",
        }),
        React.createElement(Pizza, {
            name: "Pizza Napoletana",
            description: "Like Margarita, but without the basil.",
        }),
        React.createElement(Pizza, {
            name: "Pizza Bianca",
            description: "Did somebody say oil?",
        }),
    ]
    );
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));