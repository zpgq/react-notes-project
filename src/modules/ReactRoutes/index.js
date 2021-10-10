import { Link, Switch, Route } from "react-router-dom"

function ReactRoutes() {
    return (
        <>
            <h1>路由</h1>
            <h2>嵌套路由</h2>
            <button>
                <Link to="/react/routes/home">首页</Link>
            </button>
            <button>
                <Link to="/react/routes/product">产品介绍</Link>
            </button>
            <button>
                <Link to="/react/routes/about">关于我们</Link>
            </button>
            <hr />
            <Switch>
                <Route path="/react/routes/home" component={Home} />
                <Route path="/react/routes/product" component={Product} />
                <Route path="/react/routes/about" component={About} />
            </Switch>
        </>
    )
}

function Home() {
    return <h1>首页</h1>
}
function Product() {
    return (
        <div>
            <h1>产品页</h1>
            <button><Link to="/react/routes/product/product1">产品1111111</Link></button>
            <button><Link to="/react/routes/product/product2">产品222222</Link></button>
            <Switch>
                <Route to="/react/routes/product" component={Product}>
                    <Route path="/react/routes/product/product1" component={Product1}></Route>
                    <Route path="/react/routes/product/product2" component={Product2}></Route>
                </Route>
            </Switch>
        </div>
    )
}
function Product1() {
    return <h2>产品页1</h2>
}
function Product2() {
    return <h2>产品页2</h2>
}
function About() {
    return <h1>关于我们</h1>
}

export default ReactRoutes