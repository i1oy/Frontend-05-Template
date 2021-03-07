# 学习笔记

## 持续集成 ｜ Git Hooks 基本用法

在工程的 `.git/hooks` 文件夹下，
内置了默认的 hooks 例子，文件名以 `.sample` 结尾（不执行）；
去掉 `.sample` 后则根据定义的名称执行(例如， `pre-commit` 即表示提交前执行)。

类 Linux 系统的脚本编辑习惯：
在文件的第一行指定执行本文件的脚本引擎 `#!/bin/sh`, `#!/usr/bin/env node`

## 持续集成 ｜ ESLint 的基本用法

安装: `npm i -D eslint`;

配置: `npx eslint --init`;

使用: `npx eslint index.js`;

## 持续集成 ｜ ESLint API 及高级用法

## 持续集成 ｜ 使用无头浏览器检查 DOM

使用 Chrome Headless 模式；
使用 puppeteer 包；
