### 5-27:
bug1: i、len重复定义。js没有块级作用域。
bug2: 把收放的click绑在li上面，由于li包含子元素ul，点击子元素ul也会执行收放。应该绑在a
      上，再判断a的下一个元素是不是ul来判断有没有子列表。
bug3: for循环的length使用先前定义的，长度改变之后变量没变导致空值。
      每使用for的length重新定义，以免混乱。
bug4：在把name赋给a的innerHTML之前添加子元素，会把子元素覆盖掉。应该在执行innerHTML之后添加。
bug5: 鼠标放在元素上时img会闪烁。因为：mouseout鼠标位于一个元素的上方，然后用户将其移入另一个元素时触发，这个
      元素可能是它的子元素，所以当鼠标放在元素上时img即显示又隐藏，因此会闪烁。
bug6: 同时给元素和document添加点击事件，元素会冒泡到document元素，执行document的事件函数，覆盖掉元素的事件函数。
bug7: 鼠标左键event.button == 0。右键：2，中间键1。