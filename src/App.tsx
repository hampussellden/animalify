import { useEffect, useState } from "react";
import "./App.css";

import { mockAnimals } from "./assets/animals";
import { Animal, NewAnimal } from "./types";

// import AnimalSelect from "./components/AnimalSelect";
import Header from "./components/Header";
import AnimalMutation from "./components/AnimalMutation";
import AnimalSelectList from "./components/AnimalSelectList";
import AnimalListItem from "./components/AnimalListItem";
import OpenAI from "./components/OpenAI";

function App() {
    const [animalOne, setAnimalOne] = useState<Animal>();
    const [animalTwo, setAnimalTwo] = useState<Animal>();
    const [newAnimal, setNewAnimal] = useState<NewAnimal>();

    // useEffect(() => {
    //     console.log(animalOne?.name);
    //     console.log(animalTwo?.name);
    console.log(newAnimal?.name);
    // }, [animalOne, animalTwo,newAnimal]);

    useEffect(() => {
        setNewAnimal(undefined);
    }, [animalOne, animalTwo]);

    return (
        <>
            <Header />
            <main>
                <section id="home" className="hero">
                    <div className="content-wrapper">
                        <span>
                            A <p>IMALIFY</p>
                        </span>
                        <h2>CREATE YOUR OWN DREAM ANIMAL USING A SELECTION OF ANIMALS FROM OUR DATABASE.</h2>
                        <p>Select two different creatures and let the doctor work her magic to uncover the mutation we get</p>
                    </div>
                </section>
                <section id="mutation" className="animal-selection">
                    <AnimalSelectList>
                        <AnimalListItem onClick={setAnimalOne} animals={mockAnimals} handleSelected={animalOne?.name} />
                    </AnimalSelectList>
                    <AnimalSelectList>
                        <AnimalListItem onClick={setAnimalTwo} animals={mockAnimals} handleSelected={animalTwo?.name} />
                    </AnimalSelectList>
                </section>
                <section className="mutation-section">
                    {animalOne && animalTwo ? <AnimalMutation selectedAnimal1={animalOne} selectedAnimal2={animalTwo} setNewAnimal={setNewAnimal} /> : <></>}
                    {animalOne && animalTwo && newAnimal && <OpenAI animal={newAnimal} />}
                </section>
            </main>

            {/* <section className="ai-container">{animalOne && animalTwo && newAnimal && <OpenAI animal={newAnimal} />}</section> */}
        </>
    );
}

export default App;
