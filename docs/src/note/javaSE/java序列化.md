---
title: java序列化
outline: deep
---

# java序列化
> 作者: 小王
> 
> 状态: 稳定
>
> :v::eyes::v:

## 什么是序列化和反序列化

**序列化**: 将java对象转为字节流

**反序列化**: 将字节流重新转为java对象



## 涉及到的类

序列化: `ObjectOutputStream`

反序列化: `ObjectInputStream`





## 关键信息

### 序列化前提-Serializable

如果想要一个类可以被序列化, 那么这个类必须实现`Serializable`接口, 同时该类的所有属性字段也都必须是实现了`Serializable`接口的类(包括包装类)



### 排除字段-transient

如果不希望类的某个字段被序列化, 可以用`transient`关键字标记该字段

其次, static属性字段也不会被序列化



### 序列化方式-ObjectOutputStream

调用`objectOutputStream.writeObject(Object o);`方法将对象序列化为字节流, 该方法会序列化未被`transient`和`staic`修饰的属性字段



### 自定义序列化-writeObject

可以通过在需要序列化的类中定义`writeObject`方法来实现自定义序列化内容, 例如自定义`transient`字段的序列化方式

可以在该方法内部调用`defaultWriteObject`方法来序列化默认会被序列化的字段(实际上如果不写本方法,默认调用的就是`defaultWriteObject`方法来序列化), 然后对`transient`修饰的属性进行自定义序列化



### 序列化校验-serialVersionUID

- **`serialVersionUID`是什么?**

  当一个类实现了`Serializable`接口后, 默认会隐式拥有一个`serialVersionUID`字段, 该字段表示该类的版本,每当我们修改该类的属性结构, 例如添加, 删除一个属性, 该`serialVersionUID`的值都会改变

- **显式添加`serialVersionUID`的意义?**

  在不显示添加`serialVersionUID`的情况下, 假设一个A类可序列化,进行了若干次序列化后,给A类的代码定义中添加了一个属性字段,这时由于`serialVersionUID`值发生了变化, 反序列化就会失败

  显示添加`serialVersionUID`字段可以保证该字段值就是我们指定的值, 不会随着属性结构变化而变化, 以此保证反序列化的安全性

  

