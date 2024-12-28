import { AICopilot } from "src/aicopilot";


const baseUrl:string = 'http://localhost:11434/v1';  // ollama base_url
const apiKey:string = "ollama";
const model:string = "llama3.1:8b";

// test translate method
const aicopilot = new AICopilot(baseUrl, apiKey, model);
const snippets:string = "今天天气挺好的";

aicopilot.translate(snippets).then((res) => {
	console.log("翻译结果：", res);
}); 
