import { useEffect, useState } from "react";
import { NewAnimal } from "../../types";
import styled from "styled-components";

const MutateButton = styled.div`
    width: 32.25rem;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 100;
    color: #f0f0eb;
    cursor: pointer;
    background-color: #120605b9;
    &:hover {
        background-color: rgba(18, 6, 5, 0.3);
    }
`;
const AnswerContainer = styled.div`
    width: 100%;
    max-width: 1130px;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #120605b9;
    padding: 1rem;

    h6 {
        font-size: 4rem;
        font-weight: 100;
        letter-spacing: 0.1rem;
        text-transform: capitalize;
        color: #d0adf0;
    }

    p {
        font-size: 1.5rem;
        font-weight: 200;
        letter-spacing: 0.1rem;
        padding-bottom: 0.5rem;
    }
`;
type OpenAIProps = {
    animal: NewAnimal;
};
type RequestStructure = {
    method: string;
    headers: { "Content-Type": string };
    body: string;
};
type ResponseData = {
    success: boolean;
    message: string;
};

const OpenAI = (props: OpenAIProps) => {
    const [prompt, updatePrompt] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string | undefined>(undefined);
    const { animal } = props;

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

                const requestOptions: RequestStructure = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ prompt }),
                };
                console.log({ requestOptions });
                const res = await fetch("/api/ask", requestOptions);

                if (!res.ok) {
                    throw new Error("Something went wrong. Fetch failed.");
                }
                const data: ResponseData = await res.json();
                setAnswer(data.message);
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
        <>
            <MutateButton
                onClick={() => {
                    updatePrompt(makePrompt(animal));
                }}
            >
                Learn more
            </MutateButton>
            {loading && <p>Loading...</p>}
            {answer !== undefined ? (
                <AnswerContainer className="answer-container">
                    <h6>A story about {animal.name}</h6>
                    <p>{answer}</p>
                </AnswerContainer>
            ) : (
                <></>
            )}
        </>
    );
};

export default OpenAI;
