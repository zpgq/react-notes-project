import "./style.less"
/**
 * p:nth-of-child(1) 所有子元素为p的元素集合中 选中第一个p元素 
 * p:nth-child(1)   所有子元素集合中 判断第一个子元素是否为p元素
 *  */
function ChildSelector() {
    return (
        <>
            <div className="class-father">
                <div>div元素1</div>
                <p>p元素1</p>
                <p>p元素2</p>
                <p>p元素3</p>
            </div>
        </>
    )
}

export default ChildSelector