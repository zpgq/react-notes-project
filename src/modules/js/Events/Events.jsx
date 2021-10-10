function Event() {
    const onWrap = () => {
        console.log("点击了wrap")
    }
    const onContain = () => {
        console.log("点击了contain")
    }
    const onButton = (event) => {
        console.log("点击了button")
       //阻止冒泡事件 ==> 会阻止事件往上冒泡
        event.stopPropagation()
    }
    const onA = (event) => {
        console.log("点击了a标签")
        //阻止默认事件 ==> 会阻止绑定的默认事件  如a标签跳转
        event.preventDefault()
    }
    return (
        <>
            <h1>事件代理及捕获冒泡</h1>
            <div className="event-wrap" onClick={onWrap}>
                <div className="evnt-contain" onClick={onContain} style={{width: '100px', height: '100px', background: '#eee'}}>
                    <button onClick={onButton}>按钮</button>
                    <br />
                    <a href="www.baidu.com" onClick={onA}>百度</a>
                </div>
            </div>
        </>
    )
}

export default Event