import AICopilot from "./main";
import { App, PluginSettingTab, Setting  } from "obsidian"

export class AICopilotSettingTab extends PluginSettingTab
 {
	plugin: AICopilot;

	constructor(app: App, plugin: AICopilot) {
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
				.setValue(this.plugin.settings.base_url)
				.onChange(async (value) => {
					this.plugin.settings.base_url = value;
					await this.plugin.saveSettings();
				}));
	}
}