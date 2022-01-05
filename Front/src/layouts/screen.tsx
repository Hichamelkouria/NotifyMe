import React from "react";

interface Props {
  children: React.ReactNode;
}
const Screen = ({ children }: Props) => {
  return <div className="screen">{children}</div>;
};

export default Screen;
