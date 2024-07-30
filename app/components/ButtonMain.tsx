import { Button } from "@chakra-ui/react";

interface buttonMainInterface {
  children: any;
  color?: "facebook" | "linkedin";
  isLink?: boolean;
  toWhere?: string;
}

function ButtonMain({ children, color, isLink = false, toWhere = '/' }: buttonMainInterface) {
  if (isLink) {
    return <a href={toWhere}><Button colorScheme={color}>{children}</Button></a>;
  } else {
    return <Button colorScheme={color}>{children}</Button>;
  }
}

export default ButtonMain;
