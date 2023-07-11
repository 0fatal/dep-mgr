# npm-mgr

> English | [中文](README_cn.md)

> npm-mgr is a Node.js script to publish specified packages to a custom registry.

## Introduction

The npm-mgr script is used to migrate dependencies from the official npm registry to a specified npm registry.

## How to Use

1. Make sure you have Node.js installed.
4. Run the following command:
   ```
   npx npm-mgr <dependency-name> --registry=<registry url>
   ```
6. Follow the prompts to login to your npm registry.
7. The script will automatically publish the dependency to the specified registry.

## Custom registry

- [verdaccio](https://verdaccio.org/)
