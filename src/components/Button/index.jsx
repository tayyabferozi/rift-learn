import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Button = ({
  className,
  gradient,
  to,
  forIcon,
  children,
  icon,
  ...rest
}) => {
  const classes = clsx(
    "btn",
    className,
    gradient && "btn-gradient",
    forIcon && "btn-icon"
  );

  let btnChilren = (
    <>
      {icon && (
        <div className={clsx("btn-icon", icon.rootClassName)}>
          <img
            className={clsx("d-block", icon.className)}
            src={icon.src}
            title={icon.title}
            alt={icon.alt}
          />
        </div>
      )}
      <div className="btn-text">{children}</div>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {btnChilren}
      </Link>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        {btnChilren}
      </button>
    );
  }
};

export default Button;
