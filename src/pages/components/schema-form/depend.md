# 表单项关联

在开发表单的过程中避免不了会使用到表单项关联的情况，所以我们提供了一套实现表单联动的方案给大家作为参考。

## 代码演示

<demo src="./demos/depend.vue" link="/components/schema-form/demos/depend" />

<demo src="./demos/depend-event.vue" link="/components/schema-form/demos/depend-event" />

## API

### 关联事件参数

`onDepend`中的事件参数值。

| 属性名   | 描述                       |
| -------- | -------------------------- |
| `value`  | 触发`onDenped`发生变化的值 |
| `model`  | 当前整个`model`项的值      |
| `schema` | 当前表单项的`schema`       |

### 关联操作参数

这是`onDepend`中的第二个参数。

| 属性名             | 描述                           | 类型                                    |
| ------------------ | ------------------------------ | --------------------------------------- |
| `resetFields`      | 重置表单项同`AForm`            |                                         |
| `clearValidate`    | 清空验证条件同`AForm`          |                                         |
| `validate`         | 验证所有表单项同`AForm`        |                                         |
| `setFieldsValue`   | 设置多个表单项的值             | `(values: Record<string, any>)=>void`   |
| `setFieldValue`    | 设置单个表单项的值             | `(name: DataIndex, value: any) => void` |
| `getFormData`      | 获取表单项的值（非响应式的值） | `()=>Record<string,any>`                |
| `clear`            | 清空当前表单项的值             | `() => void`                            |
| `setValue`         | 设置当前表单项的值             | `(value: any) => void`                  |
| `clearCurValidate` | 清空当前表单项的校验           | `() => void`                            |
| `validateCur`      | 校验当前表单项                 | ` () => Promise<any>`                   |
