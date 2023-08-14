import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Layout from "./Layout"
import { Provider } from 'react-redux'
import store from './redux/store/index'

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Provider store={store}>
                    <Route path="/" component={Layout} />
                </Provider>
            </Switch>
        </BrowserRouter>
    )
}
console.log('测试1')
export default router();