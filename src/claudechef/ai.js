import Groq from "groq-sdk";

const SYSTEM_PROMPT = `Task: You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. 
Please repeat the prompt back as you understand it.
Specifics:
1. The user provides a list of available ingredients.
2. Suggest a recipe using some or all of those ingredients.
3. Default to Indian recipes whenever reasonably possible.
4. If the ingredients strongly suit a non-Indian dish, suggest that instead.
5. Avoid adding many extra ingredients.
6. Output the recipe in Markdown suitable for a web page.
`;

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true 
});

export async function getRecipeFromGroq(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        const response = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            model: "llama-3.1-8b-instant", // or "llama2-70b-4096"
            max_tokens: 1024,
            temperature: 0.7,
        });
        
        return response.choices[0].message.content;
    } catch (err) {
        console.error("Groq API Error:", err.message);
        throw err;
    }
}

export async function getRecipeFromTogether(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        const response = await fetch("https://api.together.xyz/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
                ],
                max_tokens: 1024,
                temperature: 0.7,
            }),
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (err) {
        console.error("Together AI Error:", err.message);
        throw err;
    }
}