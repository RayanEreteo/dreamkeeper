import { Link } from "@chakra-ui/react"

interface link{
    children: any,
    href: string,
    display?: object
}

function TextLink({children, href, display}: link) {
  return (
    <Link display={display} href={href} color={"white"}>{children}</Link>
  )
}

export default TextLink