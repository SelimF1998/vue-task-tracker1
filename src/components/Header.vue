<template>
  <div v-show="showPage" class="flex justify-between">
    <h1 class="text-gray-500 font-bold text-3xl text-start">{{ title }}</h1>
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
        placeholder="Search Mockups, Logos..."
        required
        @input="search"
        v-model="searchInput"
      />
    </div>
    <Button
      :showAddTask="showAddTask"
      @show-form="$emit('show-form')"
      :text="showAddTask ? 'Close' : 'Add Task'"
    />
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  emits: ["show-form"],
  components: {
    Button,
  },
  methods: {
    search() {
      this.$emit("search-input", this.searchInput);
    },
  },
  computed: {
    showPage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
  Data() {
    return {
      searchInput: "",
    };
  },
};
</script>
<style></style>
