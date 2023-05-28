import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import { mockAnimals } from "./assets/animals";
import { Animal } from "./types";

// import AnimalSelect from "./components/AnimalSelect";
// import Card from "./components/Card";
import Header from "./components/Header";
import AnimalMutation from "./components/AnimalMutation";
import AnimalSelectList from "./components/AnimalSelectList";
import AnimalListItem from "./components/AnimalListItem";

// import OpenAI from './components/OpenAI';

const queryClient = new QueryClient();
function App() {
    const [animalOne, setAnimalOne] = useState<Animal>();
    const [animalTwo, setAnimalTwo] = useState<Animal>();

    useEffect(() => {
        console.log(animalOne?.name);
        console.log(animalTwo?.name);
    }, [animalOne, animalTwo]);

    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <main>
                <section className="hero">
                    <div className="content-wrapper">
                        <span>
                            A <p>IMALIFY</p>
                        </span>
                        <h2>CREATE YOUR OWN DREAM ANIMAL USING A SELECTION OF ANIMALS FROM OUR DATABASE.</h2>
                        <p>Select two different creatures and let the doctor work her magic to uncover the mutation we get</p>
                    </div>
                </section>
                <section className="animal-selection">
                    <AnimalSelectList>
                        <AnimalListItem onClick={setAnimalOne} animals={mockAnimals} handleSelected={animalOne?.name} />
                    </AnimalSelectList>
                    <AnimalSelectList>
                        <AnimalListItem onClick={setAnimalTwo} animals={mockAnimals} handleSelected={animalTwo?.name} />
                    </AnimalSelectList>
                </section>

                <section>{animalOne && animalTwo ? <AnimalMutation selectedAnimal1={animalOne} selectedAnimal2={animalTwo} /> : <></>}</section>

                {/* <AnimalSelect selectName="animalOne-drop-down" animals={mockAnimals} onChange={setAnimalOne} /> */}
                {/* <AnimalSelect selectName="animalTwo-drop-down" animals={mockAnimals} onChange={setAnimalTwo} /> */}
                {/* {animalOne && <Card animal={animalOne} />}
                {animalTwo && <Card animal={animalTwo} />} */}
            </main>

            <section>{/* {animalOne && <OpenAI animal={animalOne}/>} */}</section>
        </QueryClientProvider>
    );
}

export default App;
