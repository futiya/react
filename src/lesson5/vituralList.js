
import React from "react";
import { FixedSizeList } from "react-window";
import faker from "faker";
const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
  }));

export default function App() {
    const renderRow = ({ index, style }) => (
      <div style={{ ...style, ...{ display: "flex" } }}>
        <p>
          {bigList[index].name} - {bigList[index].email}
        </p>
      </div>
    );
return(
    <FixedSizeList
    height={window.innerHeight}
    width={window.innerWidth-20}
    itemCount={bigList.length}
    itemSize={50}
    >
        {renderRow}
    </FixedSizeList>
)
}