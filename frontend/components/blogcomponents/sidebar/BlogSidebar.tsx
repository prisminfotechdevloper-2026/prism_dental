"use client";

import React from "react";
import { BlogCategoryItem, RecentPostItem } from "../types";
import { BlogSearchWidget } from "./BlogSearchWidget";
import { BlogCategoriesWidget } from "./BlogCategoriesWidget";
import { BlogRecentPostsWidget } from "./BlogRecentPostsWidget";
import { BlogNewsletterWidget } from "./BlogNewsletterWidget";

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: BlogCategoryItem[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  recentPosts: RecentPostItem[];
  onSelectRecentPost: (postId: string) => void;
}

export function BlogSidebar({
  searchQuery,
  onSearchChange,
  categories,
  activeCategory,
  onSelectCategory,
  recentPosts,
  onSelectRecentPost,
}: BlogSidebarProps) {
  return (
    <aside className="w-full space-y-6">
      {/* Widget 1: Search */}
      <BlogSearchWidget
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />

      {/* Widget 2: Categories */}
      <BlogCategoriesWidget
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
      />

      {/* Widget 3: Recent Posts */}
      <BlogRecentPostsWidget
        posts={recentPosts}
        onSelectPost={onSelectRecentPost}
      />

      {/* Widget 4: Newsletter */}
      <BlogNewsletterWidget />
    </aside>
  );
}
