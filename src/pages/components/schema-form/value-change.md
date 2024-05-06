# 赋值变化

> 在很多情况下，我们可能需要对数据进行动态的赋值，但是赋值一般不会触发某个字段中的`onValueChange`方法，
> 在这种情况下，我们提供了一个绑定在`SchemaForm`上的事件来实现这个功能。


<demo src="./demos/value-change.vue" />