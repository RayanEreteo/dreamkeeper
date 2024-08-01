import { Button } from "@chakra-ui/react";

interface buttonMainInterface {
  children: any;
  color?: "facebook" | "linkedin";
  isLink?: boolean;
  toWhere?: string;
  display?: object
}

function ButtonMain({ children, color, isLink = false, toWhere = '/' , display}: buttonMainInterface) {
  if (isLink) {
    return <a href={toWhere}><Button display={display} colorScheme={color}>{children}</Button></a>;
  } else {
    return <Button colorScheme={color} display={display}>{children}</Button>;
  }
}

export default ButtonMain;