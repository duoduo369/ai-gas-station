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
- `SKILL.md` 负责“什么时候用、按什么顺序做、做到哪里算完成”。
- `reference/` 只在这条 skill 真的需要 disclosed reference 时才创建；文件名要直接表达内容，例如 `html-block-rules.md`、`course-cover.md`、`book-cover.md`。
- 候选 skill 必须闭包：运行时需要的规则要么在 `SKILL.md`，要么在同目录 `reference/`；不要把目录外文档留成候选 skill 的必读链接。

如果这条 skill 需要下沉补充规则，再额外补成：

```text
skills/
  in-process/
    <skill-slug>/
      SKILL.md
      reference/
        <meaningful-name>.md
```

候选 `SKILL.md` 基本形状：

```markdown
---
name: <skill-slug>
description: <一句给人看的用途说明>
disable-model-invocation: true
---

# <skill-slug>

一句话说明这条 skill 解决什么卡点，以及产物会落到哪里。

## Before you start

- 先读这条 skill 真相关的本目录 reference；如果写作时参考了外部文档，收口前只把还活着的最小规则压回本目录。
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

补候选 skill 时，再额外检查两件事：

- 如果只是引用仓库里的工作目标或输出位置，直接写成代码路径，不要把目录外文件挂成 Markdown 链接。
- 如果一个补充文件既不承担稳定 reference，也没有明确命名理由，就不要创建它。
