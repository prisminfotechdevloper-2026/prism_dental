import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Modal } from "../common/Modal";
import { StatusBadge } from "../common/Badge";
import {
  Plus,
  Eye,
  Calendar,
  Trash2,
  Clock,
} from "lucide-react";

export function BlogManager() {
  const {
    blogPosts,
    doctors,
    addBlogPost,
    toggleBlogStatus,
    deleteBlogPost,
  } = useAdmin();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Oral Health",
    author: doctors[0]?.name || "Dr. Priya Sharma",
    readTime: "4 min read",
    status: "Published",
    tags: "OralHygiene, DentalCare",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlogPost({
      ...formData,
      tags: formData.tags.split(",").map((s) => s.trim()),
    });
    setIsModalOpen(false);
    setFormData({
      title: "",
      category: "Oral Health",
      author: doctors[0]?.name || "Dr. Priya Sharma",
      readTime: "4 min read",
      status: "Published",
      tags: "OralHygiene, DentalCare",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#083258]">
            Dental Health Articles &amp; Tips ({blogPosts.length})
          </h2>
          <p className="text-xs text-[#6B8BA2] mt-0.5">
            Educate patients on daily oral hygiene, treatment advice, and preventative care
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#E8F8F8] px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>

                <button
                  onClick={() => toggleBlogStatus(post.id)}
                  className="cursor-pointer"
                  title="Toggle Status"
                >
                  <StatusBadge status={post.status} />
                </button>
              </div>

              {/* Title */}
              <h3 className="font-bold text-sm text-[#083258] leading-snug line-clamp-2">
                {post.title}
              </h3>

              {/* Author & Read Time */}
              <div className="mt-3 p-2.5 rounded-xl bg-[#F8FDFF] border border-[#E8F1F5] text-xs space-y-1">
                <p className="font-semibold text-[#083258]">
                  Author: {post.author}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#6B8BA2]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-[#426480] bg-[#F5FBFC] border border-[#D5ECF0] px-1.5 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 mt-4 border-t border-[#E8F1F5] flex items-center justify-between">
              <span className="text-[11px] text-[#6B8BA2] flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {post.views || 0} Reads
              </span>

              <button
                onClick={() => {
                  if (window.confirm("Delete this article?")) {
                    deleteBlogPost(post.id);
                  }
                }}
                className="p-1 text-gray-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Article Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Publish Dental Care Article"
        subtitle="Articles help with patient trust and website organic SEO"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Article Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. How Often Should You Replace Your Toothbrush?"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
              >
                <option value="General Dentistry">General Dentistry</option>
                <option value="Oral Health">Oral Health</option>
                <option value="Treatment Guide">Treatment Guide</option>
                <option value="Dental Care Tips">Dental Care Tips</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Author
              </label>
              <select
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
              >
                {doctors.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Read Time
              </label>
              <input
                type="text"
                placeholder="4 min read"
                value={formData.readTime}
                onChange={(e) =>
                  setFormData({ ...formData, readTime: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Publish Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Search Tags (comma-separated)
            </label>
            <input
              type="text"
              placeholder="Brushing, Flossing, HealthyGums"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8F1F5]">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Create Article
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
