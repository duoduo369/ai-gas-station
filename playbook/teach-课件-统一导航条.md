# teach 课件：统一导航条用脚本注入，不在每页手写

> 给用 **teach**（或同类教学工作区 → `lessons/*.html` / `reference/*.html`）持续长课、续课、补课时的 Agent / 人用。
> 解决的是“课程越长，导航越容易散、漏、老化”的问题。

## 核心目的

只要一门课开始有多节 `lesson` 和多张 `reference`，导航就不要继续在每页手写按钮。

应改成：

- 课程内共享一份 `assets/course-nav.js`
- 页面只负责引入脚本
- 导航结构由脚本按相对路径统一注入

这样后续新增 `0004`、`0005`、新速查页时，只改一处列表，不必逐页补链接、逐页查漏。

## 何时适用

出现以下任一情况就该切这套方案：

- 课程已不止 1 节，开始有前后课关系
- 同时存在 `lessons/` 与 `reference/`
- 已经出现“这页补了下一课，那页忘了速查”的维护漂移
- 用户明确要求“导航和另外几门课保持一致”

## 何时不必硬套

- 只有单节试讲页，短期不会继续长课
- 还没有 `reference/`，且确认只是一次性页面

一旦课程进入持续扩写状态，就应尽快切脚本注入，避免后面返工。

## 方案长什么样

默认把导航拆成三层，但由**一份脚本统一生成**：

1. **课程入口 + 全部 lessons**
   作用是给人快速定位自己在整门课里的位置。

2. **速查组**
   单独列全部 `reference` 页面，避免和 lesson 混在一起。

3. **上一课 / 下一课**
   只在 `lesson` 页显示。
   `reference` 页一般不显示这组，因为速查页不是线性阅读主线。

## 怎么做

1. **在课程 `assets/` 新建共享脚本**
   文件建议叫 `course-nav.js`。
   里面维护两份列表：
   - `lessons = [...]`
   - `refs = [...]`

2. **脚本自己判断当前页在哪**
   用当前 URL / pathname 推断：
   - 当前是否在 `lessons/`
   - 当前是否在 `reference/`
   - 当前是哪一页

3. **统一用相对路径生成链接**
   不要写本地绝对路径，不要依赖部署环境 URL。
   课程入口通常是 `../README.md`。
   lesson / reference 链接由脚本根据当前目录拼出来。

4. **页面只引脚本，不手写导航 HTML**
   lesson / reference 页头部只保留：
   ```html
   <script src="../assets/course-nav.js" defer></script>
   ```
   不再在正文里重复写一堆 `<nav class="course-nav">...</nav>`。

5. **共享样式写进课程 CSS**
   导航相关类统一放 `assets/course.css`：
   - `.course-nav`
   - `.course-nav-row`
   - `.course-nav-current`
   - `.course-nav-prevnext`
   - `.course-nav-label`
   - `.course-nav-muted`

6. **当前页高亮**
   当前页不要继续渲染成链接，改成 `aria-current="page"` 的高亮文本。

7. **lesson 页底部自动补上一课 / 下一课**
   由脚本 append 一个底部导航，不要再手写页尾按钮。

## 推荐的行为边界

- **lesson 页**
  顶部：课程入口 + 全部 lessons + 全部速查
  底部：上一课 / 下一课

- **reference 页**
  顶部：课程入口 + 全部 lessons + 全部速查
  底部：通常不再单独补线性上下页

- **README.md**
  仍保留人类可读的课程索引，脚本不替代 `README` 的目录职责。

## 为什么比手写更稳

- 新增一课时，只改脚本里的列表
- 新增速查页时，只改脚本里的列表
- 不会出现有些页有“去 0004”、有些页没补的问题
- 不会因为复制旧 HTML 而带着过期导航到新课里
- 导航风格可以跨课程复用，形成 teach 工作区的一致手感

## 最小骨架

```js
const lessons = [
  { file: "0001-xxx.html", label: "0001 xxx" },
  { file: "0002-yyy.html", label: "0002 yyy" },
];

const refs = [
  { file: "map.html", label: "地图" },
  { file: "cheatsheet.html", label: "速查" },
];
```

页面里：

```html
<link rel="stylesheet" href="../assets/course.css">
<script src="../assets/course-nav.js" defer></script>
```

## 交给 Agent 的指令

---

请先阅读知识库 `playbook/teach-课件-统一导航条.md`，并按该条目操作。

**任务**：把 `【教学工作区路径】` 的课程导航改成统一脚本注入方案。

**要求**：

1. 在课程 `assets/` 下维护一份共享导航脚本，统一生成课程入口、lessons、reference 与 lesson 页上一课 / 下一课。
2. lesson / reference 页面只保留脚本引用，不再手写重复导航块。
3. 所有链接统一使用标准相对路径，不能写本地绝对路径。
4. 当前页要高亮，并用 `aria-current="page"`。
5. 更新课程 `README.md`、`NOTES.md` 中与导航机制相关的说明。
6. 未要求不 commit；简体中文回复。

---

## 验收

- [ ] 新增一节课时，只需改 `course-nav.js` 的列表，不必逐页补导航
- [ ] lesson 与 reference 顶部都能看到统一课程导航
- [ ] 只有 lesson 页出现上一课 / 下一课
- [ ] 当前页有高亮状态，不再是可点击的自链接
- [ ] 页面内没有残留旧的手写导航块
- [ ] 所有课程内链接仍是标准 Markdown / HTML 相对路径
