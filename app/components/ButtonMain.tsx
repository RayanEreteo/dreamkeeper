import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface buttonMainInterface {
  children: any;
  color?: "facebook" | "linkedin";
  isLink?: boolean;
  toWhere?: string;
  display?: object;
  execute?: MouseEventHandler
}

function ButtonMain({ children, color, isLink = false, toWhere = '/' , display, execute}: buttonMainInterface) {
  if (isLink) {
    return <a href={toWhere}><Button display={display} colorScheme={color}>{children}</Button></a>;
  } else {
    return <Button colorScheme={color} onClick={execute} display={display}>{children}</Button>;
  }
}

export default ButtonMain;