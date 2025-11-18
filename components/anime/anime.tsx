"use client";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../ui/sectionHeading";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimeCard from "./animeCard";
import AnimeCardSkeleton from "./animeCardSkeleton";

export default function Anime() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { isPending, error, data } = useQuery({
    queryKey: ["animeData"],
    queryFn: async () =>
      fetch("https://api.jikan.moe/v4/top/anime").then((res) => res.json()),
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (error) return "An error has occurred: " + error.message;

  const animeData = isPending ? [] : data.data.filter((anime: any) => anime.type === "TV");

  return (
    <section className="flex justify-center items-center p-2 bg-white dark:bg-blue-950 z-0 relative">
      <div className="container relative">
        <SectionHeading title="Popular Anime" />
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity lg:block"
          >
            <ChevronLeft size={24} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide p-4"
          >
            {isPending
              ? Array.from({ length: 10 }).map((_, i) => (
                  <AnimeCardSkeleton key={i} />
                ))
              : animeData.slice(0, 10).map((anime: any) => {
                  return <AnimeCard key={anime.mal_id} anime={anime} />;
                })}
          </div>
          <button
            onClick={() => scroll("right")}
            className="hidden absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity lg:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
