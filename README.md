# Baidu-Test

### 4-27:完成task0001的练习题。
总结：虽然是基础知识，可还是有很多细节的知识没有掌握。当设置绝对定位后，再设置float属性会失效。绝对定位的优先级大于float属性。margin-left: 左外边距，元素向右移动。margin-right:右外边距，元素不移动，只是设置与下一个元素保持的距离。水平居中的两种方法：
1、margin：0 auto;
2、position: absolute;
     left: 50%;
     margin-left: -100px;(width:200px;)
文档流：从窗体自上而下分成一行一行，并在每行中按从左到右的顺序排放元素。

### 4-29:完成task0001任务的第一个主页面index。
总结：巩固了float浮动，position定位，水平居中、border-radius圆形头像知识，学到css3透明度颜色渐变新知识：-webkit-linear-gradient(top, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0) 100%); 这个页面主要是对html和css的巩固，相对来说是比较简单的，js还没有涉及到，可是还是有细节的东西需要注意，比如说每个小div宽度的计算、文本方面的排版等。用了两天时间是有点慢了，如果熟练的话几个小时的时间应该是可以完成的，所以感觉还是得多练，加快编码速度。


 ### 5-1:完成task0001的第二个页面。总结：遇到了浮动溢出问题，原先是用overflow：hidden属性清除浮动，后来发现会导致其他子元素的隐藏，后来换了另一种方法：添加空元素后添加clear: both属性，可出于性能优化方面，这个方法会造成html代码的冗余，于是在网上查了一下，最好的方法是给父容器添加clearfix后添加:after伪类，设置.clearfix:after{
  content: ""; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}
.clearfix {
zoom: 1; // 触发ie6的haslayout，因为ie6不支持：after伪类
}
