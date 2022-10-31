import { useState, useEffect } from "react";
import "./App.css";

const INITIAL_STATE = [
    {
        nick: "maria",
        avatar: "https://i.pravatar.cc/150?u=maria",
        subMonths: 3,
        description: "Hola soy un programador",
    },
    {
        nick: "franco",
        avatar: "https://i.pravatar.cc/150?u=franco",
        subMonths: 7,
        description: "Hola soy un diseñador",
    },
];

interface Sub {
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
}

function App() {
    const [subs, setSubs] = useState<Array<Sub>>([]);

    useEffect(() => {
        setSubs(INITIAL_STATE);
    }, []);

    return (
        <div className="App">
            <h1>Hello there</h1>
            {subs.map((sub) => {
                return (
                    <li key={sub.nick}>
                        <img src={sub.avatar} alt="avatar" />
                        <h3>
                            {sub.nick} (<small>{sub.subMonths}</small>)
                        </h3>
                        <p>{sub.description?.substring(0, 100)}</p>
                    </li>
                );
            })}
        </div>
    );
}

export default App;
