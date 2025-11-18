export default function NavItemsList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <li className="flex justify-center items-center">{children}</li>;
}
