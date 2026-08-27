# mattpocock/skills Resources

## Knowledge

- [仓库 README](https://github.com/mattpocock/skills/blob/main/README.md)
  总入口。Use for: 安装、哲学、skill 总表。
- [CLAUDE.md](https://github.com/mattpocock/skills/blob/main/CLAUDE.md)
  仓库维护规则。Use for: 五个 bucket、promoted、user / model invoked、docs 同步。
- [ask-matt/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md)
  路由器。Use for: 主线、上坡入口、独立技能、phase boundary 入口。
- [PHASE-BOUNDARIES.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/PHASE-BOUNDARIES.md)
  切上下文的顺序树。Use for: Continue / clear / handoff / subagent / compact。
- [grilling/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)
  访谈原语。Use for: design tree、frontier、事实归 agent。
- [grill-with-docs/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)
  工作目录默认起点。Use for: grilling + domain-modeling。
- [domain-modeling/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)
  领域语言纪律。Use for: CONTEXT.md、ADR。
- [wayfinder/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md)
  大而有雾的规划流。Use for: map、decision tickets、fog、handoff 到 to-spec。
- [handoff/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md)
  交接文档。Use for: 产物 vs 终止、suggested skills。
- [code-review/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md)
  两轴评审。Use for: Standards / Spec、sub-agent、smell baseline。
- [docs/engineering/code-review.md](https://github.com/mattpocock/skills/blob/main/docs/engineering/code-review.md)
  人读 FAQ。Use for: 单票 vs 整分支、同会话自评、无收敛保证。
- [tdd/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)
  TDD 参考。Use for: seam 定义。
- [implement/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md)
  实现入口。Use for: tdd → code-review → commit；不关票。
- [to-spec/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md)
  写成 spec。Use for: 先约定 seam、禁止路径与代码片段。
- [docs/engineering/to-spec.md](https://github.com/mattpocock/skills/blob/main/docs/engineering/to-spec.md)
  spec 人读说明。Use for: 快照、pivot 留 spec 删未完成票。
- [docs/engineering/triage.md](https://github.com/mattpocock/skills/blob/main/docs/engineering/triage.md)
  外来工单上坡。Use for: 不要 triage 自己拆的票；Linear / GitHub 拆分。
- [docs/engineering/implement.md](https://github.com/mattpocock/skills/blob/main/docs/engineering/implement.md)
  实现人读说明。Use for: 停在 commit、验收框要人勾。
- [setup-matt-pocock-skills/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/SKILL.md)
  每仓一次的接线。Use for: tracker 四选一、Other 散文。
- [issue-tracker-local.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md)
  本地 markdown 模板。Use for: `.scratch/` 约定与 wayfinding 动词。
- [issue-tracker-gitlab.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md)
  GitLab 模板。Use for: 同一套动词，换成 `glab`。
- [docs/engineering/setup-matt-pocock-skills.md](https://github.com/mattpocock/skills/blob/main/docs/engineering/setup-matt-pocock-skills.md)
  setup 人读说明。Use for: tracker 是配置；Other 不是空壳。
- [docs/engineering/wayfinder.md](https://github.com/mattpocock/skills/blob/main/docs/engineering/wayfinder.md)
  wayfinder 人读说明。Use for: 任意 tracker；本地 markdown 易意外持久化。
- [AI Hero: smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)
  主线 hygiene 用的窗口概念。Use for: 接近 ~150k tokens 时在 phase boundary compact。
- [larksuite/cli](https://github.com/larksuite/cli)
  飞书官方 CLI。Use for: 0006 Other 路径的工具事实。

## Wisdom (Communities)

- [mattpocock/skills Issues](https://github.com/mattpocock/skills/issues)
  上游问题与设计讨论。Use for: 已知坑（如 local tracker 验收条件重复、code-review 子代理再调用）。
- [aihero.dev/skills](https://www.aihero.dev/skills)
  作者发布的人读 docs 站。Use for: 与仓库 `docs/` 对照。

## Gaps

- 官方没有飞书模板；飞书接线只能走 Other，要自己写 `issue-tracker.md`。
- `code-review` 与 Claude Code 内置同名 skill 的冲突，上游文档承认未修。
