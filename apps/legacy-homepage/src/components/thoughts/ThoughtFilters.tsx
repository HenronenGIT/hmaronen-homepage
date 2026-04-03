import { COLORS } from "@/constants/colors";
import type { FilterOptions } from "@/hooks/use-thought-filters";
import { Search, SortAsc, SortDesc, Tag, X } from "lucide-react";
import { useState } from "react";

interface ThoughtFiltersProps {
  filters: FilterOptions;
  allTags: string[];
  resultCount: number;
  hasActiveFilters: boolean;
  onSearchChange: (searchTerm: string) => void;
  onTagsChange: (selectedTags: string[]) => void;
  onSortChange: (sortBy: FilterOptions["sortBy"]) => void;
  onResetFilters: () => void;
}

const ThoughtFilters: React.FC<ThoughtFiltersProps> = ({
  filters,
  allTags,
  resultCount,
  hasActiveFilters,
  onSearchChange,
  onTagsChange,
  onSortChange,
  onResetFilters,
}) => {
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  const handleTagToggle = (tag: string) => {
    if (filters.selectedTags.includes(tag)) {
      onTagsChange(filters.selectedTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...filters.selectedTags, tag]);
    }
  };

  const toggleSort = () => {
    const newSortBy = filters.sortBy === "dateDesc" ? "dateAsc" : "dateDesc";
    onSortChange(newSortBy);
  };

  return (
    <div className="mb-8">
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search thoughts..."
            value={filters.searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
            style={
              {
                borderColor: COLORS.primaryAlpha[30],
                "--tw-ring-color": COLORS.primary,
              } as React.CSSProperties
            }
          />
        </div>

        {/* Tag Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowTagDropdown(!showTagDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border rounded-lg text-white hover:bg-gray-700/50 transition-all"
            style={{ borderColor: COLORS.primaryAlpha[30] }}
          >
            <Tag className="w-4 h-4" />
            Tags{" "}
            {filters.selectedTags.length > 0 &&
              `(${filters.selectedTags.length})`}
          </button>

          {showTagDropdown && (
            <div
              className="absolute top-full left-0 mt-1 w-64 bg-gray-800 border rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto"
              style={{ borderColor: COLORS.primaryAlpha[30] }}
            >
              {allTags.map((tag) => (
                <label
                  key={tag}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700/50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.selectedTags.includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="rounded"
                    style={{ accentColor: COLORS.primary }}
                  />
                  <span className="text-sm text-white">{tag}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sort Toggle Button */}
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border rounded-lg text-white hover:bg-gray-700/50 transition-all"
          style={{ borderColor: COLORS.primaryAlpha[30] }}
          title={`Currently showing ${filters.sortBy === "dateDesc" ? "newest first" : "oldest first"}. Click to toggle.`}
        >
          {filters.sortBy === "dateDesc" ? (
            <SortDesc className="w-4 h-4" />
          ) : (
            <SortAsc className="w-4 h-4" />
          )}
          {filters.sortBy === "dateDesc" ? "Newest" : "Oldest"}
        </button>
      </div>

      {/* Active Filters & Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {/* Selected Tags */}
          {filters.selectedTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full border"
              style={{
                backgroundColor: COLORS.primaryAlpha[10],
                borderColor: COLORS.primaryAlpha[30],
                color: COLORS.primary,
              }}
            >
              {tag}
              <button
                onClick={() =>
                  onTagsChange(filters.selectedTags.filter((t) => t !== tag))
                }
                className="hover:opacity-70"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {/* Reset Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-xs text-gray-400 hover:text-white transition-colors underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <span className="text-sm text-gray-400">
          {resultCount} {resultCount === 1 ? "thought" : "thoughts"}
        </span>
      </div>
    </div>
  );
};

export default ThoughtFilters;
