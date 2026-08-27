# teach-me

> 本库写课、改课、续课的覆盖层。先走上游 **teach**（教学工作区 → `lessons/*.html` / `reference/*.html`），再套本条。
> 像 grill-me 调 grilling：teach 负责出课，本条负责本仓库的 chrome、导航、配图、标题和课内正文口吻。

## 先调 teach

按当前教学工作区的 teach 流程生成或改课。本条不替代 teach 的课时切分、口吻或验收。

完成标准：工作区里已经有（或正在改）`README.md`、`lessons/`；需要速查时还有 `reference/`。

## 再套本库覆盖

### 文件放哪

| 内容 | 位置 | 页面怎么引 |
| --- | --- | --- |
| 共用样式、外链新标签 | [`课程/assets/`](../课程/assets/README.md) 的 `course.css`、`open-links-new-tab.js` | `../../assets/course.css`、`../../assets/open-links-new-tab.js` |
| 课表导航 | 该课 `assets/course-nav.js` | `../assets/course-nav.js` |
| 测验（并非每门课都有） | 该课 `assets/lesson-quiz.js` | `../assets/lesson-quiz.js` |
| 该课的图 | 该课 `assets/` | 相对该课 `assets/` |

不要在该课 `assets/` 再复制一份 `course.css` 或 `open-links-new-tab.js`。缺导航/测验/嵌入块样式时，改共用 CSS，不要另起一套。

搬走一门课离开本仓库时：把 `课程/assets/course.css` 和 `open-links-new-tab.js` 拷进该课 `assets/`，HTML 改回 `../assets/`。

### 四条覆盖（每次写课都套）

1. **导航**  
   课 > 1 节，或同时有 `lessons/` 与 `reference/`：用该课 `course-nav.js` 注入导航，页面不手写 `<nav class="course-nav">`。  
   只有单节试讲、确认不续课：可以不注入。  
   完成标准：新增一课时只改 `course-nav.js` 的列表，不必逐页补链接。

2. **图**  
   只在关系用散文不容易一眼看懂时加图（分叉、对照轴、两套同名流程）。README 封面走 [课程封面：给 README 做可点击入口](./课程封面：给 README 做可点击入口.md)，不要当成 lesson 配图规则。  
   完成标准：每张课内图都能指出它让哪段关系一眼可见；装饰图不加。

3. **标题**  
   `h1` 用满 hero，不要给标题或 `.lede` 加 `max-width: 12ch` / `55ch` 这类字数卡。中文六字就会被 `12ch` 折成两行。  
   完成标准：中文课名在桌面宽度下一行排得下（超长名自然换行，而不是被 `ch` 提前截断）。

4. **正文**  
   写完 lesson / reference 里给人读的句子，以及课程 README 的说明段之后，对那一稿跑 `/stop-slop`。权威嵌入块（`pre.prompt-zh`）、代码、导航列表、专有名词不动。  
   完成标准：套话开场、排比三段、金句收束都清掉；Directness / Rhythm / Trust / Authenticity / Density 合计低于 35 就再改一稿。

### 精读课才走的分支

课里点名、且要学员对着条文学的 prompt / skill：另读 [teach 课件：嵌入权威中文](./teach-课件-嵌入权威中文.md)。讨论课、地图课默认不嵌全文。

## 导航怎么做

课 > 1 节时：

1. 在该课 `assets/course-nav.js` 维护 `lessons` 与 `refs` 两份列表。
2. 脚本用当前路径判断在 `lessons/` 还是 `reference/`，用相对路径拼链接；课程入口一般是 `../README.md`。
3. 页面头部只保留脚本引用，不手写导航 HTML。
4. 当前页高亮，用 `aria-current="page"`，不要做成自链接。
5. 只有 lesson 页在底部补上一课 / 下一课；reference 页通常不要线性上下页。
6. `README.md` 仍是人类索引，脚本不替代它。

最小列表：

```js
const lessons = [
  { file: "0001-xxx.html", label: "0001 xxx" },
  { file: "0002-yyy.html", label: "0002 yyy" },
];

const refs = [
  { file: "map.html", label: "地图" },
];
```

lesson / reference 页头部：

```html
<link rel="stylesheet" href="../../assets/course.css">
<script src="../assets/course-nav.js" defer></script>
<script src="../../assets/open-links-new-tab.js" defer></script>
```

有测验时再加 `<script src="../assets/lesson-quiz.js" defer></script>`。

## 交给 Agent 的指令

---

请先按上游 **teach** 写课或改课，再阅读知识库 `playbook/teach-me.md` 并套覆盖层。

**任务**：【首次生成 / 续课 / 改 chrome】`【课程目录】`。

**要求**：

1. 共用样式和外链脚本用 `课程/assets/`（`../../assets/course.css`、`../../assets/open-links-new-tab.js`），不要在该课 `assets/` 复制这两份文件。
2. 课 > 1 节时用该课 `assets/course-nav.js` 注入导航；页面不手写导航块。
3. 图只加在关系用散文不容易一眼看懂的地方。README 封面不走这条。
4. 不要用 `ch` 单位卡死 `h1` / `.lede` 宽度。
5. 写完课内正文后跑 `/stop-slop`。权威嵌入块、代码、导航列表不动。
6. 精读条文时另读 `playbook/teach-课件-嵌入权威中文.md`；讨论课不要嵌 skill/prompt 全文。
7. 按该课 `MISSION` / `NOTES` 收尾。未要求不 commit；简体中文回复。

---

## 验收

- [ ] lesson / reference 的 CSS 与外链脚本指向 `课程/assets/`
- [ ] 课 > 1 节时，新增课时只需改 `course-nav.js`
- [ ] 当前页高亮；只有 lesson 有上一课 / 下一课；没有残留手写导航
- [ ] 课内图都在降低关系理解成本；标题未被 `12ch` 一类规则提前折行
- [ ] 课内正文已过 `/stop-slop`；嵌入原文、代码、导航未被改写
- [ ] 该课 `assets/` 没有第二份 `course.css` / `open-links-new-tab.js`
