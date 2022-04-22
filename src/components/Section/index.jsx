import React from "react";
import clsx from "clsx";

const Section = ({ className, children, wrapClassName, ...rest }) => {
  return (
    <div className={clsx(className, "section")} {...rest}>
      <div className={clsx(wrapClassName, "page-container")}>{children}</div>
    </div>
  );
};

export default Section;
