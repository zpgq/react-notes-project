import { useContext } from "react";
import { CountContext } from "../index";
function Child() {
  const count = useContext(CountContext);
  return <div>子元素的count为: {count}</div>;
}

export default Child;
