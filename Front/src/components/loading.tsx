import React, { FC } from "react";

interface Props {
  isLoading?: boolean;
  inButton?: boolean;
  inLink?: boolean;
  children?: React.ReactNode;
}
const Loading: FC<Props> = ({
  isLoading,
  inButton,
  inLink,
  children,
}: Props) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div
      className={`loading ${inButton ? "loading__button" : ""} ${
        inLink ? "loading__link" : ""
      }`}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
Loading.defaultProps = {
  isLoading: false,
  inButton: false,
  inLink: false,
  children: null,
};

export default Loading;
