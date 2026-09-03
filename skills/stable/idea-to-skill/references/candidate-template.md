# Candidate Template

候选 skill 默认目录形状：

```text
skills/
  in-process/
    <skill-slug>/
      SKILL.md
```

- `<skill-slug>` 默认使用英文 kebab-case。
- invoke 名称默认与 slug 一致；只有用户明确要求时再分开。
- `SKILL.md` 采用腾讯 / WorkBuddy 风格：顶部是 YAML frontmatter，下面直接接 Markdown 正文。
- `references/` 只在这条 skill 真的需要 disclosed reference 时才创建；文件名要直接表达内容，例如 `html-block-rules.md`、`course-cover.md`、`book-cover.md`。
- 候选 skill 必须闭包：运行时需要的规则要么在 `SKILL.md`，要么在同目录 `references/`；不要把目录外文档留成候选 skill 的必读链接。
- 如果还需要脚本或模板，目录名也用复数：`scripts/`、`templates/`。
- 不要再为这个目标格式生成 `agents/openai.yaml` 一类旧配置层。

如果这条 skill 需要下沉补充规则，再额外补成：

```text
skills/
  in-process/
    <skill-slug>/
      SKILL.md
      references/
        <meaningful-name>.md
      scripts/
      templates/
```

候选 `SKILL.md` 基本形状：

```markdown
---
name: <skill-slug>
display_name: <给人看的标题>
display_name_en: <English title>
description: <中文一句话用途说明>
description_zh: <中文一句话用途说明>
description_en: <Short English description>
version: 1.0.0
author: <workspace owner or confirmed author>
disable-model-invocation: true
---

一句话说明这条 skill 解决什么卡点，以及产物会落到哪里。
如果需要，再补一句说明它的工作方式或默认产物。

## Before you start

- 先读这条 skill 真相关的本目录 `references/`；如果写作时参考了外部文档，收口前只把还活着的最小规则压回本目录。
- 如果这还只是一次性说明，就停在当前文档，不创建 skill。

## Steps

1. <第一步>
   完成标准：<可判断的停点>
2. <第二步>
   完成标准：<可判断的停点>
3. <第三步>
   完成标准：<可判断的停点>

## Finish

- <最终核对项>
```

补这份模板时，再额外守住三件事：

- frontmatter 后不要再机械重复一个 `# <skill-slug>` 标题；正文直接进入用途说明和分节。
- `description` / `description_zh` / `description_en` 是安装页文案，不是步骤摘要，也不是触发词列表。
- 如果当前工作区已经有已发布 skill，可参考它的字段语气和展示感，但最终模板仍以本目录的活规则为准。

补候选 skill 时，再额外检查两件事：

- 如果只是引用仓库里的工作目标或输出位置，直接写成代码路径，不要把目录外文件挂成 Markdown 链接。
- 如果一个补充文件既不承担稳定 reference，也没有明确命名理由，就不要创建它。
