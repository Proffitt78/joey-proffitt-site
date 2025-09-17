import { defineStore } from "pinia";
import api from "@/plugins/axios";

import type { SkillCategory } from "@/types/skills";

export const useSkillsStore = defineStore("skills", {
  state: () => ({
    categories: [] as SkillCategory[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchSkills() {
      this.loading = true;
      this.error = null;

      try {
        const response = await api.get<SkillCategory[]>(
          "/SkillCategories" // adjust port if different
        );
        this.categories = response.data;
      } catch (err: any) {
        this.error = err.message || "Failed to load skills";
      } finally {
        this.loading = false;
      }
    },
  },
});
