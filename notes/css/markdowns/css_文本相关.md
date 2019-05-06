# CSS 文字或文本设置

## 1.Css控制元素内文字长度，如果超出则替换...

> white-space: nowrap; 强制在一行内显示所有文本，不换行    
> text-overflow: ellipsis; CSS3新增属性;
>                clip 不显示省略标记...，而是简单的裁切;
>                ellipsis 当文本溢出时显示...;    
> overflow: hidden; 让多余文字在ff中隐藏

```css
.text {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```