import AICopilotPlugin from "src/main";
import { App, PluginSettingTab, Setting  } from "obsidian"

export class AICopilotSettingTab extends PluginSettingTab
{
	plugin: AICopilotPlugin;

	constructor(app: App, plugin: AICopilotPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		// containerEl 是插件设置面板的容器
		const {containerEl} = this;

		containerEl.empty();

		// 添加控件到面板容器中
		new Setting(containerEl)
			.setName('Base URL')
			.setDesc('Base URL of an OpenAI compatable API')
			.addText(text => text  // addText 方法用于创建 input 文本框, 回调函数中的参数为文本框dom对象
				.setPlaceholder('Enter the base_url')
				.setValue(this.plugin.settings.baseUrl)
				.onChange(async (value) => {
					this.plugin.settings.baseUrl = value;
					await this.plugin.saveSettings();
				}));
		
		new Setting(containerEl)
			.setName('API Key')
			.setDesc('Your API key for accessing the online AI service')
			.addText(text => text
				.setPlaceholder('Enter your API key')
				.setValue(this.plugin.settings.apiKey)
				.onChange(async (value) => {
					this.plugin.settings.apiKey = value;
					await this.plugin.saveSettings();
				}));
				
		new Setting(containerEl)
			.setName('Model Name')
			.setDesc('Name of the AI model to use')
			.addText(text => text
				.setPlaceholder('Enter the model name')
				.setValue(this.plugin.settings.model)
				.onChange(async (value) => {
					this.plugin.settings.model = value;
					await this.plugin.saveSettings();
				}));

	}
}