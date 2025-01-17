"use client";

import PostCardList from "@/components/PostCardList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <PostCardList />
    </main>
  );
}
