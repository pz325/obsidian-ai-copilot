import { OpenAI } from "openai"

export class AICopilot {
    baseUrl: string;
    apiKey: string;
    model: string;
    client: any;

    constructor(baseUrl: string, apiKey: string, model: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.model = model;
        this.client = new OpenAI({
            baseURL: this.baseUrl,
            apiKey: this.apiKey,
            dangerouslyAllowBrowser: true
        });
    }

    // call LLM to translate the given snippets
    translate = async(snippets: string) => {
        const messages = [
            { role: "system", content: "You are to translate the input to English." },
            {"role": "user", "content" : snippets}];
        
        const response = await this.client.chat.completions.create({
            model: this.model,
            messages: messages,
        });
        
        return response.choices[0].message.content;
    };
};