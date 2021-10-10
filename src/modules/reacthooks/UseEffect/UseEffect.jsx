import React, { useState, useEffect } from "react"
import { Button } from "antd"
/**
  *useEffect相当于componentDidMount、componentDidUpdate、componentWillUnmount三个生命周期函数的集合
  * 第一个参数是 为一个函数
  *         1> 刚进入页面时, 触发一次这个函数(componentDidMount)
  *         2> 监听的东西发生变化时, 触发这个函数
  *     函数里面的return 
  *         1> 清除操作, 可以防止内存泄漏(用于清除副作用)
  * 第二个参数是 为一个数组或者无第二参数, 
  *         1> 数组为一个空数组时, 不会触发函数(第一个参数)   
  *         2> 数组里面有属性时, 【数组里面的属性发生变化】时触发函数(第一个参数)
  *         3> 无第二参数时, 【dom发生变化(componentDidUpdate)】时触发函数(第一个参数)  ===> 少用不需要监听属性也要添加个空数组, 防止过多触发useEffect
  * 注意 :useEffect依赖的属性尽可能简单，尽量不要依赖引用类型，如果依赖引用类型，该引用类型应该为不可变。	
  * componentDidMount    ===> 第一个参数
  * componentDidUpdate   ===> 第二个参数
  * componentWillUnmount ===> 第一个参数里的return
  *  */

function UseEffect() {
    const [count, setCount] = useState(0) //点击事件数
    const [num, setNum] = useState(0) //计时数
    useEffect(() => {
        console.log("【第二参数为count】, useEffect执行了")
    }, [count])
    useEffect(() => {
        console.log("【第二参数为空数组】, useEffect执行了")
        console.log(`
        /**
  *useEffect相当于componentDidMount、componentDidUpdate、componentWillUnmount三个生命周期函数的集合
  * 第一个参数是 为一个函数
  *         1> 刚进入页面时, 触发一次这个函数(componentDidMount)
  *         2> 监听的东西发生变化时, 触发这个函数
  *     函数里面的return 
  *         1> 清除操作, 可以防止内存泄漏(用于清除副作用)
  * 第二个参数是 为一个数组或者无第二参数, 
  *         1> 数组为一个空数组时, 不会触发函数(第一个参数)   
  *         2> 数组里面有属性时, 【数组里面的属性发生变化】时触发函数(第一个参数)
  *         3> 无第二参数时, 【dom发生变化(componentDidUpdate)】时触发函数(第一个参数)  ===> 少用不需要监听属性也要添加个空数组, 防止过多触发useEffect
  * 注意 :useEffect依赖的属性尽可能简单，尽量不要依赖引用类型，如果依赖引用类型，该引用类型应该为不可变。	
  * componentDidMount    ===> 第一个参数
  * componentDidUpdate   ===> 第二个参数
  * componentWillUnmount ===> 第一个参数里的return
  *  */
       `)
    }, [])
    useEffect(() => {
        console.log("【无第二参数】, useEffect执行了")
    })
    useEffect(() => {
        const timer = setInterval(() => {
            //setNum(num + 1)        ==> 使用一个变量会产生闭包 每隔一秒执行一次setNum(0+1), 永远也不会超过1
            //setNum(num => num + 1) ==>使用一个函数这样就不会依赖外部的"num"变量  
            setNum(num => num + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [])
    return (
        <>
            <h1>UseEffect</h1>
            <p>count的值为：{count}</p>
            <Button onClick={() => { setCount(count + 1) }} className="ant-btn">点击count+1</Button>
            <br />
            <p>num的值为： {num}</p>
        </>
    )
}

export default UseEffect

