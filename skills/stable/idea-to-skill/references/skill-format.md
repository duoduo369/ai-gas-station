# Tencent / WorkBuddy Skill Format

这条 reference 约束 `idea-to-skill` 产出的候选 skill 形状。
目标不是泛化到所有 skill 生态，而是对齐当前选定的腾讯 / WorkBuddy 风格。

## 头部格式

`SKILL.md` 顶部使用 YAML frontmatter，随后直接进入 Markdown 正文。
默认按下面这组字段起手：

```yaml
---
name: <skill-slug>
display_name: <给人看的标题>
display_name_en: <English title>
description: <中文市场化一句话说明>
description_zh: <与 description 对齐的中文说明>
description_en: <简短英文说明>
version: 1.0.0
author: <workspace owner or confirmed author>
disable-model-invocation: true
---
```

## 字段约束

- `name` 用英文 kebab-case，与目录名一致。
- `display_name` 写给人看，可以比 slug 更自然；如果当前 skill 名本身就适合展示，可以与 invoke 名称接近，但不要机械照抄 kebab-case。
- `display_name_en` 用自然英文展示名；如果主展示名已经是自然英文，通常可与 `display_name` 一致。
- `description`、`description_zh` 面向市场或安装页阅读，不写触发词清单，不把内部步骤塞进一句话里。
- `description_en` 用短英文表达能力边界，不硬翻中文长句。
- `version` 对新建候选 skill 默认从 `1.0.0` 起；只有用户明确要求沿用已有版本线时再覆盖。
- `author` 优先沿用当前工作区已经稳定使用的作者名；如果工作区里没有现成约定，再补问一次。
- 候选 skill 默认保留 `disable-model-invocation: true`。

## 正文格式

- frontmatter 之后直接进入 1-2 句自然语言说明这条 skill 解决什么问题、产物落在哪里。
- 不重复再写一个 `# <skill-name>` 标题；把空间留给真正承载动作的分节标题。
- 正文仍以 Markdown 组织，可按需要使用 `## Before you start`、`## Steps`、`## Finish`，或更贴合任务的分节名。
- 步骤要短、动作导向，并带 completion criteria；不要把一整页解释性散文堆回主文件。

## 目录格式

默认目录至少是：

```text
<skill-slug>/
  SKILL.md
```

按需再补：

```text
<skill-slug>/
  SKILL.md
  references/
  scripts/
  templates/
```

- support docs 用 `references/`，不要再用 `reference/`。
- 如果有脚本或模板，也用复数目录：`scripts/`、`templates/`。
- 不再生成旧的 `agents/openai.yaml` 配置层，除非目标平台文档后来明确重新要求。

## 写作取向

- 头部像元数据，正文像可执行说明；不要把两者混成一段。
- `description*` 系列优先服务安装页和列表页阅读体验，正文才负责步骤。
- 如果引用了当前工作区里的某个已发布 skill 当例子，最终仍要把活规则收口回本目录，不把外部 skill 链接留成必读前置。
