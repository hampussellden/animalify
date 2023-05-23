import { useState } from 'react'
import { mockAnimals } from './assets/animals'
import './App.css'
import AnimalSelect from './components/AnimalSelect';

function App() {
  const [animalOne, setAnimalOne] = useState();
  const [animalTwo, setAnimalTwo] = useState();

  return (
    <>
    <nav>
      <AnimalSelect selectName="animalOne-drop-down" selectId="animal-one-select" animals={mockAnimals} onChange={setAnimalOne} />
      <AnimalSelect selectName="animalTwo-drop-down" selectId="animal-two-select" animals={mockAnimals} onChange={setAnimalTwo} />
    </nav>
      <main>
        <div className='panel'> 
          <h2>Animal #1</h2>
          <p>Vertebrae group</p>
          <ul>
            <li>Attribute #1</li>
            <li>Attribute #2</li>
            <li>Attribute #3</li>
            <li>Attribute #4</li>
          </ul>
        </div>
        <div className='panel'>
          <h2>Animal #2</h2>
          <p>Vertebrae group</p>
          <ul>
            <li>Attribute #1</li>
            <li>Attribute #2</li>
            <li>Attribute #3</li>
            <li>Attribute #4</li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
