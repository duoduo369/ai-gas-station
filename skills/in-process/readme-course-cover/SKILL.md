---
name: readme-course-cover
description: 为课程生成 README 可点击封面入口所需的封面 Prompt 和接入方式。
disable-model-invocation: true
---

# readme-course-cover

把一门课程压成适合 README 入口图的封面 Prompt，并把产物接回课程入口。

## Before you start

- 先读 [`../../../AGENTS.md`](../../../AGENTS.md)、[`../../../CONTEXT.md`](../../../CONTEXT.md)、[`../../../docs/conventions.md`](../../../docs/conventions.md) 和 [`./NOTES.md`](./NOTES.md)。
- 先确认课程标题、对象和主流程已经基本稳定；如果课程定位还在飘，先不要急着做封面。
- 先收齐这门课的索引条目、课程自己的 `README.md`、`MISSION.md` 和最能代表气质的 1-2 个视觉资产。

## Steps

1. 压缩课程的视觉输入。
   完成标准：已经写清学习对象、主流程、画面隐喻和不要什么四项输入。
2. 写出封面 Prompt。
   完成标准：Prompt 明确这是 README 课程入口封面，比例固定 `4:3`，标题系统和主体白名单都写清了。
3. 检查标题与主体关系。
   完成标准：主标题负责抓眼球，解释性文字退后；主体细节已经足够锁住正确内容，不再靠泛 AI 氛围词碰运气。
4. 把封面接回仓库入口。
   完成标准：图片命名与存放符合仓库规则，README 或课程索引里的点击入口已经连回课程页。

## Finish

- 确认封面 Prompt 说的是课程本身，而不是一张泛海报。
- 确认 README 入口同时保留封面点击和普通文本链接，不只靠图片承载入口。
- 把来源、边界和系列风格约束记到 [`NOTES.md`](./NOTES.md)。
