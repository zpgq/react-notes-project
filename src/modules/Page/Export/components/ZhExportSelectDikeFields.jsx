import React, { useState } from 'react';
import includes from 'lodash/includes';
import remove from 'lodash/remove';
import unionBy from 'lodash/unionBy';
import intersection from 'lodash/intersection';
import xor from 'lodash/xor';
import { Modal, Checkbox, Space } from 'antd';
import ZhButtonSelect from './ZhButtonSelect';
const gapProps = {
    size: "middle",
    style: { marginTop: 20 }
}
function ZhExportSelectDikeFields({ visible = false, onOk, onClose }) {
    const [selectedFields, setSelectedFields] = useState([]);//选中的字段
    const [allIndeterminate, setAllIndeterminate] = useState(false);//全选checkbox样式控制
    const [checkAll, setCheckAll] = useState(false);// 控制全选按钮的checkbox样式
    const [baseIndeterminate, setBaseIndeterminate] = useState(false);//工程基础信息全选样式控制
    const [baseCheckAll, setBaseCheckAll] = useState(false);//工程基础信息全选控制
    const [manageIndeterminate, setManageIndeterminate] = useState(false);//管理信息全选样式控制
    const [manageCheckAll, setManageCheckAll] = useState(false);//管理信息全选控制
    const wagaValue = ["wagaName", "wagaCode",
        "wagaAreaLoc",
        "wagaGeom",
        "wagaLoc",
        "rvCode",
        "dikeCode",
        "dikeCode",
        "rvCode",
        "fsdaDkCode",
        "irrCode",
        "walgArea",
        "wadiCode",
        "otherName",
        "engStat",
        "startDate",
        "compDate",
        "compAcceptStat",
        "compAcceptDate",
        "recCompReinStat",
        "recCompReinDate",
        "higeProject",
        "ancBuild",
        "wagaSta",
        "wagaSle",
        "auxGaorNum",
        "auxGaorTotNetWid",
        "damSizeHig",
        "damSizeLen",
        "shipLockLevel",
        "wagaType",
        "desFlow",
        "chFlow",
        "hisMaxFlow",
        "hisMaxFlowDate",
        "engScal",
        "mainBuildGrad",
        "desStaRetPer",
        "chStaRetPer",
        "desSeisInten",
        "gaorNum",
        "gaorTotNetWid",
        "wagaStyle",
        "structrue",
        "hoistNum",
        "hoist",
        "energy",
        "wagaMonitor",
        "automatic"
    ]
    const basicFields = [ ...wagaValue, "dikeName", "dikeCode", "startLoc", "endLoc", "dikeGeom", "dikeStartNum", "dikeEndNum", "dikeType", "rvCode", "rvBank", "lkCode", "isFsda", "fsdaDkCode", "crOverType", "dikePatt", "engStat", "startDate", "compDate", "lastCompStatRein", "lastReinCompleteDate", "engTask", "dikeGrad", "reapPeri", "dikeLength", "stanDikeLength", "desginStage", "elevSys", "startDikeTopEl", "endDikeTopEl", "dikeHeigMax", "dikeHeigMin", "dikeTopWidMax", "dikeTopWidMin", "wagaNum", "pipeNum", "pumpNum", "insiNum",]

    const manageFields = ["manageUnit", "manageUnitType", "manageUnitOwn", "manageUnitPer", "manageUnitPerPost", "manageUnitPerPh", "mainUnit", "mainUnitType", "mainUnitPer", "mainUnitPerPost", "mainUnitPerPh", "admDep", "pervFlAdmPer", "pervFlAdmPost", "pervFlAdmPh", "manaAreaDeli", "manaAreaDeliDate", "manaAreaConf", "manaAreaConfDate", "proAreaDeli", "proAreaDeliDate", "dikeMonitor"]
    function onChange(e) {
        setAllIndeterminate(false);
        setCheckAll(e.target.checked)
        setBaseCheckAll(e.target.checked);
        setManageCheckAll(e.target.checked)
        if (e.target.checked) {
            setSelectedFields(
                [...wagaValue, "dikeName", "dikeCode", "startLoc", "endLoc", "dikeGeom", "dikeStartNum", "dikeEndNum", "dikeType", "rvCode", "rvBank", "lkCode", "isFsda", "fsdaDkCode", "crOverType", "dikePatt", "engStat", "startDate", "compDate", "lastCompStatRein", "lastReinCompleteDate", "engTask", "dikeGrad", "reapPeri", "dikeLength", "stanDikeLength", "desginStage", "elevSys", "startDikeTopEl", "endDikeTopEl", "dikeHeigMax", "dikeHeigMin", "dikeTopWidMax", "dikeTopWidMin", "wagaNum", "pipeNum", "pumpNum", "insiNum", "manageUnit", "manageUnitType", "manageUnitOwn", "manageUnitPer", "manageUnitPerPost", "manageUnitPerPh", "mainUnit", "mainUnitType", "mainUnitPer", "mainUnitPerPost", "mainUnitPerPh", "admDep", "pervFlAdmPer", "pervFlAdmPost", "pervFlAdmPh", "manaAreaDeli", "manaAreaDeliDate", "manaAreaConf", "manaAreaConfDate", "proAreaDeli", "proAreaDeliDate", "dikeMonitor"]
                )
        } else {
            setSelectedFields([])
        }
    }
    function handleClick(field) {
        const newSelectedFields = [...selectedFields];
        if (includes(newSelectedFields, field)) {
            remove(newSelectedFields, function (n) {
                return n === field
            })
        } else {
            newSelectedFields.push(field);
        }
        //处理全选checkbox样式
        setAllIndeterminate(newSelectedFields.length > 0 && newSelectedFields.length < 59);
        //工程基础信息样式控制
        const baseInterFields = intersection(newSelectedFields, basicFields)
        setBaseIndeterminate(baseInterFields.length > 0 && baseInterFields.length < 37);
        setBaseCheckAll(baseInterFields.length === 37)
        //管理信息样式控制
        const manageInterFields = intersection(newSelectedFields, manageFields)
        setManageIndeterminate(manageInterFields.length > 0 && manageInterFields.length < 22)
        setManageCheckAll(manageInterFields.length === 22)
        //全部样式控制
        setCheckAll(newSelectedFields.length === 59)
        setSelectedFields([...newSelectedFields])
    }
    function onBasicChange(e) {//全选基础信息处理逻辑
        const newSelectedFields = [...selectedFields];
        setBaseCheckAll(e.target.checked);
        setBaseIndeterminate(false)
        if (e.target.checked) {
            let unionFileds = unionBy(newSelectedFields, basicFields)//合并两个数组，并去重
            setSelectedFields(unionFileds);
            setAllIndeterminate(unionFileds.length > 0 && unionFileds.length < 59);
            setCheckAll(unionFileds.length === 59);
        } else {
            const intersectionFields = intersection(newSelectedFields, basicFields);//取出两个数组中的交集
            const xorFields = xor(newSelectedFields, intersectionFields)//再去掉交集中的部分
            setSelectedFields(xorFields);
            setAllIndeterminate(!(xorFields.length === 0));
            setCheckAll(false);
        }
    }
    function onManageChange(e) {
        const newSelectedFields = [...selectedFields];
        setManageCheckAll(e.target.checked);
        setManageIndeterminate(false);
        if (e.target.checked) {
            let unionFileds = unionBy(newSelectedFields, manageFields)//合并两个数组，并去重
            setSelectedFields(unionFileds);
            setAllIndeterminate(unionFileds.length > 0 && unionFileds.length < 59);
            setCheckAll(unionFileds.length === 59);
        } else {
            const intersectionFields = intersection(newSelectedFields, manageFields);//取出两个数组中的交集
            const xorFields = xor(newSelectedFields, intersectionFields)//再去掉交集中的部分
            setSelectedFields(xorFields);
            setAllIndeterminate(!(xorFields.length === 0));
            setCheckAll(false);
        }

    }
    function handleOk() {
        onOk(selectedFields)
    }
    return (
        <Modal
            title="请选择导出字段"
            className="zh-modal-form"
            visible={visible}
            width={1020}
            style={{ marginTop: -30 }}
            bodyStyle={{ height: "76vh", overflowY: "auto" }}
            onCancel={onClose}
            destroyOnClose
            onOk={handleOk}
            okButtonProps={{ className: "zh-export-btn" }}
        >
            <div style={{ padding: "12px 24px" }}>
                <div>
                    <Checkbox
                        indeterminate={allIndeterminate}
                        onChange={onChange}
                        checked={checkAll}
                    >
                        <span style={{ color: "#333" }}>全选</span>
                    </Checkbox>
                </div>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ marginTop: 24 }}>
                        <Checkbox
                            indeterminate={baseIndeterminate}
                            onChange={onBasicChange}
                            checked={baseCheckAll}
                        >
                            <span style={{ color: "#333" }}>工程基础信息</span>
                        </Checkbox>
                    </div>

                    <Space wrap size="middle" style={{ marginTop: 20 }}>
                        <ZhButtonSelect btnText="水闸名称" selected={includes(selectedFields, "wagaName")} onClick={() => { handleClick("wagaName") }} />
                        <ZhButtonSelect btnText="水闸编码" selected={includes(selectedFields, "wagaCode")} onClick={() => { handleClick("wagaCode") }} />
                        <ZhButtonSelect btnText="所在行政区划" selected={includes(selectedFields, "wagaAreaLoc")} onClick={() => { handleClick("wagaAreaLoc") }} />
                        <ZhButtonSelect btnText="水闸坐标" selected={includes(selectedFields, "wagaGeom")} onClick={() => { handleClick("wagaGeom") }} />
                        <ZhButtonSelect btnText="所在位置（可多选）" selected={includes(selectedFields, "wagaLoc")} onClick={() => { handleClick("wagaLoc") }} />
                        <ZhButtonSelect btnText="所在河流名称" selected={includes(selectedFields, "rvCode")} onClick={() => { handleClick("rvCode") }} />
                        <ZhButtonSelect btnText="所在河堤名称" selected={includes(selectedFields, "dikeCode")} onClick={() => { handleClick("dikeCode") }} />
                        <ZhButtonSelect btnText="所在湖堤名称" selected={includes(selectedFields, "dikeCode")} onClick={() => { handleClick("dikeCode") }} />
                        <ZhButtonSelect btnText="库区所在河流名称" selected={includes(selectedFields, "rvCode")} onClick={() => { handleClick("rvCode") }} />
                        <ZhButtonSelect btnText="所在蓄滞洪区名称" selected={includes(selectedFields, "fsdaDkCode")} onClick={() => { handleClick("fsdaDkCode") }} />
                        <ZhButtonSelect btnText="所在灌区名称" selected={includes(selectedFields, "irrCode")} onClick={() => { handleClick("irrCode") }} />
                        <ZhButtonSelect btnText="所在涝区名称" selected={includes(selectedFields, "walgArea")} onClick={() => { handleClick("walgArea") }} />
                        <ZhButtonSelect btnText="所在引调水工程名称" selected={includes(selectedFields, "wadiCode")} onClick={() => { handleClick("wadiCode") }} />
                        <ZhButtonSelect btnText="其他位置名称" selected={includes(selectedFields, "otherName")} onClick={() => { handleClick("otherName") }} />
                        <ZhButtonSelect btnText="工程建设情况" selected={includes(selectedFields, "engStat")} onClick={() => { handleClick("engStat") }} />
                        <ZhButtonSelect btnText="开工时间" selected={includes(selectedFields, "startDate")} onClick={() => { handleClick("startDate") }} />

                        <ZhButtonSelect btnText="建成时间" selected={includes(selectedFields, "compDate")} onClick={() => { handleClick("compDate") }} />
                        <ZhButtonSelect btnText="竣工验收情况" selected={includes(selectedFields, "compAcceptStat")} onClick={() => { handleClick("compAcceptStat") }} />
                        <ZhButtonSelect btnText="竣工验收时间" selected={includes(selectedFields, "compAcceptDate")} onClick={() => { handleClick("compAcceptDate") }} />
                        <ZhButtonSelect btnText="最近除险加固情况" selected={includes(selectedFields, "recCompReinStat")} onClick={() => { handleClick("recCompReinStat") }} />
                        <ZhButtonSelect btnText="最近除险加固完工时间" selected={includes(selectedFields, "recCompReinDate")} onClick={() => { handleClick("recCompReinDate") }} />
                        <ZhButtonSelect btnText="是否为枢纽工程" selected={includes(selectedFields, "higeProject")} onClick={() => { handleClick("higeProject") }} />
                        <ZhButtonSelect btnText="附属建筑物（可多选）" selected={includes(selectedFields, "ancBuild")} onClick={() => { handleClick("ancBuild") }} />
                        <ZhButtonSelect btnText="是否为闸站工程" selected={includes(selectedFields, "wagaSta")} onClick={() => { handleClick("wagaSta") }} />
                        <ZhButtonSelect btnText="是否为套闸工程" selected={includes(selectedFields, "wagaSle")} onClick={() => { handleClick("wagaSle") }} />
                        <ZhButtonSelect btnText="副闸闸孔数量（孔）" selected={includes(selectedFields, "auxGaorNum")} onClick={() => { handleClick("auxGaorNum") }} />
                        <ZhButtonSelect btnText="副闸闸孔总净宽(m)" selected={includes(selectedFields, "auxGaorTotNetWid")} onClick={() => { handleClick("auxGaorTotNetWid") }} />
                        <ZhButtonSelect btnText="坝高（m）" selected={includes(selectedFields, "damSizeHig")} onClick={() => { handleClick("damSizeHig") }} />
                        <ZhButtonSelect btnText="坝长（m）" selected={includes(selectedFields, "damSizeLen")} onClick={() => { handleClick("damSizeLen") }} />
                        <ZhButtonSelect btnText="船闸等级" selected={includes(selectedFields, "shipLockLevel")} onClick={() => { handleClick("shipLockLevel") }} />

                        <ZhButtonSelect btnText="水闸类型" selected={includes(selectedFields, "wagaType")} onClick={() => { handleClick("wagaType") }} />
                        <ZhButtonSelect btnText="设计过闸流量（m³/s）" selected={includes(selectedFields, "desFlow")} onClick={() => { handleClick("desFlow") }} />
                        <ZhButtonSelect btnText="校核过闸流量（m³/s）" selected={includes(selectedFields, "chFlow")} onClick={() => { handleClick("chFlow") }} />
                        <ZhButtonSelect btnText="历史最大过闸流量（m³/s）" selected={includes(selectedFields, "hisMaxFlow")} onClick={() => { handleClick("hisMaxFlow") }} />
                        <ZhButtonSelect btnText="历史最大过闸流量日期" selected={includes(selectedFields, "hisMaxFlowDate")} onClick={() => { handleClick("hisMaxFlowDate") }} />
                        <ZhButtonSelect btnText="工程规模" selected={includes(selectedFields, "engScal")} onClick={() => { handleClick("engScal") }} />
                        <ZhButtonSelect btnText="建筑物级别" selected={includes(selectedFields, "mainBuildGrad")} onClick={() => { handleClick("mainBuildGrad") }} />
                        <ZhButtonSelect btnText="设计标准[重现期（年）]" selected={includes(selectedFields, "desStaRetPer")} onClick={() => { handleClick("desStaRetPer") }} />
                        <ZhButtonSelect btnText="校核标准[重现期（年）]" selected={includes(selectedFields, "chStaRetPer")} onClick={() => { handleClick("chStaRetPer") }} />
                        <ZhButtonSelect btnText="设计地震烈度" selected={includes(selectedFields, "desSeisInten")} onClick={() => { handleClick("desSeisInten") }} />
                        <ZhButtonSelect btnText="闸孔数量（孔）" selected={includes(selectedFields, "gaorNum")} onClick={() => { handleClick("gaorNum") }} />
                        <ZhButtonSelect btnText="闸孔总净宽(m)" selected={includes(selectedFields, "gaorTotNetWid")} onClick={() => { handleClick("gaorTotNetWid") }} />
                        <ZhButtonSelect btnText="闸门型式（可多选）" selected={includes(selectedFields, "wagaStyle")} onClick={() => { handleClick("wagaStyle") }} />
                        <ZhButtonSelect btnText="闸室结构（可多选）" selected={includes(selectedFields, "structrue")} onClick={() => { handleClick("structrue") }} />
                        <ZhButtonSelect btnText="启闭机数量(台)" selected={includes(selectedFields, "hoistNum")} onClick={() => { handleClick("hoistNum") }} />
                        <ZhButtonSelect btnText="启闭机形式（可多选）" selected={includes(selectedFields, "hoist")} onClick={() => { handleClick("hoist") }} />
                        <ZhButtonSelect btnText="消能方式（可多选）" selected={includes(selectedFields, "energy")} onClick={() => { handleClick("energy") }} />
                        <ZhButtonSelect btnText="观测项目（可多选）" selected={includes(selectedFields, "wagaMonitor")} onClick={() => { handleClick("wagaMonitor") }} />
                        <ZhButtonSelect btnText="自动化控制（可多选）" selected={includes(selectedFields, "automatic")} onClick={() => { handleClick("automatic") }} />
                    </Space>

                    <div style={{ marginTop: "24px" }}>
                        <Checkbox
                            indeterminate={manageIndeterminate}
                            onChange={onManageChange}
                            checked={manageCheckAll}
                        >
                            <span style={{ color: "#333" }}>管理信息</span>
                        </Checkbox>
                    </div>
                    <Space {...gapProps}>
                        <ZhButtonSelect btnText="工程管理单位" selected={includes(selectedFields, "manageUnit")} onClick={() => { handleClick("manageUnit") }} />
                        <ZhButtonSelect btnText="工程管理单位性质" selected={includes(selectedFields, "manageUnitType")} onClick={() => { handleClick("manageUnitType") }} />
                        <ZhButtonSelect btnText="工程管理单位权属" selected={includes(selectedFields, "manageUnitOwn")} onClick={() => { handleClick("manageUnitOwn") }} />
                        <ZhButtonSelect btnText="工程管理单位责任人" selected={includes(selectedFields, "manageUnitPer")} onClick={() => { handleClick("manageUnitPer") }} />
                        <ZhButtonSelect btnText="工程管理单位责任人职务" selected={includes(selectedFields, "manageUnitPerPost")} onClick={() => { handleClick("manageUnitPerPost") }} />
                    </Space>
                    <Space  {...gapProps}>
                        <ZhButtonSelect btnText="工程管理单位责任人手机号码" selected={includes(selectedFields, "manageUnitPerPh")} onClick={() => { handleClick("manageUnitPerPh") }} />
                    </Space>
                    <Space  {...gapProps}>
                        <ZhButtonSelect btnText="水行政主管部门" selected={includes(selectedFields, "mainUnit")} onClick={() => { handleClick("mainUnit") }} />
                        <ZhButtonSelect btnText="水行政主管部门性质" selected={includes(selectedFields, "mainUnitType")} onClick={() => { handleClick("mainUnitType") }} />
                        <ZhButtonSelect btnText="水行政主管部门责任人" selected={includes(selectedFields, "mainUnitPer")} onClick={() => { handleClick("mainUnitPer") }} />
                        <ZhButtonSelect btnText="水行政主管部门责任人职务" selected={includes(selectedFields, "mainUnitPerPost")} onClick={() => { handleClick("mainUnitPerPost") }} />
                    </Space>
                    <Space  {...gapProps}>
                        <ZhButtonSelect btnText="水行政主管部门责任人手机号码" selected={includes(selectedFields, "mainUnitPerPh")} onClick={() => { handleClick("mainUnitPerPh") }} />
                        <ZhButtonSelect btnText="行业归口管理部门" selected={includes(selectedFields, "admDep")} onClick={() => { handleClick("admDep") }} />
                    </Space>
                    <Space  {...gapProps}>
                        <ZhButtonSelect btnText="防汛行政责任人" selected={includes(selectedFields, "pervFlAdmPer")} onClick={() => { handleClick("pervFlAdmPer") }} />
                        <ZhButtonSelect btnText="防汛行政责任人职务" selected={includes(selectedFields, "pervFlAdmPost")} onClick={() => { handleClick("pervFlAdmPost") }} />
                        <ZhButtonSelect btnText="防汛行政责任人手机号码" selected={includes(selectedFields, "pervFlAdmPh")} onClick={() => { handleClick("pervFlAdmPh") }} />
                    </Space>
                    <Space  {...gapProps}>
                        <ZhButtonSelect btnText="管理范围划界" selected={includes(selectedFields, "manaAreaDeli")} onClick={() => { handleClick("manaAreaDeli") }} />
                        <ZhButtonSelect btnText="完成时间" selected={includes(selectedFields, "manaAreaDeliDate")} onClick={() => { handleClick("manaAreaDeliDate") }} />
                        <ZhButtonSelect btnText="管理范围确权" selected={includes(selectedFields, "manaAreaConf")} onClick={() => { handleClick("manaAreaConf") }} />
                        <ZhButtonSelect btnText="完成时间" selected={includes(selectedFields, "manaAreaConfDate")} onClick={() => { handleClick("manaAreaConfDate") }} />
                        <ZhButtonSelect btnText="保护范围划界" selected={includes(selectedFields, "proAreaDeli")} onClick={() => { handleClick("proAreaDeli") }} />
                        <ZhButtonSelect btnText="完成时间" selected={includes(selectedFields, "proAreaDeliDate")} onClick={() => { handleClick("proAreaDeliDate") }} />
                        <ZhButtonSelect btnText="监控类型" selected={includes(selectedFields, "dikeMonitor")} onClick={() => { handleClick("dikeMonitor") }} />
                    </Space>

                </div>
            </div>
        </Modal>
    )
}

export default ZhExportSelectDikeFields
