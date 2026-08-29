# HTML Block Rules

这条 skill 的主动作不是“翻译”本身，而是把要精读的正文稳定地落成 lesson 里的静态阅读块。

## 先分三类材料

- 本课必须嵌入
- 只需链到已经嵌过的全文
- 只留原文外链

不要把所有引用都塞进同一节课。

## HTML 结构约束

- Markdown 正文进入 `div.prompt-md`
- 只有 frontmatter、命令、日志、diff 等原始片段保留在 `pre.prompt-raw`
- 默认放进 `details.prompt-fold`，让正文按需展开

## 什么时候不要硬嵌

- 这节课只是地图课、讨论课或索引课
- 没有高信任原文
- 原文过长，但本课其实只需要一个稳定外链或已嵌全文入口

## 同步面

完成 lesson 更新后，再把 README、NOTES、reference 或 lesson 里的说明一起对齐，避免页面现状和文字说明脱节。
