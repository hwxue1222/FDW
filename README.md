# FDW One

本目录是 FDW 站点项目（静态页面 + Python server + PDF 工具脚本）。

## 本地启动

```bash
cd /Users/apple/Documents/trae_projects/maid_system/fdw-one
PORT=8001 .venv/bin/python3 server.py
```

打开：`http://localhost:8001/`

## PDF 工具脚本

`tools/` 下包含字段提取、schema 生成、以及根据 schema 生成可填写 PDF 的脚本。

