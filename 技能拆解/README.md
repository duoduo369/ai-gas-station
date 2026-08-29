# 技能拆解

这里记录外部 agent skills、skills 仓库与调用机制的学习、拆解、实践与复盘。
它只收“学习对象”，不收本项目自己的可调用 skill 本体。
如果一个方法已经从“学习心得”长成了本项目里的协作资产，就用 [`../skills/stable/idea-to-skill/SKILL.md`](../skills/stable/idea-to-skill/SKILL.md) 把它送进 `skills/in-process/`，不要再停在这里。

## 对话澄清与深挖

- [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md) - 用 design tree 和 frontier 分轮追问，把方案里的隐含决策一层层问出来；[学习拆解](<./grilling 学习拆解.md>)
- [wait-what](https://github.com/mattpocock/skills/blob/main/skills/productivity/wait-what/SKILL.md) - 当上一条消息没有真正打中时，强制代理带着上下文和统一术语重讲一遍；[学习拆解](<./wait-what 学习拆解.md>)

## 协作交接

- [handoff](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md) - 把当前会话压缩成下一位 agent 能直接接手的 handoff 文档，同时避免重复搬运已有产物；[学习拆解](<./handoff 学习拆解.md>)

## 教学工作区

- [teach](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md) - 把当前目录变成跨 session 的教学工作区；人读说明见 [docs/productivity/teach.md](https://github.com/mattpocock/skills/blob/main/docs/productivity/teach.md)；[课程](<../课程/teach skill 学习课/README.md>)

## 写作机制

- [writing-for-agents](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md) - 系统讲 agent 文档怎么写：context pointer、信息层级、completion criteria、leading words 与 pruning；[学习拆解](<./writing-for-agents 学习拆解.md>)

## 仓库地图

- [mattpocock-skills 项目结构与 skill 地图](<./mattpocock-skills 项目结构与 skill 地图.md>) - 先建立这个 skills 仓库的地图感：顶层结构、五个 bucket、两条分类轴，以及 `ask-matt` 主流程的最短记法。
- [ask-matt 主流程与上坡入口](<./ask-matt 主流程与上坡入口.md>) - 把 `ask-matt` 读成路由器而不是索引：主线、on-ramp、独立技能，以及 phase boundary 的五选一判断。

## 写作与维护

- 当前目录优先记录已经形成明确学习收获的外部 skill；如果只是先留入口，可以只在索引里放原始链接和一句判断。
- 新建或大修的具体 skill 学习文档，默认做成“顶部导航 + 主体拆解 + 底部附录”的自包含结构；既有旧文档允许逐步补齐。
- 顶部导航区默认补三类入口：原始 skill 链接、回到当前目录 `README.md` 的索引链接、以及跳到文末附录的文内锚点链接。
- 文末附录默认保留两段：`附录 A：原始 SKILL.md`，以及在原文不是中文时补 `附录 B：中文翻译`。
- 文内跳转优先使用显式锚点，例如 `<a id="skill-source-md"></a>` 与 `[跳到原文附录](#skill-source-md)`，保证 Obsidian 与 GitHub 的跳转都稳定。
- 对 user-invoked skill，要特别记清它解决的具体卡点；对 model-invoked skill，要特别记清触发词、边界和为什么值得常驻描述。
- 当一个 skill 已经带出稳定的概念、词汇表或方法论时，可以给它配一篇同层级参考文档，而不是把所有解释都塞回 `SKILL.md`。
- 如果文档重心已经转成跨多个 skill 的概念解释或机制说明，就应转入 [`../概念/README.md`](../概念/README.md)，不要继续堆在这里。
- 如果某个方法已经从“学习对象”变成“本项目里要被反复调用的协作资产”，就调用 `idea-to-skill` 把它迁进 [`../skills/README.md`](../skills/README.md)。
