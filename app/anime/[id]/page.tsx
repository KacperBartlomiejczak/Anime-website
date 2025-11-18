"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Star, Calendar, Tv } from "lucide-react";

export default function AnimeDetailsPage() {
  const params = useParams();
  const id = params.id;

  const { isPending, error, data } = useQuery({
    queryKey: ["animeDetails", id],
    queryFn: async () =>
      fetch(`https://api.jikan.moe/v4/anime/${id}`).then((res) => res.json()),
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        An error has occurred: {error.message}
      </div>
    );

  const anime = data.data;

  return (
    <main className="min-h-screen bg-white dark:bg-blue-950 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="md:col-span-1">
            <div className="relative h-96 w-full lg:h-full">
              <Image
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                className="object-cover rounded-xl"
                fill
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{anime.title}</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {anime.title_english}
            </h2>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-yellow-500/20 p-2 rounded-lg">
                <Star className="text-yellow-500" />
                <span className="font-bold">{anime.score}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 p-2 rounded-lg">
                <Tv className="text-blue-500" />
                <span>{anime.type}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 p-2 rounded-lg">
                <Calendar className="text-purple-500" />
                <span>{anime.episodes} Episodes</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Synopsis</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {anime.synopsis}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Status</p>
                  <p className="font-bold">{anime.status}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Aired</p>
                  <p className="font-bold">{anime.aired.string}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-bold">{anime.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Rating</p>
                  <p className="font-bold">{anime.rating}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {anime.genres.map((genre: any) => (
                  <span
                    key={genre.mal_id}
                    className="bg-purple-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
