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
- 先确认这次 release 只处理一个候选 skill；不要把批量提升、顺手重写 skill、额外安装别的 skill 这些动作绑进来。
- 如果本仓库当前是用 `~/.agents/skills/<skill-slug>/` 的 junction / symlink 把用户级入口接回仓库目录，release 成功路径里要把这个同名入口一起同步到新桶位；这属于同一条 skill 的发布收尾，不算另起一轮本机安装。
- 如果用户级入口位于 `C:\Users\...` 这类可能受系统策略影响的位置，而且删除旧 link / junction 时被系统拦住，就先停下，明确告诉用户需要手动处理的旧路径，等用户删完再继续；不要改用别的命令继续硬删。

## Steps

1. 锁定目标 skill 和要更新的生命周期入口。
   完成标准：已经确定唯一的 `<skill-slug>`，并且明确这次至少会影响 `skills/README.md`、`skills/in-process/README.md`、`skills/stable/README.md`；如果本机存在 `~/.agents/skills/<skill-slug>/` 这种用户级入口，也已经把它记进这次 release 的同步范围。
2. 执行人类放行判断。
   完成标准：已经拿到人的明确判断：这条候选 skill 已经过真实使用验证，现在可以作为标准入口推荐；如果还没有明确的通过结论，或人明确说暂不 release，就停下报告，不继续后面的步骤。
3. 检查目标 skill 在移动目录后是否仍然自包含。
   完成标准：已经检查 `SKILL.md` 及其 `reference/`（如果存在）里的本地相对链接；把目录从 `skills/in-process/<skill-slug>/` 挪到 `skills/stable/<skill-slug>/` 后，保留下来的链接仍然都指向现有目标，不会因为桶变化直接失效。
4. 不通过就报告并停止。
   完成标准：只要自包含检查没过，就已经明确说明缺口，并保持目录、生命周期入口和用户级 skill 链接原样不动；不要一边 release 一边顺手修。
5. 通过后再执行 release 并同步入口。
   完成标准：目标目录已经从 `skills/in-process/<skill-slug>/` 提升到 `skills/stable/<skill-slug>/`；`skills/in-process/README.md` 已移除旧候选条目，`skills/stable/README.md` 已新增 stable 条目，`skills/README.md` 里与这条 skill 对应的生命周期入口也已同步到发布后的状态，而且每个保留条目仍然包含名称、一句话简介和手动调用示例；如果仓库当前是通过 `~/.agents/skills/<skill-slug>/` 的 link 提供用户级入口，这个入口也已经检查并同步到新的 `skills/stable/<skill-slug>/`，不会继续指向旧桶位；如果同步用户级入口时命中系统策略阻拦，就已经停下并明确告诉用户要手动删除的旧路径，而不是继续尝试别的删除方式。

## Finish

- 确认这次仍然只 release 了一个已经存在的候选 skill，没有顺手扩成批量流程。
- 确认 release 的放行结论来自人的明确判断，而不是模型替人下结论。
- 确认失败路径只报告问题并停下，没有移动目录，也没有留下半更新状态。
- 确认成功路径里，skill 本体、两个生命周期桶 README、总入口 README，以及需要保留的用户级 skill 链接入口都已经与新的生命周期桶一致。
- 确认遇到用户级入口删除受阻时，已经先请用户手动删旧路径，再继续后续同步，而不是自行绕过系统策略。
