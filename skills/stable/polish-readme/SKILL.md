---
name: polish-readme
description: 在书籍封面或课程入口更新后，同步刷新根 README、课程 README 与书籍 README 的展示层。
disable-model-invocation: true
---

# polish-readme

把本仓库对外展示的 README 按最新封面和入口收口。默认更新 `README.md`、`课程/README.md`、`书籍/README.md`；如果用户明确点名某门课或某本书，只更新根 `README.md` 和对应模块 README；如果用户明确只要首页展示层，则只更新根 `README.md`。

## Before you start

- 先按本文件已经写明的首页规则和模块页规则判断这次要怎么收口；不要把目录外文档当成这条 skill 的运行时依赖。
- 先确认这次是全量刷新三份 README、只刷新根 README 加一个对应模块 README，还是只刷新根 `README.md`。
- 这条 skill 只处理 README 展示层，不顺手改正文、封面文件或别的索引页。

## Steps

1. 锁定这次更新范围。
   完成标准：已经明确是同时更新三份 README、只更新根 README 加 `课程/README.md` / `书籍/README.md` 其中之一，还是只更新根 `README.md`。
2. 盘点本次会进入卡片区的条目。
   完成标准：封面文件和目标链接都已经存在；根 README 只展示有封面的条目；模块 README 里无封面的书保留普通列表，不硬塞空卡片。
3. 更新根 `README.md`。
   完成标准：首页只保留标题下的两句说明，以及 `书籍`、`课程` 两个模块；根首页卡片区固定按一行 3 个排布；书籍区先用“重读经典软件工程方法论，看看它们今天怎样落到 AI 与 Agent 编程里”这一类抓手句收口；课程区的 Markdown 引用块放本地查看方式、GitHub Pages 直达入口与 `课程` 总表入口，抓眼球句放在引用块后、表格前，不加分类子标题。
4. 更新对应模块 README。
   完成标准：如果这次范围包含模块 README，`课程/README.md` 和 `书籍/README.md` 可以保留分类子标题；每个分类里的表格按实际条目数排，不补空白列；分类里的无封面书籍继续保留普通列表兜底。
5. 自查链接和展示一致性。
   完成标准：图片、标题和目标链接都使用标准相对路径，目标已存在；根首页仍然固定 3 列，目录页不再写死 3 列补空表格；GitHub Pages 入口使用完整线上链接，且没有改出本次范围外的 README。

## Finish

- 确认只修改了这次约定范围内的 README。
- 确认根 README 仍然是紧凑首页，不回塞“其他收录”或额外大段说明。
- 确认模块 README 仍然是目录索引入口，而不是把正文规则搬进去。
