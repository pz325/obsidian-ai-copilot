import { Notice } from "obsidian"
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
            apiKey: this.apiKey
        });
    }

    // call LLM to translate the given snippets
    translate = async(snippets: string) => {
        const prompt = "Translate the following snippets into English:\n\n" + snippets;
        const messages = [{ role: "system", content: "You are a helpful assistant." },
            {"role": "user", "content" : prompt}];
        
        try {
            const response = await this.client.chat.completions.create({
                model: this.model,
                messages: messages,
            });
            
            return response.choices[0].message.content;
        } catch (error) {
            this.display_error(error);
        }
    };

    display_error = (err: any) => {
		if (err instanceof OpenAI.APIError) {
			new Notice(`## AICopilot Error: ${err}.`);
		} else {
			new Notice(err);
		}
	};
}