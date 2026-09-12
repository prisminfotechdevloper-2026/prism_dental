export interface BlogArticle {
  id: string;
  category: string;
  categoryBadge?: string;
  categoryColor?: string;
  categoryTextColor?: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export interface BlogCategoryItem {
  name: string;
  count: number;
  iconName: string;
}

export interface RecentPostItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
}
