# Mission: Learning teach and teach-me together

## Why
你已经在用 `/teach` 给这个知识库写课。这门课先把本库真正常用的 `teach-me` 覆盖层钉住，再回到上游 `teach`：什么时候该唤它、课程目录里会落下哪些文件、怎样判断一课有没有跑偏。读完后，你能自己点名 `teach-me` 或 `/teach`，也能看出 agent 有没有按卡做事。

## Success looks like
- 能说清 `teach-me` 和 `teach` 的关系：前者把本库课程写成中文 HTML，后者提供上游教学工作区方法
- 能说清 `/teach` 和“当场要一句解释”的差别，并知道 agent 不会自己伸手
- 打开一个教学工作区时，能指认 `MISSION.md`、`RESOURCES.md`、`lessons/`、`reference/`、`learning-records/`、`NOTES.md` 各自干什么
- 能判断一课是否挂在使命上、有没有引用、回看该翻 lesson 还是 reference、课数变多时导航有没有跟上
- 能写出第一句 `teach-me` 或 `/teach`：主题或 GitHub 地址、已知和缺口、指定资料、目录落点
- 知道本库存课时会把工作区收在 `课程/某课/`，共用样式、外链脚本和导航都挂在该课 `assets/`

## Constraints
- 收成两节：`0001` 先讲 `teach-me` 覆盖层，`0002` 再讲上游 `teach` 工作区
- 课程内容默认用中文写
- 引用上游文件用 GitHub / aihero 稳定地址，不写本机 skill 安装路径
- 每节 lesson 保持短，一次只解决一件事

## Out of scope
- 不讲间隔重复软件怎么接、也不做摸底测评系统设计
- 不逐段翻译 `MISSION-FORMAT.md` 等格式文件
- 不把 Vygotsky、Bjork 做成独立教育学课
