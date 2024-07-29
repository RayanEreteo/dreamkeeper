import { Link } from "@chakra-ui/react"

interface link{
    children: any,
    href: string
}

function TextLink({children, href}: link) {
  return (
    <Link href={href} color={"white"}>{children}</Link>
  )
}

export default TextLink