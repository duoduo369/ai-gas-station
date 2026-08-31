# in-process

这里放候选 project-level skills。
它们已经具备明确触发时机和基本步骤，但还在试跑、迁移或收口中，暂时不算稳定入口。
某个候选 skill 如果已经过真实验证，并且现在能作为标准入口推荐，就调用 [`release-skill`](../stable/release-skill/SKILL.md) 把它提升到 `stable`。

## 当前条目

- [`add-note`](./add-note/SKILL.md) - 把用户贴来的摘录或启发原样落到 `摘录与启发/`，并同步更新索引；手动调用：`/add-note`
- [`add-prompt-to-skill-lessons`](./add-prompt-to-skill-lessons/SKILL.md) - 把要精读的 prompt / skill 正文加进课程 lesson，并转成适合阅读的静态 HTML 块；手动调用：`/add-prompt-to-skill-lessons`

## 进入门槛

- 这个方法已经不是一次性描述，而是下次很可能还会再用。
- 触发时机、核心动作和完成标准已经能压成一个短的 `SKILL.md`。
- 只有在主文件之外确实还需要 disclosed reference 时，才补 `reference/`，不要默认创建通用备注文件。
