export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold mb-2 text-black dark:text-white pt-4">
      {title}
    </h2>
  );
}
