
# dep-mgr

> [English](README.md) | 中文

> dep-mgr 是一个用于将指定包发布到自定义 registry 的 Node.js 脚本。

## 简介

dep-mgr 脚本用于将依赖从官方的 npm registry 迁移到到指定的 npm registry。

## 如何使用

1. 确保你已经安装了 Node.js 环境。
4. 执行以下命令：
   ```
   npx dep-mgr <依赖名称> --registry=<registry url>
   ```
6. 按照提示登录你的 npm registry。
7. 脚本将自动发布依赖到指定的 registry。

## 自定义 registry

- [verdaccio](https://verdaccio.org/)

