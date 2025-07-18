import { useMemo, useState } from "react";

export interface Thought {
  slug: string;
  title: string;
  date: string;
  rawDate: Date;
  tags: string[];
  content: string;
}

export interface FilterOptions {
  searchTerm: string;
  selectedTags: string[];
  sortBy: "dateDesc" | "dateAsc" | "titleAsc" | "titleDesc";
}

export const useThoughtFilters = (thoughts: Thought[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    selectedTags: [],
    sortBy: "dateDesc",
  });

  // Extract all unique tags from thoughts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    thoughts.forEach((thought) => {
      thought.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [thoughts]);

  // Filter and sort thoughts based on current filters
  const filteredThoughts = useMemo(() => {
    let result = [...thoughts];

    // Text search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(
        (thought) =>
          thought.title.toLowerCase().includes(searchLower) ||
          thought.content.toLowerCase().includes(searchLower)
      );
    }

    // Tag filter
    if (filters.selectedTags.length > 0) {
      result = result.filter((thought) =>
        filters.selectedTags.some((tag) => thought.tags.includes(tag))
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case "dateAsc":
          return a.rawDate.getTime() - b.rawDate.getTime();
        case "dateDesc":
          return b.rawDate.getTime() - a.rawDate.getTime();
        default:
          return b.rawDate.getTime() - a.rawDate.getTime();
      }
    });

    return result;
  }, [thoughts, filters]);

  // Update individual filter values
  const updateSearchTerm = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  const updateSelectedTags = (selectedTags: string[]) => {
    setFilters((prev) => ({ ...prev, selectedTags }));
  };

  const updateSortBy = (sortBy: FilterOptions["sortBy"]) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      selectedTags: [],
      sortBy: "dateDesc",
    });
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.searchTerm !== "" ||
      filters.selectedTags.length > 0 ||
      filters.sortBy !== "dateDesc"
    );
  }, [filters]);

  return {
    filters,
    filteredThoughts,
    allTags,
    updateSearchTerm,
    updateSelectedTags,
    updateSortBy,
    resetFilters,
    hasActiveFilters,
    resultCount: filteredThoughts.length,
  };
};
