# CSS面试题

### CSS选择器的优先级是如何计算的？

    浏览器通过优先级规则，判断元素展示哪些样式。优先级通过四个维度指标来确定，我们假定以a,b,c,d命名，分别代表以下含义：

1. a

### 清除浮动

* 空`div`方法：`<div style="clear: both;"></div>`
* clearfix方法：
    .clearfix::after: {clear: both; content: ''; display: block;};
* overflow: auto或overflow: hidden;方法

### 雪碧图

    雪碧图是把多张图片整合到一张上的图片，它被运用在使用了很多小图标的网站上。实现方法：

1. 使用生成器将多张图片打包成一张雪碧图，并为其生成合适的css
2. 每张图片都有相应的css类，该类定义了`background-image`,`background-position`,`background-size`属性
3. 使用图片时，将相应的类添加到你的元素

* 减少加载多张图片的HTTP请求数（一张雪碧图只需要一个请求）
* 提前加载资源，防止在需要时才开始下载引发的问题，比如只出现：hover伪类的图片，不会出现闪烁

### 使用css预处理的优缺点分别是什么？

优点：

* 提高CSS可维护性
* 易于编写嵌套选择器
* 引入变量，增添主题功能。可以在不同项目中共享主题文件
* 通过混合（mixins）生成重复的CSS

缺点：

* 需要预处理工具
* 重新编译的时间可能会很慢

### 响应式设计与自适应设计有何不同？

响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小，分辨率，使用环境和控制方式等参数进行优化调整。

响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果，响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。

自适应设计更像是渐进式增强的现代解释。与响应式设计单一地适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然受根据不同的篮筐大小，去选择最合适的一个。

### 什么情况下，用translate()而不用绝对定位？什么时候，情况相反。

`translate()是transform`的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会出发复合（compositions）/而绝对定位会触发reflow，进而触发repaint和compositions。`transform`使浏览器为元素创建一个GPU图层，但改变绝对定位会使用到GPU。因此`transform`更高效，可以缩短平滑动画的绘制时间。

当使用`translate()`时，元素仍然占据其原始空间，这与改变相对定位不同。

### CSS中link和@import的区别

* link属于HTML标签，而@import是CSS提供的
* 页面被加载的时候，link会同时被加载，而@import引用CSS会等到页面被加载完再加载
* import只在IE5上才能识别，而link是HTML标签，无兼容问题
* link方式的样式的权重高于@import的权重

### 文本超出部分显示省略号

**单行**

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

**多行**

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; // 最多显示几行
overflow： hidden;
```