"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Anime from "@/components/anime/anime";

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={new QueryClient()}>
        <Anime />
      </QueryClientProvider>
    </main>
  );
}
