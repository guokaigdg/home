# 字体文件

本站拉丁字符使用自托管的 [Allo](https://allo.joshpuckett.me)，中文回退到系统字体。
字体栈定义在 `assets/style.css` 顶部，两个页面都预加载了同一个字体文件。

```
AlloVariableFriendly.woff2  (~240 KB)  可变字重 100–900，圆润度固定在 Friendly (50)
OFL.txt                                 SIL Open Font License 1.1 授权文本
```

## 为什么选 Friendly 版

Allo 的完整可变字体还带 `ROND` 圆润度轴，文件约 448 KB；本站只用到字重和自动光学尺寸，
Friendly 版约 240 KB，体积减半，圆润度固定在字体推荐的默认档位。

## 字体分工

- 正文与标题里的拉丁字符走 Allo
- 中文回退到无衬线系统字体（PingFang SC → Hiragino Sans GB → Microsoft YaHei）
- 所有字形都不再依赖 jsDelivr 或本地缺失的字体文件

## 授权

Allo 由 Josh Puckett 设计，基于 [Inter](https://github.com/rsms/inter) 改编，采用 SIL Open Font License 1.1。
可自由用于个人与商业项目、网站与软件分发；不得单独出售字体文件。完整条款见同目录 `OFL.txt`。

字体版本：1.0.3 · 来源：<https://allo.joshpuckett.me/downloads/Allo-1.0.3.zip>
