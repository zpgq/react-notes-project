import React from 'react'
// import checkSrc from '../../assets/images/check.png'
function ZhButtonSelect({ btnText, selected = false, onClick }) {
    const publicStyle = {
        position: "relative",
        overflow: "hidden",
        height: 30,
        lineHeight: 1.2715,
        fontWeight: 400,
        whiteSpace: "nowrap",
        textAlign: "center",
        border: "1px solid transparent",
        cursor: "pointer",
        userSelect: "none",
        touchAction: "manipulation",
        padding: "4px  15px",
        borderRadius: "4px",
        color: "#666",
    }
    let btnStyle = {};
    if (selected) {
        console.log("a")
        btnStyle = {
            ...publicStyle,
            // background: `#fff url(${checkSrc}) no-repeat  bottom right`,
            borderColor: "#2f88a7",
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
                    display: "table",
                    width: "5%",
                    height: "40%",
                    border: "1px solid #fff",
                    borderTop: 0,
                    borderLeft: 0,
                    transform: "rotate(270deg) scale(1) translate(-40%, -25%)",
                    opacity: 1,
                    transition: "all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s",

                    // position: "absolute",
                    // left: "50%",
                    // bottom: 0,
                    // transform: "translate(-50%, 0%) rotate(-135deg)",
                    // color: "#fff",
                }
            }

        }
    } else {
        btnStyle = {
            ...publicStyle,
            borderColor: "#d9d9d9",
            background: "#fff",
            backgroundImage: "none"
        }
    }
    return (
        <button style={btnStyle} onClick={onClick}>
            {btnText} {selected ? <div style={{ ...btnStyle.tagStyle }}> <span style={{ ...btnStyle.tagStyle.iconStyle }}></span> </div> : null}
            {/* {btnText} {selected ? <div style={{ ...btnStyle.tagStyle }}> <span style={{ ...btnStyle.tagStyle.iconStyle }}></span> </div> : null} */}
        </button>
    )
}
export default ZhButtonSelect
