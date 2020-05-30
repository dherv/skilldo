import React, { FC } from "react";
import { Heading } from "../styled/Headings.styled";

const NavTitle: FC<Props> = ({ title }) => {
  return <Heading.h1>{title}</Heading.h1>;
};

interface Props {
  title: string;
}

export default NavTitle;
