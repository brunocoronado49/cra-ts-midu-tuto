import { useState, useEffect } from "react";
import { List } from "./components/List";
import { Form } from './components/Form'
import { AppState } from './interfaces/AppInterfaces'
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

function App() {
    const [subs, setSubs] = useState<AppState["subs"]>([]);
    const [newSubsNumber, setNewSubsNumber] =
        useState<AppState["newSubsNumber"]>(0);

    useEffect(() => {
        setSubs(INITIAL_STATE);
    }, []);

    return (
        <div className="App">
            <h1>Hello there</h1>
            <List subs={subs} />
            <Form />
        </div>
    );
}

export default App;
