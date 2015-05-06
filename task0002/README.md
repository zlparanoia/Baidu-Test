﻿### task0002: js编程题
### 5-4:
    深度克隆：
值类型：数值，布尔值，null，undefined，String。值类型的变量直接保存变量值。一般是固定的字节大小。
引用类型：对象，数组，函数。保存引用，通过引用可找到存储内容的内存区域。往往存储数组，对象，函数这些很难知道占据内存大小的量。

值类型变量的交换等于分配了一块新的内存空间。改变新变量不影响旧变量。
引用类型变量的交换等于把地址复制的一遍，共用一个内存地址，因此改变变量的值会相互影响。

浅克隆：基本类型为值传递，引用类型为引用传递。
深度克隆：所有元素或属性完全克隆，修改新对象时不会影响到旧对象。

因为函数的克隆会在内存独立开辟一块空间，互不影响，因此函数的克隆通过浅克隆即可实现。

返回数据类型：Object.prototype.toString.call(o).slice(8，-1)。
### 5-5:
    Object.keys(obj):返回一个由给定对象的所有可枚举自身属性的属性名和方法的数组。