#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'init'

# 修改上游分支名称
git branch -m master main

# 推送 git@github.com:beoop/beoop-vue-admin.git
git push -f git@github.com:beoop/beoop-vue-admin.git main:main-hero

cd -