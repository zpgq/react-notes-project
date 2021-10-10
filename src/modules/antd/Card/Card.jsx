/* import { useState, useEffect } from "react"
import { Card } from 'antd';

const tabListNoTitle = [
    {
        key: 'article',
        tab: 'article',
    },
    {
        key: 'app',
        tab: 'app',
    },
    {
        key: 'project',
        tab: 'project',
    },
];

const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

function TabsCard() {
    const [noTitleKey, setNoTitleKey] = useState({})
    useEffect(() => {
        setNoTitleKey({
            key: 'tab1',
            noTitleKey: "app",
        })
    }, [])



    const onTabChange = (key, type) => {
        let listKey = noTitleKey.key
        setNoTitleKey({
            key: listKey,
            [type]: key
        }
        );
    };


    return (

        <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={noTitleKey.noTitleKey}
            onTabChange={key => {
                onTabChange(key, 'noTitleKey');
            }}
        >
            {contentListNoTitle[noTitleKey.noTitleKey]}
        </Card>

    );

}

export default TabsCard */


import React from "react"
import { Card } from 'antd';

const tabListNoTitle = [
    {
        key: 'article',
        tab: 'article',
    },
    {
        key: 'app',
        tab: 'app',
    },
    {
        key: 'project',
        tab: 'project',
    },
];

const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

class TabsCard extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
        console.log(this.state)
    };

    render() {
        return (
            <>
                <br />
                <br />
                <Card
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={key => {
                        this.onTabChange(key, 'noTitleKey');
                    }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </Card>
            </>
        );
    }
}

export default TabsCard
