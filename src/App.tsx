import { useEffect, useState } from "react";
import Arrow from "./components/Arrow";

function App() {
    const [mousePos, setMousePos]= useState([0, 0]);

    useEffect(() => {
        const handleMouseMove = (event:MouseEvent) => {
            setMousePos([event.pageX, event.pageY]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () =>{
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, []);



    let cards = [];
    for (let i = 0; i < 100; i++) {
        cards.push(<Arrow key={i} mouseX={mousePos[0]} mouseY={mousePos[1]}/>);
    }
    return (
        <>
            {cards}
        </>
    );
}

export default App;
