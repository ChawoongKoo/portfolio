import Arrow from "./components/Arrow";

function App() {
    let cards = [];
    for (let i = -10; i < 300; i++) {
        cards.push(<Arrow key={i}/>);
    }
    return (
        <>
            {cards}
        </>
    );
}

export default App;
