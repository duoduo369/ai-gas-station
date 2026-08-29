# in-process

这里放候选 project-level skills。
它们已经具备明确触发时机和基本步骤，但还在试跑、迁移或收口中，暂时不算稳定入口。

## 当前条目

- [`add-prompt-to-skill-lessons`](./add-prompt-to-skill-lessons/SKILL.md) - 把要精读的 prompt / skill 正文加进课程 lesson，并转成适合阅读的静态 HTML 块；手动调用：`/add-prompt-to-skill-lessons`
- [`add-book`](./add-book/SKILL.md) - 按本仓库技术书笔记规范创建新书籍 md，补齐可查书目信息，生成导读并同步维护书籍索引；手动调用：`/add-book`
- [`carbon-writer`](./carbon-writer/SKILL.md) - 为本仓库的课程、学习文章和技术观察起草或重写判断感清楚的非虚构稿件；手动调用：`/carbon-writer`
- [`gen-cover-prompt`](./gen-cover-prompt/SKILL.md) - 按课程或书籍信息整理封面 brief，并调用 `jimeng-image-prompt-crafter` 生成即梦可用 Prompt；手动调用：`/gen-cover-prompt`

## 进入门槛

- 这个方法已经不是一次性描述，而是下次很可能还会再用。
- 触发时机、核心动作和完成标准已经能压成一个短的 `SKILL.md`。
- 只有在主文件之外确实还需要 disclosed reference 时，才补 `reference/`，不要默认创建通用备注文件。
