import { useState } from "react"
import { Button } from "antd"
import ZhExportSelectDikeFields from "./components/ZhExportSelectDikeFields"

function Export() {
    const [visible, setVisible] = useState(false)
    function handExportBtn() {
        setVisible(true)
    }
    return (
        <>
            <h1>导出信息页面</h1>
            <Button onClick={handExportBtn}>导出信息</Button>
            <ZhExportSelectDikeFields visible={visible} onOk={(value) => { console.log(value) }} onClose={() => { setVisible(false) }}></ZhExportSelectDikeFields>
        </>
    )
}

export default Export