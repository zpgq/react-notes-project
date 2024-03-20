import { Divider } from "antd";
import { useEffect, useState } from "react";

const initArr = [
  {
    age: 20,
    name: "initName20",
  },
  {
    age: 30,
    name: "initName30",
  },
];

const UseState = () => {
  // 修改数组内对象的正确用法
  // const [arr, setArr] = useState(initArr);
  // useEffect(() => {
  //   setArr((prev) => {
  //     const newArr = [...prev];
  //     return newArr.map((item, index) => ({
  //       ...item,
  //       name: index == 0 ? "333" : item.name,
  //     }));
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log("arr", arr);
  //   console.log("initArr", initArr);
  // }, [arr]);

  const [count, setCount] = useState(0)
  useEffect(() => {
    // setCount(count + 1)
    // setCount(count + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }, [])
  useEffect(() => {
    console.log('count--', count)
  }, [count])

  return <div>useState</div>;
};

export default UseState;
