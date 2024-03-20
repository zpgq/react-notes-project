import { MenuOutlined } from "@ant-design/icons";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Button, Form, Typography, InputNumber } from "antd";
const columns = [
  {
    key: "sort",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const Row = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      }
    ),
    transition,
    ...(isDragging
      ? {
          position: "relative",
          zIndex: 9999,
        }
      : {}),
  };
  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if (child.key === "sort") {
          return React.cloneElement(child, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: "none",
                  cursor: "move",
                }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const WrapTable = ({ request }) => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    request().then((res) => {
      setDataSource(res);
    });
  }, []);
  return (
    <div>
      <Button>加1</Button>
      <Button>外部校验</Button>
      <Table
        components={{
          body: {
            row: Row,
          },
        }}
        rowKey="key"
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  const getData = () => {
    setDataSource([
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address:
          "Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text",
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
      },
    ]);
    return Promise.resolve([
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address:
          "Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text",
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
      },
    ]);
  };
  const onDragEnd = ({ active, over }) => {
    console.log("active", active, over);
    // if (active.id !== over?.id) {
    //   setDataSource((previous) => {
    //     const activeIndex = previous.findIndex((i) => i.key === active.id);
    //     const overIndex = previous.findIndex((i) => i.key === over?.id);
    //     return arrayMove(previous, activeIndex, overIndex);
    //   });
    // }
  };
  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <WrapTable request={getData} />
      </SortableContext>
    </DndContext>
  );
};
export default App;
