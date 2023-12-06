import TestPage from "@/modules/test-page";
import reacthooks from "@/modules/reacthooks/routers";
import reactClass from "@/modules/react-class/routers";
import antd from "@/modules/antd/routers";
import example from "@/modules/example/routers";
import htmlcss from "@/modules/htmlcss/routers";
import js from "@/modules/js/routers";
import page from "@/modules/page/routers";

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
  ...page,
];

export default routerConfig;
