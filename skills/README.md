# skills

这里是本项目 project-level skills 的总入口。
它只收已经进入生命周期的项目级 skill，不再承接外部 skill 的学习拆解。
当前模型先只分两个桶：

- [stable](./stable/README.md) - 已经能作为标准入口使用的稳定 skill。
- [in-process](./in-process/README.md) - 正在试跑、迁移或收口的候选 skill。

如果你手上有一个“已经值得下次再用”的方法，不要先写散文式方法文档。先调用 [`idea-to-skill`](./stable/idea-to-skill/SKILL.md)，把它送进 `skills/in-process/`。

## stable

- [`idea-to-skill`](./stable/idea-to-skill/SKILL.md) - 把可复用方法整理成候选 project-level skill；手动调用：`/idea-to-skill`

## in-process

- [`add-prompt-to-skill-lessons`](./in-process/add-prompt-to-skill-lessons/SKILL.md) - 把要精读的 prompt / skill 正文加进课程 lesson，并转成适合阅读的静态 HTML 块；手动调用：`/add-prompt-to-skill-lessons`
- [`carbon-writer`](./in-process/carbon-writer/SKILL.md) - 为本仓库的课程、学习文章和技术观察起草或重写判断感清楚的非虚构稿件；手动调用：`/carbon-writer`
- [`gen-cover-prompt`](./in-process/gen-cover-prompt/SKILL.md) - 按课程或书籍信息整理封面 brief，并调用 `jimeng-image-prompt-crafter` 生成即梦可用 Prompt；手动调用：`/gen-cover-prompt`

## 本机安装约定

- 项目内开发中的 skill，主文件仍然留在这个仓库里，不额外复制一份到别的工作目录。
- 本机安装时，统一接到用户级 skills 目录，例如 `~/.codex/skills/<skill-name>/`；不要把开发中的 skill 装进某个具体 app、repo 或临时工作目录。
- 开发期优先用 junction / symlink 之类的 link，把用户级入口指回项目内的 skill 目录。这样仓库里一改，本机调用就能立刻跟上，不需要反复重装。

## 维护约定

- `skills/` 采用 `skills/<bucket>/<skill-name>/` 的一 skill 一目录形态。
- 候选 skill 与稳定 skill 默认都是 user-invoked；只有明确值得支付 context load 时，才考虑 model-invoked。
- 每个 skill 至少包含 `SKILL.md`；只有在主文件之外确实还需要 disclosed reference 时，才补 `reference/`，并使用有意义的文件名。
- 纯学习拆解、上游 skill 阅读笔记与仓库地图统一放到 [`../技能拆解/README.md`](../技能拆解/README.md)。
