import { useState, useMemo } from "react"
import ChildComponent from "./ChildComponent"
/**
 * ##useMemo
 * 概念：用于优化性能减少重新渲染次数, 当依赖(第二参数)发生变化时才重新渲染, 侧重的是属性值
 * 第一参数 "创建"函数, 为一个函数, 计算其值, 返回结果
 * 第二参数 依赖项数组, 为一个数组或者空值
 *      1> 数组里面放值时, 当数组里面的值发生改变(setState)时才会重新计算, 即值改变才触发第一参数
 *      2> 为一个空数组时, 不会重新计算, 即不会触发第一参数
 *      3> 空值时 无论什么值(setState)改变都会重新计算, 即无论什么值发生改变都会触发第一参数
 * 注意：依赖项数组不会作为参数传给“创建”函数。所有“创建”函数中引用的值都应该出现在依赖项数组中, 否则可能计算的是setState之前的值导致计算结果错误
 * 
 * ##React.memo(子组件)
 * 传递过来的props发生改变时才重新渲染子组件
 *   */
function UseMemo() {
    const [count, setCount] = useState(0)  //父组件点击次数
    const [childCount, setChildCount] = useState(0) //子组件点击次数
    const memoValue = useMemo(() => { return count * 10 }, [count])
    return (
        <>
            <p>父元素: {memoValue}</p>
            <button onClick={() => { setCount(count + 1) }}>add count</button>
            <ChildComponent value={childCount} />
            <button onClick={() => { setChildCount(childCount + 1) }}>add childCount</button>
        </>
    )
}

export default UseMemo