# agent 编程方法论探索

> 回到课程索引：[课程/README.md](../README.md)
> 教学状态：[MISSION.md](./MISSION.md) · [RESOURCES.md](./RESOURCES.md) · [NOTES.md](./NOTES.md)

这门课谈方法。讨论锚点放在约 2026 年 8 月底的社区沉积：agent 写代码快了以后，为什么会冒出一批方法；Matt Pocock skills、obra Superpowers、Uncle Bob SwarmForge 分别把纪律压在哪一层；spec 挨骂时，人到底在骂哪一层。

读完后，你可以用同一张失败模式清单解释这些方法为什么出现，也能按对照轴看三套方法的落点，并带走一句 spec 判断。课里出现的三门仓库精读课只是深链，不要求先修。

这门课不做选型，也不回答日常该装哪套 skill。现在这轮整理停在勘探，结论不进 `playbook/`。

课程包沿用 `teach` 在本库的落地形态：

- `lessons/` 放可直接打开的 HTML 课件
- `reference/` 放回看用的速查页
- `assets/` 放这门课自己的样式、导航脚本与关系图

HTML 课件顶部有相对路径导航：三课互跳、两页速查、课程入口；lesson 页另有上一课 / 下一课。课内无测验、无问答练习。

## Lessons

- [0001 · Agent编程目前依然面临的问题](./lessons/0001-agent-failure-modes.html) - 把意图漂移、过早出计划、上下文腐烂、不可验证、沟通税摆出来，看方法在补哪几个洞。
- [0002 · 先轴后案例看三套方法](./lessons/0002-three-methodologies-by-axes.html) - 拿对齐、执行、角色交接、spec 位置、过程谁启动五条轴，对照 Matt / Superpowers / Bob。
- [0003 · spec 是入口还是工件](./lessons/0003-spec-as-entry-vs-artifact.html) - 把 spec 判断钉住，再拆开业界 Spec-Driven Development 和 Superpowers 的 Subagent-Driven Development。

## Reference

- [失败模式与对照轴速查](./reference/failure-modes-and-axes.html) - 五个洞和五条轴的压缩表，回看坐标系时用。
- [spec 判断速查](./reference/spec-judgment-and-two-sdds.html) - 锁定判断句，以及两个开发缩写怎么拆开。

## 这门课不学什么

- 不精读、不嵌任何 `SKILL.md` / 角色 prompt / 宪法全文
- 不讲怎样安装或配置某套 skill / 插件 / harness
- 不把 SDLC、Spec Kit、OpenSpec、BMAD 做成主菜或第四套对照
- 不做测验或问答模块
