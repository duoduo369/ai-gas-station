# teach 课件：把权威 prompt / skill 的中文嵌进课里

> 给用 **teach**（或同类教学工作区 → `lessons/*.html`）写课、改课时的 Agent / 人用。
> 方法学，与具体学习对象无关。首次生成或事后加厚，都先读本条。

## 核心目的

课件里只要**点名、依赖、或要求学员去读**某份 prompt / skill / 同类权威正文，就把对应内容的**中文**嵌进 HTML（并链原文）。

这样学员复习时不必再翻上游仓库、本地克隆或一长串外链，在课内就能对着规则学。

但要注意：**如果原文本身是 Markdown，不要把 Markdown 符号原样塞进 HTML 里。** 浏览器不会替你把 `#`、`-`、`>`、代码围栏自动变成可读结构。学员看到的只会是一大块带语法符号的原文，复习体验会很差。

另外，**权威正文默认不要一上来就整块摊开。** 多数课件里，正文块更适合做成“默认折叠，按需展开”的形式：先让学员跟着主线读，真要对照原文时再点开“查看完整 prompt”。

课怎么组织——按层、按流程、按地图、按时间线——由该课自己决定，**本条不规定章节骨架**。

## 何时适用

课中出现并需要学员理解其条文时，例如：

- `SKILL.md`、agent skill、slash 说明
- 系统 / 角色 / 宪法类 prompt
- 启动时生成的指令、固定模板、协议里的可复制格式

典型触发：第一次用 teach 写这类课；或用户要求加厚 overview 课（课里只写了「去看某某文件」却没贴正文）。

## 何时不必硬套

- 课只建立地图/索引，点名文件是为了「下一步再精读」，且本课明确不讲条文——可只外链，并在 NOTES 记「全文留给后续课」
- 权威正文极长、且本课只需其中一节——嵌**相关节**的中文全量，并注明「全文见原文某节」
- 没有高信任原文时：先补 `RESOURCES.md` / 核对上游，禁止用模型记忆编造全文

## 嵌入前先分两类

### 1. Markdown / 文档正文

默认转成**语义化 HTML** 再嵌。

- 用 `article.prompt-doc` 包住整块
- 用 `div.prompt-md` 承载正文
- 把 Markdown 的标题、段落、列表、引用、表格、代码块转成对应 HTML 标签
- 保留原文结构，不要压成摘要 bullet

一句话：**嵌的是正文，不是 Markdown 源码。**

### 2. 必须逐字逐行保留的原始片段

只有这些内容继续用 `<pre>`：

- frontmatter / YAML / JSON
- shell 命令、配置片段、协议片段
- diff、日志、终端输出
- 必须逐行对照、不能改行级形状的原文

这类块建议用 `pre.prompt-raw`。为了兼容旧课，现有 `pre.prompt-zh` 也可以继续工作，但新写法优先用 `prompt-raw`。

### 3. 混合文档

很多 `SKILL.md` 既有 frontmatter，也有 Markdown 正文。此时拆开嵌：

- frontmatter 单独放 `pre.prompt-raw`
- 正文部分转成 `div.prompt-md`

不要把整份混合文档一股脑塞进一个 `<pre>`。

## 展示方式默认用可折叠块

默认推荐：

- 外层仍用 `article.prompt-doc`
- 正文与原始片段放进 `details.prompt-fold`
- 初始状态不加 `open`，保持默认折叠
- `summary` 文案默认写“查看完整 prompt”，展开后同一位置显示“收起 prompt”

何时可以不折叠：

- 这段正文很短，摊开更顺
- 学员必须一边读讲解一边逐行对照
- 这一屏的主体就是全文精读，本节没有别的负担

一句话：**默认折叠，按需例外。**

## 真实落地里最容易出问题的地方

### 1. 混合文档不要整份一起处理

`SKILL.md`、部分 prompt docs 常见形状是：

- 开头一段 frontmatter
- 后面才是 Markdown 正文

这类文件不要整份都进 `pre`，也不要把 frontmatter 当普通正文渲染。

正确拆法：

- frontmatter → `pre.prompt-raw`
- 正文 → `div.prompt-md`

### 2. 嵌套列表、表格、引用要优先用真正的 Markdown 渲染

最容易翻车的不是一级标题，而是这些：

- 有序列表里再套无序列表
- Markdown 表格
- 引用块、代码围栏、行内代码混排
- FAQ 里“问题标题 + 段落解释”的混合结构

**优先用真正的 Markdown 渲染器，把结果直接落成静态 HTML。**  
不要手搓一个只够标题和一级列表的半截转换器，然后假设长文也会对。像 `ask-matt`、`code-review`、`engineering.prompt` 这种长文，最先坏掉的通常就是嵌套列表和表格。

如果环境里没有现成渲染器：

- 先补一个轻量依赖再转
- 或手工改最复杂的那几段
- 不要为了“省一步”把整份 Markdown 原样塞回 `<pre>`

### 3. 短示例不一定值得塞进折叠权威块

下面这些通常是**示例**，不是需要整块精读的权威正文：

- 四行 `git_handoff`
- 一小段 YAML / 头部模板
- 单条命令格式
- 很短的 note / message 例子

这类内容常常更适合：

- 保留在讲解段落后面
- 直接用独立的 `pre.prompt-zh` 或 `pre.prompt-raw`
- 不再额外包一层 `article.prompt-doc` + `details`

判断法：**如果它只是给前文一个“长什么样”的例子，而不是本节要精读的正文，就把它当示例，不当权威正文卡片。**

### 4. 改展示方式后，顺手同步课程说明

如果你是在**已有课程**上做 retrofit，而不是首次写课：

- 看该课 `README.md`
- 看该课 `NOTES.md`

若里面写了旧假设，例如：

- 还在指向旧 playbook 文件名
- 还写着 `pre.prompt-zh` 全文一字未动
- 还把课件描述成“正文直接摊开”

就顺手同步，不要让课程说明落后于实际页面。

## 怎么做（不管课是「层」还是「流程」）

1. **列出本课依赖的权威文件**  
   凡课内点名且本课要讲清的，列入清单。组织方式跟课走：出现在「第二层」就嵌在第二层附近；出现在某一步就嵌在那一步附近。

2. **嵌入中文，原文只链**  
   - 正文放可复用块，建议 `article.prompt-doc` + `details.prompt-fold` + `div.prompt-md`；原始片段再用 `pre.prompt-raw`。样式进该课 `assets/course.css`。  
   - Markdown 原文要转成 HTML 结构，不要指望页面运行时再补一个 Markdown 渲染器。teach 课件是静态 HTML，直接落成 HTML 最稳。  
   - 遇到混合文档时，先拆 frontmatter，再转正文。  
   - 遇到嵌套列表、表格、FAQ 混排时，优先用真正的 Markdown 渲染器生成静态 HTML；不要用半截手工转换硬扛。  
   - 中文保留原有标题与列表结构，是可复习正文，不是摘要 bullet。  
   - 默认折叠，`summary` 用“查看完整 prompt”；展开后同一位置可再次点击收起。  
   - 旁注链稳定 URL（GitHub / 官方文档等）；本地路径不写进 HTML。

3. **避免重复、说清覆盖关系**  
   - 同一份全文已在前面的课或 `reference/` 嵌过：本课链锚点即可。  
   - 本课才第一次要学员照着做、或本地规则会收窄/覆盖共享规则：本课必须嵌中文，并写清关系。

4. **术语（可选）**  
   行业通用概念可在 `reference/` 展开并链锚点；对象自造词标明非通用，用其自己的定义解释。

5. **工作区习惯**  
   按该教学工作区更新索引、`NOTES`、测验与主资料列表；若你改的是已有课，也顺手同步该课 `README.md` / `NOTES.md` 里的旧假设。未要求则不 commit。

## 嵌入块示例（结构随课摆放，不必叫「第 N 拍」）

```html
<article class="prompt-doc">
  <h3 class="card-title">文件名或 skill 名（中文）</h3>
  <p class="prompt-cap">原文：<a href="https://…">稳定 URL</a> · 本课为何要读它</p>

  <details class="prompt-fold">
    <summary class="prompt-toggle">
      <span class="prompt-toggle-closed">查看完整 prompt</span>
      <span class="prompt-toggle-open">收起 prompt</span>
    </summary>

    <pre class="prompt-raw prompt-frontmatter">---
name: ask-matt
description: 问当前处境该用哪条 skill 或哪条 flow。
disable-model-invocation: true
---</pre>

    <div class="prompt-md">
      <h4>Ask Matt</h4>
      <p>你记不住每一个 skill，所以来问。</p>

      <h5>主线：idea → ship</h5>
      <ol>
        <li><code>/grill-with-docs</code>：先把想法磨清楚。</li>
        <li><code>/to-spec</code>：需要跨 session 时，把对话压成 spec。</li>
        <li><code>/implement</code>：实现时内部会拉起 <code>/tdd</code>。</li>
      </ol>

      <blockquote>
        <p>把第 1–3 步留在同一个不间断的上下文窗口里。</p>
      </blockquote>
    </div>
  </details>
</article>
```

## 交给 Agent 的指令

---

请先阅读知识库 `playbook/teach-课件-嵌入权威中文prompt.md`，并按该条目操作。

**任务**：【首次生成 / 加厚】`【教学工作区路径】` 下的 `【lesson 文件】`。

**要求**：

1. 本课点名且需要学员理解条文的 prompt、skill、生成指令、固定模板等：在课内相应位置嵌入**中文**（完整文件或本课所需完整小节）；原文只留稳定外链。目的是减少学员再到上游项目里翻原文。
2. 这类正文默认放进可展开折叠块：`details.prompt-fold` 初始保持折叠，`summary` 默认写“查看完整 prompt”；展开后同一位置可再次点击收起。只有正文很短，或本节本来就是逐行精读时，才直接展开。
3. 如果源文是 Markdown：默认把正文转成可读 HTML（标题、段落、列表、引用、表格、代码块都落成对应标签），不要把整份 Markdown 原样塞进 `<pre>`。只有 frontmatter、命令、YAML、日志、diff 这类原始片段才用 `pre.prompt-raw`。
4. 若文件同时含 frontmatter 与 Markdown 正文：拆成 `pre.prompt-raw` + `div.prompt-md`，不要整份同处理。
5. 若正文含嵌套列表、表格、FAQ 混排：优先用真正的 Markdown 渲染器生成静态 HTML，并至少肉眼检查这些复杂段落；不要只看标题和一级列表就收工。
6. 短草稿、命令头、四行模板若只是示例，不是本节要精读的权威正文，可保留为独立 `pre` 示例，不必强行包进折叠卡片。
7. 章节怎么切（层 / 流程 / 地图等）跟该课现有结构或 MISSION 一致，不要为了嵌入而强行改成另一种叙事。
8. 已在别课/`reference` 嵌过的全文：链锚点；本课新依赖或会覆盖共享规则的：本课嵌入。
9. 样式用该课 `assets/course.css`；缺嵌入用样式则补进这份 CSS。先读 `MISSION` / `NOTES` / `RESOURCES` 与上游原文，勿编造全文。
10. 按工作区习惯收尾（测验、主资料、索引、NOTES）。如果改的是已有课，也同步该课 `README.md` / `NOTES.md` 里对旧展示方式的描述。未要求不 commit；简体中文回复。

**本课上下文**（人填）：

- 必须嵌入中文的文件 / skill：【】
- 可只链锚点的既有全文：【】
- 本课组织方式（若已知）：【层 / 流程 / 其它】

---

## 验收

- [ ] 本课需要学员理解的权威条文，课内已有中文（或锚点指向已嵌全文处）
- [ ] 权威正文默认是可折叠块；点“查看完整 prompt”能展开，再点同处能收起
- [ ] 混合文档已拆成 frontmatter 原样块 + 正文结构块，没有整份误塞进 `<pre>`
- [ ] Markdown 类正文在课内是可读结构，不是带 `#` / `-` / 代码围栏的一整块源码
- [ ] 嵌套列表、表格、FAQ 等复杂段落在页面里结构正常，不是塌成一坨
- [ ] 学员大体上不必离开课件去上游仓库「再翻一遍」才能读到这些规则
- [ ] 外链可打开原文；无本地绝对路径
- [ ] 嵌入没有打乱该课原有叙事结构
