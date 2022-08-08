import React from 'react'

// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({
    name: 'Guest',
});

export default class App extends React.Component {
    render() {
        const { signedInUser, theme } = this.props;

        // 提供初始 context 值的 App 组件
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout(props) {
    console.log(props)
    return (
        <div>
            {/* <Sidebar /> */}
            <Content />
        </div>
    );
}

// 一个组件可能会消费多个 context
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        // <ProfilePage user={user} theme={theme} />
                        <>
                            {user}
                            {theme}
                        </>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}