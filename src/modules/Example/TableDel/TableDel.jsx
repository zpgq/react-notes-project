import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from "antd"

function TableDel() {
    const [tableData, setTableData] = useState([])//表单数据
    const [pageNum, setPageNum] = useState(1)
    const [pageSize, setPagesize] = useState(10) //每页条数
    const [total, setTotal] = useState(0)//数据总条数
    const titleSize = (num) => {
        const arr = []
        for (let i = 0; i < num; i++) {
            arr.push(
                {
                    key: `1-${i}`,
                    serial: i,
                    content: `主题内容${i}`
                }
            )
        }
        return arr
    }
    useEffect(() => {
        setPagesize(10)
        setTableData(titleSize(100))
        setTotal(50)
    }, [])
    const handleDele = (record) => {
        Modal.confirm({
            content: `您确定要删除 ${record.content} 吗`,
            closable: true,
            cancelText: "取消",
            okText: "确认",
            onOk() {
                const newArr = tableData.filter(item => {
                    return item.key !== record.key
                })
                setTableData(newArr)
            }
        });
    }
    const columns = [
        {
            title: "序号",
            dataIndex: "serial",
            align: "center",
        },
        {
            title: "主题",
            dataIndex: "content",
            align: "center",
        },
        {
            title: "操作",
            align: "center",
            render: (text, record) => (
                <Button onClick={() => { handleDele(record) }}>删除</Button>
            )

        }
    ]
    const pagination = {
        pageSize: pageSize,
        current: pageNum,
        total: total,
        onChange: (page) => {
            setPageNum(page);
        },
    }
    return (
        <div>
            <Table
                columns={columns}
                dataSource={tableData}
                pagination={pagination}
            >
            </Table>
        </div>
    )
}
export default TableDel