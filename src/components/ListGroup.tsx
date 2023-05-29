import React, { useState } from "react";
// import { MouseEventHandler, MouseEvent } from "react";
// import { SetStateAction } from "react";

interface Props {
  Items?: object[];
  selectedIndex?: number;
  setSelectedIndex?: React.Dispatch<React.SetStateAction<number>>;
  Heading: string;
}

const Items = [
  { id: 1, name: "Bitcoin BTC", link: "#" },
  { id: 2, name: "Ethereum ETH", link: "#" },
  { id: 3, name: "Solana SOL", link: "#" },
  { id: 4, name: "Polygon MATIC", link: "#" },
  { id: 5, name: "Polkadot DOT", link: "#" },
  { id: 6, name: "Binance Coin BNB", link: "#" },
];

// const eventHandler = () => (event: MouseEvent) =>
//   console.log(event.nativeEvent.view?.crypto.subtle.decrypt.length);

const ListGroup = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
    <h1 className="">{props.Heading}</h1>
      <div className="list-group">
        {Items &&
          Items.map((item, index: number) => (
            <a
              href={item.link}
              className={`${
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              } list-group-item-action`}
              onClick={() => setSelectedIndex(index)}
              key={index}
            >
              {item.name}
            </a>
          ))}
      </div>
    </>
  );
};

export default ListGroup;
