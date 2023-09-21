import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('product', {
  state: () => ({
    categories: [
      {
        id: 1,
        title: 'Category 1',
        isActive: true,
      },
      {
        id: 2,
        title: 'Category 2',
        isActive: true,
      },
      {
        id: 3,
        title: 'Category 3',
        isActive: true,
      },
      {
        id: 4,
        title: 'Category 4',
        isActive: true,
      },
    ],
  }),
  getters: {
    getCategories: (state) => state.categories,
    getCategoriesForSelect: (state) => {
      console.log(
        '🚀 ~ file: category.store.js:32 ~ state.categories:',
        state.categories
      );
      return state.categories.map((category) => {
        return { label: category.title, value: category.id };
      });
    },
    getCategoryById: (state) => (id: string) =>
      state.categories.find((category: any) => category.id === id),
  },
  actions: {
    addNewCategory(category: any) {
      category.id = this.categories.length + 1;
      this.categories.push(category);
    },
    updateCategory(category: any) {
      console.log(
        '🚀 ~ file: category.store.js:45 ~ updateCategory ~ category:',
        category
      );
      const index = this.categories.findIndex(
        (item) => item.id === category.id
      );
      this.categories[index] = category;
    },
    deleteCategory(id: any) {
      const index = this.categories.findIndex((item: any) => item.id === id);
      this.categories.splice(index, 1);
    },
    updateCatrgoryStatus(id: any) {
      const index = this.categories.findIndex((item: any) => item.id === id);
      this.categories[index].isActive = !this.categories[index].isActive;
    },
  },
});
