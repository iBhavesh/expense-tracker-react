import React from "react";
import "./Card.css";

type Props = {
  className: String;
  children: React.ReactNode;
};
const Card = (props: Props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
