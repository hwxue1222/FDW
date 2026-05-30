# maid_system 页面设计说明（Desktop-first）

## 全局规范（适用于所有页面）
### Layout
- 采用「顶部导航 + 主内容容器」结构；主容器最大宽度 1120px，左右留白自适应。
- 列表类使用 CSS Grid（桌面 3 列/2 列可配置）；详情页使用双栏布局（左媒体右信息），在窄屏降为单栏。

### Meta Information
- 默认 Title 模板：`{页面标题} | maid_system`
- 默认 Description：简述“女佣资料展示与查询”。
- OG：`og:title`、`og:description`、`og:image`（详情页优先用头像/第一张照片）、`og:url`。

### Global Styles（Design Tokens）
- 背景：#F7F8FA；内容卡片：#FFFFFF；边框：#E6E8EC
- 主色：#1E40AF（按钮/高亮）；辅助色：#0EA5E9（标签/链接强调）；危险色：#DC2626
- 字体：系统字体栈；字号：12/14/16/20/24/32
- 按钮：主按钮实心（hover 加深 6%）；次按钮描边；禁用态透明度 40%
- 链接：默认主色，下划线仅在 hover 显示
- 动效：列表 hover 提升阴影；切换筛选时加载 skeleton（200–400ms fade）

---

## 页面 1：女佣资料库（首页）
### Layout
- 上方筛选区（sticky 可选）+ 下方列表区。
- 筛选区使用 Flex（多行换行），列表区使用 Grid。

### Meta
- Title：女佣资料库
- Description：按条件快速筛选并查看女佣档案。

### Page Structure
1) 顶部导航
2) 页面标题区（标题 + 简短说明）
3) 筛选与搜索区
4) 列表区（卡片网格）
5) 分页/加载更多

### Sections & Components
- 顶部导航（NavBar）
  - 左：站点名 / Logo（点击回首页）
  - 右：管理员入口（文本按钮，未登录时显示“管理员登录”）
- 筛选与搜索（FilterBar）
  - 搜索框：placeholder “姓名/编号/标签”
  - 下拉：国籍、可用状态
  - 多选：技能标签（以 chips 展示）
  - 数值：薪资范围（min/max）
  - 操作：清空、应用（桌面端可实时生效，仍保留“清空”）
- 女佣卡片（MaidCard）
  - 头像（1:1 或 4:5）
  - 主信息：姓名/编号、国籍、年龄
  - 标签：技能/语言关键字（最多 3 个，超出用 “+N”）
  - 状态徽标：available/reserved/unavailable
  - 点击：进入详情页
- 列表状态
  - 加载：Skeleton 卡片
  - 空态：提示“未找到匹配结果”，提供“清空筛选”按钮

---

## 页面 2：女佣详情页（公开）
### Layout
- 桌面端双栏：左侧媒体（相册/头像/附件），右侧信息（字段与标签）。
- 信息区分组使用 Card + 小标题。

### Meta
- Title：`{姓名/编号}`
- Description：自动生成：国籍 + 年龄 + 关键技能标签。
- OG：优先使用 avatar_url 或第一张 photo。

### Page Structure
1) 顶部导航（同首页）
2) 面包屑/返回（返回列表）
3) 主体：左媒体 + 右信息
4) 底部：更新时间、资料来源/声明（可选）

### Sections & Components
- 媒体区（MediaPanel）
  - 头像大图
  - 相册缩略图列表（点击切换大图）
  - PDF 区：biodata PDF（按钮“查看/下载”）；无则隐藏
- 信息区（InfoPanel）
  - 标题行：姓名、编号、状态徽标
  - 关键标签：技能/语言 chips
  - 字段表格（DefinitionList）：国籍、年龄、身高体重、宗教、薪资、休息日偏好、经历摘要
  - 分享：按钮“复制链接”（复制当前 URL；成功 toast）

---

## 页面 3：管理员登录页
### Layout
- 居中单卡片布局（宽 420px）。

### Meta
- Title：管理员登录
- Description：仅管理员可访问。

### Sections & Components
- 登录卡片（AuthCard）
  - 标题 + 提示文案
  - 表单：邮箱、密码
  - 提交按钮：登录
  - 错误提示：表单下方红色文本
- 安全与状态
  - 登录中禁用按钮并显示 loading
  - 登录成功跳转 /admin/maids

---

## 页面 4：资料管理后台（女佣资料）
### Layout
- 桌面端左侧侧边栏 + 右侧内容区。
- 内容区为“列表视图”与“编辑视图”两种。

### Meta
- Title：资料管理后台
- Description：女佣资料维护与发布。

### Page Structure
1) 顶部管理栏（包含退出）
2) 左侧导航（女佣资料）
3) 右侧：列表/编辑

### Sections & Components
- 管理顶栏（AdminTopBar）
  - 当前用户（管理员邮箱）
  - 退出按钮
- 资料列表（AdminMaidList）
  - 工具条：搜索（姓名/编号）、状态筛选（draft/published）、新增按钮
  - 表格列：头像、编号、姓名、国籍、状态、更新时间、操作（编辑/预览/发布/撤回）
- 编辑表单（AdminMaidEditor）
  - 分组 1 基础信息：编号、姓名、国籍、年龄、宗教、身高体重
  - 分组 2 语言与技能：多选 chips + 自定义输入
  - 分组 3 薪资与状态：期望薪资、休息日偏好、可用状态
  - 分组 4 经历摘要：多行文本
  - 分组 5 媒体与附件：头像上传、相册上传（支持排序）、PDF 上传
  - 底部操作：保存草稿、发布、撤回、预览（打开公开详情页）
- 表单校验
  - 编号唯一；必填字段缺失阻止发布
  - 上传文件类型校验：照片 jpg/png/webp，PDF 仅 pdf
