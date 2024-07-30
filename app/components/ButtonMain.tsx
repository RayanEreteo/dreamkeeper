import { Button } from "@chakra-ui/react";
import { ColorSchemeEnum } from "next/dist/lib/metadata/types/metadata-types";

interface buttonMainInterface {
  children: any;
  color?: "facebook" | "linkedin";
  isLink?: boolean;
  toWhere?: string;
}

function ButtonMain({ children, color, isLink = false, toWhere = '/' }: buttonMainInterface) {
  if (isLink) {
    return <Button colorScheme={color}><a href={toWhere}>{children}</a></Button>;
  } else {
    return <Button colorScheme={color}>{children}</Button>;
  }
}

export default ButtonMain;
