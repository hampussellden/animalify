import { useEffect, useState } from 'react'
import { mockAnimals } from './assets/animals'
import './App.css'
import AnimalSelect from './components/AnimalSelect';
import Card from './components/Card';
import CreateNewAnimal from './components/CreateNewAnimal';
import OpenAI from './components/OpenAI';
import { Animal } from './types';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  const [animalOne, setAnimalOne] = useState<Animal>();
  const [animalTwo, setAnimalTwo] = useState<Animal>();

  useEffect(() => {
    console.log({animalOne})
    console.log({animalTwo})
  }, [animalOne, animalTwo]);

  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <AnimalSelect selectName="animalOne-drop-down" animals={mockAnimals} onChange={setAnimalOne} />
        <AnimalSelect selectName="animalTwo-drop-down" animals={mockAnimals} onChange={setAnimalTwo} />
      </nav>
        <main>
          { animalOne && <Card animal={animalOne} />}
          { animalTwo && <Card animal={animalTwo} />}
        </main>
        <section>
          { animalOne && animalTwo ? <CreateNewAnimal selectedAnimal1={animalOne} selectedAnimal2={animalTwo}/> : <></>}
        </section>
      <section>
        {/* {animalOne && <OpenAI animal={animalOne}/>} */}
      </section>
    </QueryClientProvider>
  )
}

export default App
