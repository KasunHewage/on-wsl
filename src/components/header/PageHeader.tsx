"use client";
import React from "react";
import PageHeaderTop from "./PageHeaderTop";
import PageHeaderBottom from "./PageHeaderBottom";

type PageHeaderPropTypes = {
  topChild?: React.ReactNode;
  bottomChild?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderPropTypes> = ({
  topChild,
  bottomChild,
}) => {
  return (
    <div className="pt-2 pb-4 flex flex-col gap-y-2 w-full z-50">
      <PageHeaderTop>{topChild}</PageHeaderTop>
      <PageHeaderBottom>{bottomChild}</PageHeaderBottom>
    </div>
  );
};

export default PageHeader;
