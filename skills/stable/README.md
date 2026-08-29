# stable

这里放已经在本仓库里站稳的 project-level skills。
它们可以被当作标准入口推荐给协作者使用，默认仍然是 user-invoked。
如果某个候选 skill 已经过真实验证，并且准备从 `in-process` 提升到这里，先调用 [`release-skill`](./release-skill/SKILL.md) 走 release 流程。

## 当前条目

- [`add-book`](./add-book/SKILL.md) - 按本仓库技术书笔记规范创建新书籍 md，补齐可查书目信息，生成导读并同步维护书籍索引；手动调用：`/add-book`
- [`carbon-writer`](./carbon-writer/SKILL.md) - 为本仓库的课程、学习文章和技术观察起草或重写判断感清楚的非虚构稿件；手动调用：`/carbon-writer`
- [`gen-cover-prompt`](./gen-cover-prompt/SKILL.md) - 按课程或书籍信息整理封面 brief，并调用 `jimeng-image-prompt-crafter` 生成即梦可用 Prompt；手动调用：`/gen-cover-prompt`
- [`idea-to-skill`](./idea-to-skill/SKILL.md) - 新项目级 skill 的自举入口：把可复用方法压成候选 skill；手动调用：`/idea-to-skill`
- [`polish-readme`](./polish-readme/SKILL.md) - 在书籍封面或课程入口更新后，同步刷新根 README、课程 README 与书籍 README 的展示层；手动调用：`/polish-readme`
- [`release-skill`](./release-skill/SKILL.md) - 把一个已经验证过的候选 skill 提升到 stable，并同步更新生命周期入口；手动调用：`/release-skill`
