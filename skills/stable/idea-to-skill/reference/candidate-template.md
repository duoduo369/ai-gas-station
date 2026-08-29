# Candidate Template

候选 skill 默认目录形状：

```text
skills/
  in-process/
    <skill-slug>/
      SKILL.md
      reference/
        <meaningful-name>.md
```

- `<skill-slug>` 默认使用英文 kebab-case。
- invoke 名称默认与 slug 一致；只有用户明确要求时再分开。
- `SKILL.md` 负责“什么时候用、按什么顺序做、做到哪里算完成”。
- `reference/` 只在这条 skill 真的需要 disclosed reference 时才创建；文件名要直接表达内容，例如 `html-block-rules.md`、`course-cover.md`、`book-cover.md`。

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

- 先读这条 skill 真相关的 reference 或仓库约定。
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

如果一个补充文件既不承担稳定 reference，也没有明确命名理由，就不要创建它。
