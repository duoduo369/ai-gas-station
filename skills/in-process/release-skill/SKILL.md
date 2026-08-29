---
name: release-skill
description: 把一个已经验证过的候选 skill 提升到 stable，并同步更新生命周期入口。
disable-model-invocation: true
---

# release-skill

把一个已经在本仓库里跑通过的候选 project-level skill，从 `skills/in-process/` 提升到 `skills/stable/`。
这条 skill 只负责单个 skill 的 release：先做人类判断，再检查它在移动目录后是否仍然自包含；通过才发布，不通过就停下报告。

## Before you start

- 先确认目标 skill 已经存在于 `skills/in-process/<skill-slug>/`，而且现在还不在 `skills/stable/` 里；如果目标不存在，或已经是 stable，就停下说明。
- 先确认这次 release 只处理一个候选 skill；不要把批量提升、顺手重写 skill、本机安装这些动作绑进来。

## Steps

1. 锁定目标 skill 和要更新的生命周期入口。
   完成标准：已经确定唯一的 `<skill-slug>`，并且明确这次至少会影响 `skills/README.md`、`skills/in-process/README.md`、`skills/stable/README.md`。
2. 执行人类放行判断。
   完成标准：已经拿到人的明确判断：这条候选 skill 已经过真实使用验证，现在可以作为标准入口推荐；如果还没有明确的通过结论，或人明确说暂不 release，就停下报告，不继续后面的步骤。
3. 检查目标 skill 在移动目录后是否仍然自包含。
   完成标准：已经检查 `SKILL.md` 及其 `reference/`（如果存在）里的本地相对链接；把目录从 `skills/in-process/<skill-slug>/` 挪到 `skills/stable/<skill-slug>/` 后，保留下来的链接仍然都指向现有目标，不会因为桶变化直接失效。
4. 不通过就报告并停止。
   完成标准：只要自包含检查没过，就已经明确说明缺口，并保持目录和生命周期入口原样不动；不要一边 release 一边顺手修。
5. 通过后再执行 release 并同步入口。
   完成标准：目标目录已经从 `skills/in-process/<skill-slug>/` 提升到 `skills/stable/<skill-slug>/`；`skills/in-process/README.md` 已移除旧候选条目，`skills/stable/README.md` 已新增 stable 条目，`skills/README.md` 里与这条 skill 对应的生命周期入口也已同步到发布后的状态，而且每个保留条目仍然包含名称、一句话简介和手动调用示例。

## Finish

- 确认这次仍然只 release 了一个已经存在的候选 skill，没有顺手扩成批量流程。
- 确认 release 的放行结论来自人的明确判断，而不是模型替人下结论。
- 确认失败路径只报告问题并停下，没有移动目录，也没有留下半更新状态。
- 确认成功路径里，skill 本体、两个生命周期桶 README 和总入口 README 都已经与新的生命周期桶一致。
