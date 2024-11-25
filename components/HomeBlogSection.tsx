"use client";

import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";

interface Post {
  id: string;
  title: string;
  slug: string;
  tags: Tag[];
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

export default function HomeBlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);

        // Lấy 3 bài viết từ 3 tags khác nhau
        const uniqueTagPosts: Post[] = [];
        const seenTags = new Set<string>();

        for (const post of data) {
          for (const tag of post.tags) {
            if (!seenTags.has(tag.id)) {
              uniqueTagPosts.push(post);
              seenTags.add(tag.id);
              break; // Chỉ lấy 1 bài viết duy nhất từ mỗi tag
            }
          }
          if (uniqueTagPosts.length === 3) break; // Đủ 3 bài viết thì thoát vòng lặp
        }

        setSelectedPosts(uniqueTagPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="bg-slate-800 text-white py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Bài Viết Nổi Bật</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {selectedPosts.length > 0 ? (
          selectedPosts.map((post) => <PostCard key={post.id} data={post} />)
        ) : (
          <p className="text-center">Đang tải bài viết...</p>
        )}
      </div>
    </section>
  );
}
