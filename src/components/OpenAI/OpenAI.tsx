import { useEffect, useState } from "react";
import { NewAnimal } from "../../types";
import styled from "styled-components";
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
type OpenAIProps = {
    animal: NewAnimal;
};

const OpenAI = (props: OpenAIProps) => {
    const [prompt, updatePrompt] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string | undefined>(undefined);
    const { animal } = props;
    // console.log({animal})
    const makePrompt = (animal: NewAnimal) => {
        return `Write a short story about the newly discovers animal ${animal.name}. It is a cross breed from the ${animal.parents[0].name} and ${animal.parents[1].name}. It has the colors of ${animal.colorScheme.color[0]} with ${animal.colorScheme.pattern[0]} patterns. Key attributes include ${animal.attribute[0]}. It lives in/on ${animal.location[0]}}.`;
    };

    const utterThis = new SpeechSynthesisUtterance();
    const synth = window.speechSynthesis;

    const handleTextSpeech = (answer: string) => {
        let ourText = answer;
        utterThis.text = ourText;
        synth.speak(utterThis);
    };

    useEffect(() => {
        if (answer !== undefined) {
            handleTextSpeech(answer);
        }
    }, [answer]);

    useEffect(() => {
        const sendPrompt = async () => {
            if (prompt === undefined) {
                return;
            }
            try {
                setLoading(true);

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ prompt }),
                };
                console.log({ requestOptions });
                const res = await fetch("/api/ask", requestOptions);

                if (!res.ok) {
                    throw new Error("Something went wrong. Fetch failed.");
                }

                const { message } = await res.json();

                setAnswer(message);
            } catch (err) {
                console.error("error", err);
                setLoading(false);
            } finally {
                setLoading(false);
            }
            console.log("prompt", prompt);
        };
        sendPrompt();
    }, [prompt]);

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
                    <MutateButton
                        disabled={loading}
                        // style={{
                        //   // backgroundImage: loading ? `url(${loadingIndicator})` : `url(${lens})`,
                        // }}
                        // onChange={(e) => updatePrompt(mockPrompt)}
                        onClick={() => {
                            updatePrompt(makePrompt(props.animal));
                        }}
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
                    {answer !== undefined ? (
                        <AnswerContainer className="answer-container">
                            <p>{answer}</p>
                        </AnswerContainer>
                    ) : (
                        <></>
                    )}
                    {/* (
                        <AnswerContainer>
                            {" "}
                            <p>{answer}</p>
                        </AnswerContainer>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default OpenAI;
