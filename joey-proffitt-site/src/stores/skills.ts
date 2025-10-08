import { defineStore } from "pinia";
import api from "@/plugins/axios";
import skillsData from "@/data/skills.json";

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
        // Simulate an async load (helps preserve your loading spinner UX)
        await new Promise((resolve) => setTimeout(resolve, 300));

        this.categories = skillsData;
      } catch (err: any) {
        this.error = err.message || "Failed to load skills data";
      } finally {
        this.loading = false;
      }
    },
    async fetchSkillsDB() {
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
