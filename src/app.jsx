import { Switch, BrowserRouter, Route } from "react-router-dom";
import Layouts from "./layouts";
import { Provider } from "react-redux";
import store from "./redux/store/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route path="/" component={Layouts} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
