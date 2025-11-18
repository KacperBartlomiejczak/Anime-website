export default function AnimeCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 shrink-0 w-48">
      <div className="relative h-64 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse">
        <div className="flex items-center gap-2 absolute top-2 right-2 bg-gray-400 dark:bg-gray-600 p-1 rounded-xl w-16 h-6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-2/3 animate-pulse"></div>
      </div>
    </div>
  );
}
