# agent 编程方法论探索

> 回到课程索引：[课程/README.md](../README.md)
> 教学状态：[MISSION.md](./MISSION.md) · [RESOURCES.md](./RESOURCES.md) · [NOTES.md](./NOTES.md)

这是一门**方法论讨论课**，不是仓库精读，也不是操作手册。讨论锚定到约 2026 年 8 月底的社区沉积：agent 写代码变快之后，为什么会涌现一批方法；Matt Pocock skills、obra Superpowers、Uncle Bob SwarmForge 各自把纪律放在哪一层；以及 spec 被骂时，到底在骂哪一层。

读完后，读者应能用同一套失败模式解释「为什么会有这些方法」，按对照轴看三套落点，并带走一句 spec 判断。课里出现的三门仓库精读课只是可选深链，不预设读者上过。

这门课明确**不是**选型指南，也**不会**推出「日常该装哪套 skill」。勘探还没有变成下次能直接复用的操作，结论也不写入 playbook。

课程包沿用 `teach` 在本库的落地形态：

- `lessons/` 放可直接打开的 HTML 课件
- `reference/` 放回看用的速查页
- `assets/` 放这门课自己的样式、导航脚本与关系图

HTML 课件顶部有相对路径导航：三课互跳、两页速查、课程入口；lesson 页另有上一课 / 下一课。课内无测验、无问答练习。

## Lessons

- [0001 · 当下 agent 编程会炸在哪](./lessons/0001-agent-failure-modes.html) - 用意图漂移、过早出计划、上下文腐烂、不可验证、加人/加 agent 的沟通税，解释方法论在修什么。
- [0002 · 先轴后案例看三套方法](./lessons/0002-three-methodologies-by-axes.html) - 按对齐、执行、角色交接、spec 位置、过程谁启动五条轴，对照 Matt / Superpowers / Bob。
- [0003 · spec 是入口还是工件](./lessons/0003-spec-as-entry-vs-artifact.html) - 带走锁定的 spec 判断，并拆开两个都叫 SDD 的东西。

## Reference

- [失败模式与对照轴速查](./reference/failure-modes-and-axes.html)
- [spec 判断与两个 SDD 速查](./reference/spec-judgment-and-two-sdds.html)

## 这门课不学什么

- 不精读、不嵌任何 `SKILL.md` / 角色 prompt / 宪法全文
- 不讲怎样安装或配置某套 skill / 插件 / harness
- 不把 SDLC、Spec Kit、OpenSpec、BMAD 做成主菜或第四套对照
- 不做测验或问答模块
