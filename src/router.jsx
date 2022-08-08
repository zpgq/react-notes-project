import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Layout from "./Layout"
import store from './redux/store'
import { Provider } from 'react-redux'

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* 1. 传递store */}
                <Provider store={store}>
                    <Route path="/" component={Layout} />
                </Provider>
            </Switch>
        </BrowserRouter>
    )
}
    
export default router();