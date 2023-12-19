"use server";

import AnimeCard from "@/components/AnimeCard";
import { AnimeCardData } from "@/typings/animeCard";
import axios from "axios";

export async function fetchAnime(page: number) {
  try {
    const { data } = await axios.get(
      `https://shikimori.one/api/animes?page=${page}&limit=4&order=popularity`
    );

    return data.map((item: AnimeCardData, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ));
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
}
