"use client";

import React from "react";
import Image from "next/image";
import { RecentPostItem } from "../types";

interface BlogRecentPostsWidgetProps {
  posts: RecentPostItem[];
  onSelectPost: (postId: string) => void;
}

export function BlogRecentPostsWidget({
  posts,
  onSelectPost,
}: BlogRecentPostsWidgetProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#E5F2F5] shadow-[0_2px_12px_rgba(8,50,88,0.03)]">
      <h3 className="text-base font-bold text-[#083258] mb-4">Recent Posts</h3>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post.id)}
            className="group flex items-center gap-3.5 cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-15 h-15 rounded-xl overflow-hidden shrink-0 bg-[#E8F8F8]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="60px"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-300"
              />
            </div>

            {/* Post Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-xs sm:text-[13px] font-bold text-[#083258] group-hover:text-[#0AADA8] line-clamp-2 leading-tight transition-colors duration-200">
                {post.title}
              </h4>
              <p className="text-[10.5px] text-[#8BA2B5] mt-1.5 flex items-center gap-1.5">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
