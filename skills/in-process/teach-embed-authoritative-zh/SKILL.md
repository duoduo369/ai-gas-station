---
name: teach-embed-authoritative-zh
description: 把课里点名的权威 prompt 或 skill 中文嵌进 lesson HTML，并保留原文外链。
disable-model-invocation: true
---

# teach-embed-authoritative-zh

把 teach 系课程里需要精读的权威正文嵌进对应 lesson HTML，默认做成可折叠的中文结构块。

## Before you start

- 先读 [`../../../AGENTS.md`](../../../AGENTS.md)、[`../../../CONTEXT.md`](../../../CONTEXT.md)、[`../../../docs/conventions.md`](../../../docs/conventions.md) 和 [`./NOTES.md`](./NOTES.md)。
- 先确认这节课真要学条文；如果只是地图课、讨论课或索引课，就不要硬嵌全文。
- 先列出本课要嵌的权威来源与稳定外链；没有高信任原文时先停下，不要凭记忆补全文。

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
- 把本次嵌入来源、边界和例外记到 [`NOTES.md`](./NOTES.md)。
