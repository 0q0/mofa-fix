Mofa Fix
========

当用鼠标滚动浏览页面中带滚动条的元素时，一旦该元素的滚动条滚到尽头，但用户仍在该元素上滚动鼠标滚轮，则该元素所在的页面也会开始滚动。使用该 jQuery 插件能够阻止这种行为，以获得更自然合理的浏览体验。

##Demo

[戳这里](http://0q0.github.io/mofa-fix)

## Quick start

(1) 为页面载入 [jQuery](http://jquery.com/) , [wheel.js](https://github.com/jquery/jquery-mousewheel) 和 mofafix.min.js。

(2) 对带滚动条的页面元素使用 mofabar() 方法：
```JavaScript
$(function () {
    $('.box-inside-scroll-and-outside-fix').mofafix();
});
```

##Browser support

已测试过的浏览器：IE8+, Chrome, Firefox, Opera

##License

Code released under the MIT license.
