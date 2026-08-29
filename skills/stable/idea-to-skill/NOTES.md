# idea-to-skill

这里放 `idea-to-skill` 的参考说明与候选 skill 模板。
主 `SKILL.md` 只负责动作；长说明、边界和模板都留在这里。

## 什么样的方法值得进 lifecycle

- 已经重复验证过，或者至少清楚地预期下次还会再用。
- 触发时机已经说得清，不需要靠大段背景才能理解何时该用它。
- 核心动作能压成短步骤，而不是只能写成长篇说明。
- 它服务的是这个仓库的协作，而不是某个用户跨项目的个人习惯。

## 候选 skill 的目录形状

```text
skills/
  in-process/
    <skill-slug>/
      SKILL.md
      NOTES.md
```

- `<skill-slug>` 默认使用英文 kebab-case。
- invoke 名称默认与 slug 一致；只有用户明确要求时再分开。
- `SKILL.md` 负责“什么时候用、按什么顺序做、做到哪里算完成”。
- `NOTES.md` 负责“来源、边界、失败案例、迁移备注、试跑记录”。

## 候选 `SKILL.md` 模板

```markdown
---
name: <skill-slug>
description: <一句给人看的用途说明>
disable-model-invocation: true
---

# <skill-slug>

一句话说明这个候选 skill 解决什么卡点，以及它会把结果落到哪里。

## Before you start

- 先读和这条 skill 真相关的仓库约定与术语。
- 如果这还只是一次性说明，就停在当前文档，不创建 skill。

## Steps

1. <第一步>
   完成标准：<可判断的停点>
2. <第二步>
   完成标准：<可判断的停点>
3. <第三步>
   完成标准：<可判断的停点>

## Finish

- <最终核对项>
```

## 候选 `NOTES.md` 模板

```markdown
# <skill-slug>

## 来源

- 模式：`new` / `migrate-playbook`
- 源材料：

## 边界

- 这条 skill 解决什么：
- 这条 skill 不解决什么：

## 试跑记录

- 日期：
- 场景：
- 结果：

## 迁移备注

- 仅在从 `playbook/` 迁移时填写；如果旧文件已经删除，就记录原路径与删除状态，不保留失效链接
```

## 写作提醒

- 用 `writing-for-agents` 的思路写：主文件保步骤，参考信息下沉，避免把解释层塞满调用入口。
- completion criteria 要写到“能看出这一步已经完成”，不要只写抽象目标。
- 一条 skill 只解决一个稳定卡点；如果你开始想塞第二条主线，通常说明该拆了。
