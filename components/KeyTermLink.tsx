import Link from 'next/link'

export const KeyTermLink = ({
  termUrl,
  children,
}: {
  children: string
  termUrl: string
}) => {
  return <Link href={`/key-terms/${termUrl}`}>{children}</Link>
}
