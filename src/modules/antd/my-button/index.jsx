import React, { Fragment, useState } from "react"
import { Button, Radio } from "antd"
import { CheckOutlined } from '@ant-design/icons';
import "./style.less"

function MyButton({ value, size }) {
    const [istag, setIsTag] = useState(false) //控制按钮左下角tag是否显示
    const onChange = (e, index) => {
        console.log(e, index)
    }
    return (
        <Fragment>
            <h1>Button组件</h1>
            <Button style={{ ...styles.btnStyle }} size={"larger"} onClick={() => { setIsTag(!istag) }}>
                {"按钮"}
                {istag ? <div style={{ ...styles.btnStyle.tagStyle }}> <CheckOutlined className="icon" style={{ ...styles.btnStyle.tagStyle.iconStyle }} /></div> : null}
            </Button>
            <Button size={"larger"} onClick={() => { setIsTag(!istag) }}>
                {"按钮style.less"}
                {istag ? <div className="btn-tag"> </div> : null}
            </Button>
            <hr />
            <Radio.Group defaultValue="a" onChange={onChange}>
                <Radio.Button value="a">左岸
                    {/* {istag ? null : <div className="btn-tag"> <CheckOutlined className="btn-icon" /></div>} */}
                </Radio.Button>
                <Radio.Button value="b">右岸
                    {/* {istag ? null : <div className="btn-tag"> <CheckOutlined className="btn-icon" /></div>} */}
                </Radio.Button>
            </Radio.Group>
        </Fragment>
    )
}


const styles = {
    btnStyle: {
        position: "relative",
        overflow: "hidden",
        tagStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            background: "#096dd9",
            transform: "translate(50%, 50%) rotate(135deg)",
            fontSize: ".8em",
            iconStyle: {
                position: "absolute",
                left: "50%",
                bottom: 0,
                transform: "translate(-50%, 0%) rotate(-135deg)",
                color: "#fff"
            }
        }
    },
}

export default MyButton