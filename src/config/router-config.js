import TestPage from "../pages";
import reacthooks from "../pages/reacthooks/routers";
import reactClass from "../pages/react-class/routers";
import antd from "../pages/antd/routers";
import example from "../pages/example/routers";
import htmlcss from "../pages/htmlcss/routers";
import js from "../pages/js/routers";

const routerConfig = [
  {
    path: "/",
    exact: true,
    component: TestPage,
  },
  ...reacthooks,
  ...reactClass,
  ...antd,
  ...example,
  ...htmlcss,
  ...js,
];

export default routerConfig;
