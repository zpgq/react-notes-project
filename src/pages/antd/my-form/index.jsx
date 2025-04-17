import React, { useEffect, useMemo } from "react";
import { Button, Form, Typography, InputNumber } from "antd";
import dayjs from "dayjs";
import ChildTest from "./child-test";

const WrapInput = ({ add, remove, ...rest }) => {
  console.log("rest", rest);
  return (
    <div>
      <InputNumber precision={0} placeholder="Item Name" {...rest} />
      <Button type="dashed" onClick={() => add()} block>
        + 添加
      </Button>
    </div>
  );
};

const MyInput = ({
  // 强制保持受控逻辑
  // value = "",
  ...rest
}) => <input {...rest} />;

const App = () => {
  const [form] = Form.useForm();
  const [count, setCount] = React.useState(0);

  const onClickBtn = async () => {
    // 失效, 需设置上面强受控生效或者设置为''空串
    form.setFieldsValue({
      items: [{ testInput: null }],
    });
    const value = await form.validateFields();
    console.log("value--", value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const formProps = useMemo(() => {
    return form;
  }, []);

  const childProps = useMemo(() => {
    return {
      name: 1,
      obj: {},
    };
  }, []);

  return (
    <div>
      {count}
      <Button onClick={handleClick}>加1</Button>
      <Button onClick={onClickBtn}>外部校验</Button>
      <Form form={formProps}>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div
              style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
            >
              {fields.map((field) => (
                <div key={field.key}>
                  {console.log(field)}
                  <Form.Item
                    name={[field.name, "testInput"]}
                    rules={[{ required: true }]}
                  >
                    <MyInput />
                    {/* <WrapInput add={add} remove={remove} /> */}
                    {/* {WrapInput({ add, remove })} */}
                  </Form.Item>
                  <Form.Item
                    hasFeedback
                    label="测试label"
                    name={[field.name, "name"]}
                    rules={[{ max: 10, transform: (value) => String(value) }]}
                  >
                    <InputNumber></InputNumber>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </div>
              ))}
            </div>
          )}
        </Form.List>
        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item>
      </Form>

      <ChildTest {...childProps}></ChildTest>
    </div>
  );
};

export default App;
