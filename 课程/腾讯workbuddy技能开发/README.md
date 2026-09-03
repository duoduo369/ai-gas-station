# 腾讯workbuddy技能开发

> 回到课程索引：[课程/README.md](../README.md)
> 教学状态：[MISSION.md](./MISSION.md) · [RESOURCES.md](./RESOURCES.md) · [NOTES.md](./NOTES.md)

这门课先不急着写卡，先把“腾讯 WorkBuddy 的 skill 到底长什么样”钉住。主线是三步：先看 WorkBuddy 官方文档把哪些结构写死，再把 `writing-for-agents` 当成写法层压上去，最后拿 OpenAI Skills 和 Claude Code Skills 做横向对照。

读完后，你应该能分清三件事：

- WorkBuddy 规定的是平台格式：`SKILL.md`、frontmatter、`references / scripts / templates`
- `writing-for-agents` 规定的是写法：description 怎么触发、正文和 reference 怎么分层
- OpenAI / Claude Code 给的是另外两种实现：一个偏 API 挂载，一个偏本地开发环境扩展

这门课暂时只收一节。先把结构图和边界图立起来，后面再往“写第一张 WorkBuddy skill”推进。

## Lessons

- [0001 · 腾讯 WorkBuddy skill 的结构，和常见 skill 结构有什么区别](./lessons/0001-workbuddy-skill-structure-and-cross-vendor-comparison.html) - 先拆 WorkBuddy 官方结构，再把 `writing-for-agents` 压上去，最后对照 OpenAI Skills 与 Claude Code Skills。

## Reference

- [WorkBuddy skill 结构速查](./reference/workbuddy-skill-structure-map.html) - 一页回看 frontmatter、三类子目录、三家对照和写卡时的下沉判断。

## 这门课先不讲什么

- 不讲入驻、审核、上架、分发
- 不讲函数调用、MCP、连接器的总地图
- 不做“哪家更先进”的选型
