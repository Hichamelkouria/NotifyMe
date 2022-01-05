import React from "react";

interface Props {
  children: React.ReactNode;
}
const ScreenContainer = ({ children }: Props) => {
  return (
    <div className="screen-container">
      <div className="screen-container__children">{children}</div>
    </div>
  );
};

export default ScreenContainer;
