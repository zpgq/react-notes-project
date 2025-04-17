import { useEffect } from "react";

function Prototype() {
  useEffect(() => {
    // Person.prototype.constructorPrototypeName = "这是【构造函数】【原型上】的name属性"
    // Person.constructorName = "这是【构造函数】【身上】的name属性"
    // Person.prototype.constructorPrototypeSayHi = function() {console.log("您好!我是【构造函数】【原型上】的SayHi方法")}
    // Person.constructorSayHi = function() {console.log("您好！我是【构造函数】【身上】的SayHi方法")}
    // function Person() {
    //     this.insideName = "这是函数里面的方法"
    //     this.insideSayHi = function () {
    //         console.log("你好！我是【构造函数】【里面】的方法")
    //     }
    // }
    // let person = new Person()
    //实例
    // console.log(person.constructorPrototypeName)
    // person.constructorPrototypeSayHi()
    // console.log(person.insideName)
    // person.insideSayHi()
    //构造函数
    // console.log(Person.constructorName)
    // Person.constructorSayHi()
    /**
     * 1. 实例能访问构造函数上原型的方法和属性, 也能访问构造函数里面this.属性, this.方法
     * 2. 构造函数只能访问构造函数本身的属性和方法, 无法访问构造函数里面的方法
     * 3. 实例本身==》实例原型【沿着__proto__】==》构造函数原型==》...Object
     *  */
    // class Person {
    //     constructor() {
    //         this.insideName = "这是constructor里面的方法"  //相当于function Person() {this.insideName = "这是constructor里面的方法"}
    //     }
    //     age = 18   // 相当于实例上的属性
    //     sayHi() {}  // 相当于原型上的方法但不高亮
    //     static outSideName = "这是外面的方法"   //相当于Person.outSideName = "这是外面的方法"
    // }
    // let person = new Person()
    // console.log(person)
    // console.log(Person.outSideName)

    //继承
    // class Person {
    //     constructor() {
    //         this.insideName = "这是constructor里面的方法"  //相当于function Person() {this.insideName = "这是constructor里面的方法"}
    //     }
    //     age = 18   // 相当于实例上的属性
    //     sayHi() {}  // 相当于原型上的方法但不高亮
    //     static outSideName = "这是外面的方法"   //相当于Person.outSideName = "这是外面的方法"
    // }
    // class Son extends Person {
    //     sonPrototypeName = "这是son函数的name属性"
    // }
    // const son = new Son()
    // console.log(son.age) //能访问到
    // console.log(son.insideName) //能访问到
    // console.log(son.outSideName) //无法访问到
    // console.log(son)
    // 圣杯继承(与extends关键字继承比较, 使用圣杯模式无法继承Person实例上的属性)
    function F() {}
    function Person() {
      this.insideName = "实例属性";
    }
    Person.prototype.age = 18; // 相当于实例上的属性
    Person.prototype.sayHi = function () {
      console.log("这是原型上的方法");
    };
    function Son() {}
    F.prototype = Person.prototype;
    Son.prototype = new F();
    const son = new Son();
    console.log(son.age);

  }, []);
  return <h1>原型继承</h1>;
}

export default Prototype;
