import React from "react";
import NextLink, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
};

const Link: React.FC<Props> = ({ children, className, ...props }) => (
  <NextLink {...props}>
    <a className={className}>{children}</a>
  </NextLink>
);

export default Link;
