"use client";

import React, { useState, useMemo } from "react";
import { BlogArticle } from "./types";
import {
  ARTICLES_DATA,
  FILTER_CATEGORIES,
  SIDEBAR_CATEGORIES,
  RECENT_POSTS_DATA,
} from "./blogData";
import { BlogFilterTabs } from "./BlogFilterTabs";
import { BlogArticleGrid } from "./BlogArticleGrid";
import { BlogPagination } from "./BlogPagination";
import { BlogSidebar } from "./sidebar/BlogSidebar";
import { BlogArticleDetailModal } from "./BlogArticleDetailModal";

const ITEMS_PER_PAGE = 9;

export function BlogArticleSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      // Category match
      const matchesCategory =
        activeCategory === "All" ||
        article.category.toLowerCase() === activeCategory.toLowerCase() ||
        (article.categoryBadge &&
          article.categoryBadge.toLowerCase() === activeCategory.toLowerCase());

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSelectRecentPost = (postId: string) => {
    const found = ARTICLES_DATA.find((a) => a.id === postId);
    if (found) {
      setSelectedArticle(found);
    }
  };

  return (
    <section className="w-full bg-[#F5FBFC]/50 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* LEFT COLUMN: Filter Tabs + Articles Grid + Pagination (8 cols) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Top Filter Category Pills */}
            <div className="mb-6 sm:mb-8">
              <BlogFilterTabs
                categories={FILTER_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={handleCategoryChange}
              />
            </div>

            {/* Articles Grid (3x3 on desktop) */}
            <BlogArticleGrid
              articles={paginatedArticles}
              onSelectArticle={setSelectedArticle}
              onResetFilters={handleResetFilters}
            />

            {/* Pagination Controls */}
            {filteredArticles.length > 0 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages > 1 ? totalPages : 3}
                onPageChange={setCurrentPage}
              />
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar with Search, Categories, Recent Posts, Newsletter (4 cols) */}
          <div className="lg:col-span-4">
            <BlogSidebar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              categories={SIDEBAR_CATEGORIES}
              activeCategory={activeCategory}
              onSelectCategory={handleCategoryChange}
              recentPosts={RECENT_POSTS_DATA}
              onSelectRecentPost={handleSelectRecentPost}
            />
          </div>
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      <BlogArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
