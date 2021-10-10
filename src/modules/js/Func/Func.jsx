import { useEffect } from "react"

/**
 * 语法解析(通篇扫描有无低级语法错误, 例如那里少了分号)
 * 预编译 
 *      1> 创建GO(Global Object)/AO对象(Active Object) 
 *         助理解：进入浏览器创建的是GO, 之后创建的函数执行创建的都是AO
 *      2> 找形参和变量声名，将变量和形参名作为AO属性名，值为undefind
 *      3> 将实参和形参相统一(实参值赋值给形参)
 *      4> 在函数体里面找函数声明，赋值予函数体
 *      助理解：预解析的详情讲解过程(函数整体提升, 变量声明提升)
 *             函数是整个函数提升上去, 即function test() {console.log(“a”) }整个函数都提升上去了包括console.log(“a”)  
 *             变量只是变量名提升上去了而变量值没提升上去， 即var a = 3只是将a提上去了, 3并没有提上去, 3后面一行一行执行赋值
 * 解释执行(解析一行执行一行)
 * 注意： 全局预编译 生成GO === window， 在全局预编译完成后进行全局的代码解释执行 只有在遇到函数调用的时候才会触发函数局部的预编译(AO)
 *   */

function Func() {
    useEffect(() => {
        console.log(
            `
          * 语法解析(通篇扫描有无低级语法错误, 例如那里少了分号)
          * 预编译 
          *      1> 创建GO(Global Object)/AO对象(Active Object) 
          *         助理解：进入浏览器创建的是GO, 之后创建的函数执行创建的都是AO
          *      2> 找形参和变量声名，将变量和形参名作为AO属性名，值为undefind
          *      3> 将实参和形参相统一(实参值赋值给形参)
          *      4> 在函数体里面找函数声明，赋值予函数体
          *      助理解：预解析的详情讲解过程(函数整体提升, 变量声明提升)
          *             函数是整个函数提升上去, 即function test() {console.log(“a”) }整个函数都提升上去了包括console.log(“a”)  
          *             变量只是变量名提升上去了而变量值没提升上去， 即var a = 3只是将a提上去了, 3并没有提上去, 3后面一行一行执行赋值
          * 解释执行(解析一行执行一行)
          * 注意： 全局预编译 生成GO === window， 在全局预编译完成后进行全局的代码解释执行 只有在遇到函数调用的时候才会触发函数局部的预编译(AO)
          *   */ 
          `
        )
    }, [])
    return (
        <>
            <h1>创建一个函数所做的事情</h1>
            <p>

            </p>
        </>
    )
}

export default Func