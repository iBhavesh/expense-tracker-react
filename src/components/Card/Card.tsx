import { PropsWithChildren } from "react";
import React from "react";
import "./Card.css";

interface Props {
  className: String;
}
const Card = (props: PropsWithChildren<Props>) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
