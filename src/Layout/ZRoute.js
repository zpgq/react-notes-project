import { Switch, Route } from "react-router-dom"
import routerConfig from "@/config/router-config"
function ZhRoute() {
    return (
        <Switch>
            {
                routerConfig.map((item, index) => {
                    return <Route key={index} exact={item.exact} path={item.path} component={item.component}></Route>
                })
            }
        </Switch>
    )
}

export default ZhRoute