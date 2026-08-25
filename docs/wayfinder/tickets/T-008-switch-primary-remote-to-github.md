---
type: task
status: closed
hitch: AFK
blocked_by:
  - T-005
assignee: codex
---

# T-008 将主维护远端切换到 GitHub

## Question

当前仓库最初接入的是 Gitee 远端，但后续维护希望统一迁到 GitHub。需要把主维护远端切到用户给出的 GitHub 仓库，并让文档反映这一变化。

这张票要完成：

- 把 `origin` 从 Gitee 切换到 GitHub；
- 保留 `T-005` 作为历史记录，而不是篡改首次接入远端的事实；
- 在决策地图中明确：后续以 GitHub 作为主维护远端。

## Resolution

已按用户提供的 SSH 地址把当前仓库主远端切换为 GitHub：

- 执行 `git remote set-url origin git@github.com:duoduo369/ai-gas-station.git`
- 当前 `origin` 已指向：
  - `git@github.com:duoduo369/ai-gas-station.git`（fetch）
  - `git@github.com:duoduo369/ai-gas-station.git`（push）

由此确认：

1. `T-005` 仍保留“最初接入 Gitee 远端”的历史事实；
2. 从这次变更开始，仓库后续维护统一以 GitHub 远端为准；
3. 若后续需要推送、协作或补文档链接，默认以 GitHub 仓库为主。
