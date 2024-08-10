import React from "react";

type PageHeaderBottomPropTypes = {
  children?: React.ReactNode;
};

const PageHeaderBottom: React.FC<PageHeaderBottomPropTypes> = ({
  children,
}) => {
  return <>{children}</>;
};

export default PageHeaderBottom;
