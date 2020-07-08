import React, { PureComponent, Component } from "react";
import { FixedSizeList as List } from "react-window";
import memoize from "memoize-one";
import { convertData } from "./utils";

const memoizedConvertData = memoize(convertData);
const getItemData = memoize((listData, width) => ({
  listData,
  width,
}));

<<<<<<< HEAD
=======
const ListItem = React.memo((props) => {
  const { data, index, style } = props;
  const { listData, width } = data;
  const nodes = listData[index];

  return (
    <div style={style}>
      {nodes.map((node, index) => (
        <div
          key={index}
          className="Node"
          style={{
            left: node.offset * width,
            width: node.width * width,
            backgroundColor: node.color,
          }}
          title={node.name}
        >
          {node.name}
        </div>
      ))}
    </div>
  );
});

>>>>>>> chamge
export default function FlameChart({ data, height, width }) {
  const listData = convertData(data);
  const itemData = getItemData(listData, width);

  return (
    <List
      height={height}
      itemCount={listData.length}
      itemData={itemData}
      itemSize={30}
      width={width}
    >
      {ListItem}
    </List>
  );
}
<<<<<<< HEAD

class ListItem extends Component {
  render() {
    const { data, index, style } = this.props;
    const { listData, width } = data;
    const nodes = listData[index];

    return (
      <div style={style}>
        {nodes.map((node, index) => (
          <div
            key={index}
            className="Node"
            style={{
              left: node.offset * width,
              width: node.width * width,
              backgroundColor: node.color,
            }}
            title={node.name}
          >
            {node.name}
          </div>
        ))}
      </div>
    );
  }
}
=======
>>>>>>> chamge
