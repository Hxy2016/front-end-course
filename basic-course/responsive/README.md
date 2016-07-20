# 响应式介绍
## 什么是响应式
在各种各样的设备使用体验都还不错。体验包括：视觉体验和交互体验。

## 响应式的方法
* 某元素在大屏和小屏幕宽度不一样。比如，在大屏中宽度占屏幕宽度的四分之一，在小屏中显示 100%。
* 元素的显示和隐藏
* 不同设备加载不同尺寸的图片
* PC 页面用分页，手机用下拉加载下一页

## 技术手段
### 媒体查询

浏览器兼容性。repond.js

#### 移动设备优先
先写移动端的 CSS。PC 的 CSS 放在媒体查询中写

### 用 rem 做单位
元素的尺寸相关的都用 rem 来做单位。控制 html 的 字号大小与屏幕宽度有一个大概正比的关系。


用媒体查询。

用JS。

### 响应式图片
picture 元素