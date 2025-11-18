import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({ anime }: { anime: any }) {
  return (
    <Link href={`/anime/${anime.mal_id}`} className="flex flex-col gap-2 shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <div className="relative h-64">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.title}
          className="object-cover rounded-xl"
          fill
        />
        <div className="flex items-center gap-2 absolute top-2 right-2 bg-black/70 p-1 rounded-xl z-10">
          <Star size="18" className="text-yellow-500" />
          <p className="text-white">{anime.score}</p>
        </div>
      </div>
      <div>
        <h4 className="text-[12px] font-bold">{anime.title}</h4>
        <p className="text-[10px]">{anime.type}</p>
      </div>
    </Link>
  );
}
