import { useEffect, useState } from "react";
import { NewAnimal } from '../../types';
import styled from 'styled-components';
// import lens from "./assets/searchicon.png";
// import loadingIndicator from "./assets/loading.gif";

const MutateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    color: white;
    background-color: rgba(18, 6, 5, 0.725);
`;
const AnswerContainer = styled.div`
      background-color: rgba(18, 6, 5, 0.722);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 1rem;
      max-width: 60vw;
`;


const OpenAI = (props:{animal:NewAnimal}) => {
  const [prompt, updatePrompt] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string | undefined>(undefined);
  

  console.log({prompt});
  console.log({loading});
  console.log({answer});
  const makePrompt = (animal:NewAnimal) => {
    return `Write a short story about the newly discovers animal ${animal.name}. It is a cross breed from the ${animal.parents[0]} and ${animal.parents[1]}. It has the colors of ${animal.colorScheme.color[0]} with ${animal.colorScheme.pattern[0]} patterns. Key attributes include ${animal.attribute[0]}. It lives in/on ${animal.location[0]}}.`
  }
  useEffect(() => {
    const sendPrompt = async () => {
      if(prompt === undefined){
        return;
      }
      try {
        setLoading(true);
        
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        };
        console.log({requestOptions});
        const res = await fetch("/api/ask", requestOptions);
        
        if (!res.ok) {
          throw new Error("Something went wrong. Fetch failed.");
        }
        
        const {message} = await res.json();
        
        setAnswer(message);
      } catch (err) {
        console.error("error", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
      console.log("prompt", prompt);
    }
    sendPrompt()
  },[prompt]);
  
  useEffect(() => {
    if (prompt != null && prompt.trim() === "") {
      setAnswer(undefined);
    }
  }, [prompt]);
  return (
    <div className="app">
          <div className="app-container">
              <div className="spotlight__wrapper">
                  {/* <h2>Hello World</h2>; */}
                  <MutateButton disabled={loading}
                  // style={{
                  //   // backgroundImage: loading ? `url(${loadingIndicator})` : `url(${lens})`,
                  // }}
                  // onChange={(e) => updatePrompt(mockPrompt)}
                  onClick={(e) => {updatePrompt(makePrompt(props.animal))}}
                  >
                    Mutate!
                  </MutateButton>
                  {/* <input
                      type="text"
                      className="spotlight__input"
                      placeholder="Ask me anything.."
                      disabled={loading}
                      style={{
                        // backgroundImage: loading ? `url(${loadingIndicator})` : `url(${lens})`,
                      }}
                      onChange={(e) => updatePrompt(e.target.value)}
                      onKeyDown={(e) => sendPrompt(e)}
                      /> */}
                    {answer &&<AnswerContainer> <p>{answer}</p></AnswerContainer>}
              </div>
          </div>
      </div>
  );
};

export default OpenAI;

// import { Animal } from '../../types';
// import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';

// function OpenAI(props:{animal:Animal}) {

//   const animal = props.animal;
  
//   const body = JSON.stringify({animal});
//   console.log(body);
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: body
//   }
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['data'],
//     queryFn: () =>
//     fetch('https://localhost:3000',options).then(
//       (res) => res.json())
//     });

//   if (isLoading) return(
//     <div>
//       <h1>Loading...</h1>
//     </div>
//   ) 

//   if (error) return (
//     console.log(error),
//     <div>
//       <h1>Error</h1>
//     </div>
//   )
//   if (data){
//     console.log(data);
//   }
//   return (
//     <div>
//       {/* <h1>{data}</h1> */}
//       <h2>hello world</h2>
//     </div>
//   )
// }
// export default OpenAI;

// import "./App.css";