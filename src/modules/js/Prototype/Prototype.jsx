import { useEffect } from "react"

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
        //     age = 18   //相当于Person.prototype.age = 18
        //     static outSideName = "这是外面的方法"   //相当于Person.outSideName = "这是外面的方法"
        // }
        // let person = new Person()
        // console.log(person.insideName)
        // console.log(Person.outSideName)
        //继承
        class Father{
            constructor() {
                this.insideName = "这是father函数【里面】的name属性"
            }
            fatherProtorypeName = "这是father函数【原型】【身上】的name属性"
            static fatherOutsideNam = "这是Father.fatherOutside属性"
        }
        class Son extends Father {
            sonPrototypeName = "这是son函数【原型】【身上】的name属性"
        }
        const son = new Son()
        console.log(son.fatherProtorypeName) //能访问到
        console.log(son.insideName) //无法访问到
        console.log(son.fatherOutsideNam) //无法访问到
        console.log(son)
        /**
         * 能继承的属性和方法有 
         * 1. 原型上的 === class { 属性方法==> name="1" }   
         * 2. this.上的 === class constructor() {this.属性方法 => this.name = "name"}
          */
        // Father.prototype.prototypeNmae = "这是father上原型的属性"
        // function Father() {
        //     this.fatherName = "这是father上的name属性"
        // }
        // // function Son() {
        // //     this.sonName = "这是son上的name属性"
        // // }
        // var fa = new Father()
        // console.log(fa)

    }, [])
    return (
        <h1>原型继承</h1>
    )
}

export default Prototype