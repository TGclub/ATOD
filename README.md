# README
# ATOD（倒过来读就是DOTA)

## Base Tech
#### phaser
Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering. http://phaser.io

#### DragonBonesJS
DragonBones TypeScript / JavaScript Runtime，using DragonBones in Phaser。
## why choose 'phaser' not 'pixi'

对比了以下几个方面：

* commits 
* issue
* api style
* blog contribution
* api document
* code examples
* developed games
* 3rd SDK support（DragonBonesJS...)

最终选择了 phaser 。

## development(temp)
$ npm install

$ npm run lab

look at the terminal, open the browser, source code in `/examples/index.html`.

## 关键词
2D、像素风、web版、“以撒的结合风格”，PVP，“DOTA英雄和技能”，“just for fun“。

## 功能描述
### 概述：
2D化DOTA英雄的技能，PVP进行对战，近百英雄随意挑。

### 模块：

* 网络模块：支持双向通信，能够保持低延迟。
* 选英雄模块：选择英雄。
* 地图生成模块：随机生成地图和地图类物品。
* 英雄模块：包含血量、属性、buff、debuff、技能。
* 游戏进程控制模块：控制游戏的整个流程，防止异常。

### 关于美术素材

最开始准备用雪碧图，后来发现工作量太大了且低效，则选择用2D骨骼动画。