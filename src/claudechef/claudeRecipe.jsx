import { useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    const resultsRef = useRef(null);

    useEffect(() => {
        if (props.recipe && resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [props.recipe]); 

    return (
        <>
            <section
                className="suggested-recipe-container"
                aria-live="polite"
                ref={resultsRef}
            >
                <h2>Chef Claude Recommends:</h2>
                <ReactMarkdown>
                    {props.recipe}
                </ReactMarkdown>
            </section>
        </>
    );
}
