---
name: add-prompt-to-skill-lessons
description: 把要精读的 prompt 或 skill 正文加进课程 lesson，并转成适合阅读的静态 HTML 块。
disable-model-invocation: true
---

# add-prompt-to-skill-lessons

把 lesson 里点名要精读的 prompt / skill 正文加进页面，并保持原文外链。

## Before you start

- 先确认这节课真要精读条文；如果只是地图课、讨论课或索引课，就不要硬嵌全文。
- 先列出本课要嵌的权威来源与稳定外链；没有高信任原文时先停下，不要凭记忆补全文。
- 先读 [`./references/html-block-rules.md`](./references/html-block-rules.md)。

## Steps

1. 圈定本课真正要精读的权威材料。
   完成标准：已经分清“本课必须嵌入”“只需链到已嵌全文”“只留外链”三类材料。
2. 把正文转成静态 HTML 中文块。
   完成标准：Markdown 正文进入 `div.prompt-md`；只有 frontmatter、命令、日志、diff 等原始片段保留在 `pre.prompt-raw`。
3. 按课程叙事把材料嵌进对应 lesson。
   完成标准：权威正文默认放进 `details.prompt-fold`，原文只留稳定外链，不打乱本课原有结构。
4. 同步课程说明与索引。
   完成标准：README、NOTES、reference 或 lesson 里的说明与页面现状一致，不再引用失效旧路径。

## Finish

- 确认所有本地链接都指向现有文件，所有外链都指向稳定原文。
- 确认嵌套列表、表格、FAQ 等复杂段落没有塌成 Markdown 源码。
