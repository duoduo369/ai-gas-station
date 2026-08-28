# RESOURCES

> 高信任资料清单。课里的判断从这里引，不用参数化知识胡编。

## Knowledge

### 1. khazix-writer — 卡兹克公众号长文写作 Skill

- **来源**：[KKKKhazix/khazix-skills/khazix-writer/SKILL.md](https://github.com/KKKKhazix/khazix-skills/blob/main/khazix-writer/SKILL.md)
- **覆盖**：完整写作流程（素材→选题→角色边界→写作→自检）、四层自检体系（L1 硬规则 → L2 风格一致性 → L3 内容质量 → L4 活人感终审）、中文 AI 味禁用词和禁用标点清单、五种文章原型（调查实验/产品体验/现象解读/工具分享/方法论分享）、数十种风格技法（节奏感、故意打破、知识输出方式、文化升维、回环呼应等）
- **什么时候用**：写专栏 / 公众号长文时参考；自检清单可以直接套用在任何中文长文上
- **注意**：这是卡兹克的个人风格 skill，不是通用方法论。它的风格技法（口癖、标点用法、特定句式）和硬规则（禁用词）需要分开看——硬规则通用，风格技法需要适配自己的声音

### 2. human-writing — 活人感写作 Skill

- **来源**：[KKKKhazix/human-writing/human-writing/SKILL.md](https://github.com/KKKKhazix/human-writing/blob/main/human-writing/SKILL.md)
- **覆盖**：材料驱动写作（非虚构先凑够五件材料再动笔）、说话位置五问、翻案腔禁令（"不是……而是……"及其变形）、成稿硬禁词（禁用标点、禁用句式、禁用黑话）、现实/虚构/混合三种写作的边界规则
- **什么时候用**：所有中文非虚构写作（知乎、论坛、博客、评论、人物稿、行业稿）；尤其适合改稿阶段逐项扫描
- **注意**：这个 skill 更偏"防守"——告诉你什么不能写。它的材料驱动哲学（没有五件真材料不写长稿）是治 AI 味的根本方法

### 3. chinese-ai-humanizer — 中文 AI 痕迹检测清单

- **来源**：[Wechat-ggGitHub/chinese-ai-humanizer/SKILL.md](https://github.com/Wechat-ggGitHub/chinese-ai-humanizer/blob/main/SKILL.md)
- **覆盖**：高频 AI 句式（"不是……而是……"、"一句话讲清楚"、"这件事"）、标点错误（英文逗号、破折号滥用）、数字格式问题、疑问句+回答的模式、比喻滥用
- **什么时候用**：快速扫描初稿，找 AI 味最明显的标记
- **注意**：清单较短（50 行），覆盖不如 khazix-writer 全面，但作为快速检查表很实用

### 4. stop-slop — 英文 Prose 去 AI 味 Skill

- **来源**：本地已安装 skill（`~/.agents/skills/stop-slop/`）
- **覆盖**：五维度评分（Directness / Rhythm / Trust / Authenticity / Density）、禁用短语（throat-clearing openers、emphasis crutches、business jargon、adverbs）、禁用结构（binary contrasts、negative listing、dramatic fragmentation、rhetorical setups、false agency、passive voice）、节奏模式检查
- **什么时候用**：评分框架和结构检查可以迁移到中文写作；35/50 的及格线可以作为改稿标准
- **注意**：面向英文，但 stop-slop 的核心原则（去套话、去被动、去假动作、去金句、变节奏）是语言无关的。中文的具体禁用词需要从 khazix-writer 和 human-writing 补充

### 5. Dify Blog — AI 辅助高质量中文技术内容工作流

- **来源**：[Beyond Translation: An AI Workflow for High-Quality Chinese Technical Content](https://dify.ai/blog/beyond-translation-an-ai-workflow-for-high-quality-chinese-technical-content)
- **覆盖**：翻译→改写→审校三阶段流程、技术写作中保持中文自然度的实践
- **什么时候用**：涉及技术内容或需要处理英文素材转中文的场景

### 6. sun-style-writing — 孙学写作法 Skill

- **来源**：[KKKKhazix/sun-style-writing/sun-style-writing/SKILL.md](https://github.com/KKKKhazix/sun-style-writing/blob/main/sun-style-writing/SKILL.md)
- **覆盖**：极度克制的白描叙事、短句节奏、数字代替形容词、物件承载情感、沉默即高潮、蒙太奇时间结构、虚空美学。十二项写作技法 + 十四项检查清单。适用于第一人称非虚构叙事、个人经历长文、情感故事、回忆录、纪实散文、人物特写
- **什么时候用**：需要写高度文学性的中文叙事长文时参考；也是理解"特定风格 skill 能做什么"的范例——展示了一套完整的从哲学到技法到检查清单的风格体系
- **注意**：这是高度风格化的写法，不适合通用专栏或课程内容。但它的核心哲学（"永远不要告诉读者该怎么感受"）和技法（白描、数字、物件、留白）可以抽取出来，部分应用于任何需要克制表达的场景

## Gaps

### 模型对比：国产 vs 国外模型的中文写作能力

缺少系统性的横向评测。目前已知的碎片信息：
- 国产模型（DeepSeek、通义千问、文心一言、GLM）在中文语感上普遍优于 GPT/Claude，但推理和结构化能力有差距
- Claude 的中文能力在 2024-2025 年有明显提升，但"翻译腔"仍然存在
- 没有找到针对"中文写作去 AI 味"这个具体任务的模型对比

**处理方式**：课程中不依赖参数化知识做模型推荐，而是讲选择策略——什么时候用国外模型做结构化+推理，什么时候用国产模型做语感润色，以及怎么用流程把两者串起来。

### 完整的写作流程方法论

现有资源各自覆盖了流程的片段（khazix-writer 有完整流程但是针对公众号长文，human-writing 偏材料准备和改稿），但缺少一个从"提示词 → 大纲 → grill → 初稿 → 改稿 → 定稿"的通用流程方法论。

**处理方式**：课程中会从现有资源中拼出完整流程，并结合 grill skill 做交叉验证。