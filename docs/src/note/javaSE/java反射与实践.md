---
title: java反射与实践
outline: deep
---

# java反射
> 作者: 小王
> 
> 状态: 待补充
>
> :v::eyes::v:

## 基础认知

### class对象

**概述**

`Class`是一个`java`类, 位于`java.lang`包

这个类特殊的点在于: `java`中的每个类或接口都持有一个对应的`Class`类对象实例，由`JVM`创建

`Class`类对象实例持有与之对应的类的所有静态信息, 例如属性, 方法, 构造器信息等

**获取Class对象**

- 通过类的`class`属性

  ```java
  Class<Person> personClass = Person.class;
  ```

- 通过类实例的`getClass()`方法

  ```java
  Class<?> personClass = person.getClass();
  ```

- 通过`Class`类的`forName`方法构造一个`Class`对象实例

  ```java
  Class<Person> personClass clazz = Class.forName("com.origin.model.Person");
  ```



### class对象有什么用?

通过这个`class`对象我们可以获取与之对应的类的所有类信息, 例如:

- 获取本类的属性字段`Field`,通过`Field`可以获取该属性的类型, 名字, 值 

  ```java
  Field nameField = clazz.getDeclaredField("name");// 获取name属性
  String fieldName = nameField.getName();// 获取该属性的名字
  Class<?> fieldType = nameField.getType();// 获取该属性的类型
  nameField.get(person);// 获取该属性的值, 参数为具体的对象实例
  ```

- 获取本类的方法字段`method`, 通过`method`可以获取该方法的名字, 返回值, 参数等信息

  ```java
  Method speakMethod = clazz.getDeclaredMethod("speak", "Hi, there".getClass());
  String methodName = speakMethod.getName();// 获取方法名
  Class<?> methodReturnType = speakMethod.getReturnType();// 获取方法返回值的class对象
  ```

- 获取本类的构造器字段`Constructor`, 通过该字段可以实例化一个该类的对象

  ```java
  Constructor<?> constructor = clazz.getConstructor(String.class);
  Person person =(Person) constructor.newInstance("jack");// 通过Constructor实例化对象
  ```

> [!warning]
>
> **反射对封装性的破坏:**
>
> 通过反射我们可以直接获取到某个对象的私有属性, 例如:
>
> ```java
> Field f = clazz.getDeclaredField("privateField");// 获取某个private属性的字段对象
> f.setAccessible(true);// 设置为私有可访问
> Object o = staticField.get(person);// 直接获取到了某个对象实例的私有属性值 
> ```
>
> 







## 反射实践-动态代理

**代理是什么?**

代理是一种设计模式, java中实现代理模式的方式:

- 静态代理
- 动态代理
  - jdk动态代理(jdk内置的动态代理库)
  - cglib动态代理(第三方库)

这里我们先用静态代理的例子来理解一下代理模式是什么意思



**静态代理**

我们现在有一个接口及其实现类

```java
public interface UserService {
    public void addUser();
}

public class UserServiceImpl implements UserService{
    @Override
    public void addUser() {
        System.out.println("add user");
    }
}
```

现在我们希望在不改动源代码的情况下, 给这个`addUser`方法添加或删除一些功能

在这种情况下就可以使用代理设计模式, 代理模式的思路是：不直接通过`UserServiceImpl`对象实例来调用其方法，而是通过创建一个`UserService`类的代理类来调用其方法，并添加其他的业务代码

对于`UserServiceImpl`的代理类，我们让其也实现`UserService`接口，这样该代理类就有和目标类相同的方法，同时，在代理类中维护了一个目标类的对象引用，在创建代理类时，通过构造器给这个目标类的对象实例赋值，这样，代理类就有了一个目标类的对象实例，每次调用方法时，调用代理类的相应方法，在代理类的相应方法中通过目标类对象调用目标类的相应方法，同时，我们还可以额外添加一些新的业务代码。代理类的具体实现如下:

```java
public class UserServiceProxy implements Userservice{

    private Userservice userService;

    public UserServiceProxy(Userservice userService) {
        this.userService = userService;
    }

    @Override
    public void addUser() {
        System.out.println("在addUser执行前添加的逻辑");
        try {
            userService.addUser();
        } catch(Execption e) {
            System.out.println("在addUser发生异常时添加的逻辑");
        } finally {
            System.out.println("在addUser执行后添加的逻辑");
        }
    }
}
```

在实际调用时, 调用代理对象的对应方法

```java
UserService userService = new UserServiceImpl();
UserServiceProxy proxy = new UserServiceProxy(userService);
proxy.addUser();
```



这就是用静态代理的方式来实现代理模式, 静态代理存在的缺陷与限制:

- 被代理类必须要实现某一个接口
- 每一个被代理类都需要一个与之对应的代理类, 当有很多对象需要被代理时, 就需要编写很多的代理类对象



**JDK动态代理**

动态代理即通过java反射的动态性, 动态生成某个类的代理, 因而可以通过一个统一的代理类工厂来得到任意类的代理类

java中内置用于实现动态代理的类: `Proxy`

`Proxy`类的`newProxyInstance`静态方法可以返回一个指定类的代理类，需要传入该类的类加载器，该类实现的所有接口，以及一个监听器`InvocationHandler`，这个`InvocationHandler`是一个函数式接口, 在内部接口方法`invoke(Object proxy, Method method, Object[] args)`中我们可以添加我们希望的逻辑, 我们将这一系列方法封装成一个代理类生产工厂:

```java
public class ProxyFactory {
    public static Object getProxyInstance(Object obj) {
        return Proxy.newProxyInstance(obj.getClass().getClassLoader(),
                obj.getClass().getInterfaces(),
                (proxy, method, args) -> {
                    System.out.println("before");
                    Object result = method.invoke(obj, args);
                    System.out.println("after");
                    return result;
                });
    }
}
```

通过代理工厂类得到的代理对象来调用目标对象的方法，这里得到的代理对象`proxyInstance`的运行类型实际上是`proxy`，`proxy`对象维护了一个监听器，也就是上面传进去的`InvocationHandler`，每次通过代理对象调用方法时，会先进入监听器的`invoke`方法中，该方法的参数`method`就是此次的方法对象，`args`就是方法的参数，因此我们所添加的业务代码就可以写在`invoke`方法中

```java
UserServiceImpl userService = new UserServiceImpl();
UserService proxy = (UserService) ServiceProxy.getProxyInstance(userService);
proxyInstance.addUser();
```



动态代理的优势: 编写一次即可为任意类生成一个动态代理对象, 并且可作用于该类的所有方法

动态代理的缺陷与限制:需要被代理类实现某个接口

如果希望代理某个没有实现接口的类, 可以考虑使用`cglib`第三方库的动态代理



**CGLib动态代理**

待补充:punch:







## 反射实践-容器, 组件, 依赖注入

待补充:punch: