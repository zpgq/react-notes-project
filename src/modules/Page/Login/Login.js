import { Tabs } from "antd"
import "./styles.less"

const { TabPane } = Tabs;

function Login() {
    return (
        <div className="zh-login">
            <div className="header">
                <div className="header-log"></div>
                <div className="header-right">
                    <div className="header-right-notice">通知</div>
                    <div className="header-right-data">2020-10-10 星期二</div>
                </div>
            </div>
            <div className="content">
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    className="content-tabs"
                >
                    <TabPane tab="政策法规" key="1">
                        Content of card tab 1
                    </TabPane>
                    <TabPane tab="Card Tab 2" key="2">
                        Content of card tab 2
                    </TabPane>
                    <TabPane tab="Card Tab 3" key="3">
                        Content of card tab 3
                    </TabPane>
                </Tabs>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Login