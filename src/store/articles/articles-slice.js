import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    searchedArticles: [],
    searchField: "",
    loading: false,
    articleStatus: "",
    error: null,
  },
  reducers: {
    articlesRequest(state) {
      state.loading = true;
    },
    successArticles(state, action) {
      state.loading = false;
      state.articles = [...state.articles, ...action.payload];
      state.articleStatus = "success";
    },
    failedArticles(state, action) {
      state.articleStatus = "failed";
      state.loading = false;
      state.hasMore = false;
      state.error = action.payload;
      console.log("failed");
    },
    searchArticle(state, action) {
      state.searchField = action.payload;
      state.searchedArticles = state.articles.filter((article) =>
       ( article.abstract
          .toString()
          .toLowerCase()
          .match(state.searchField.toString().toLowerCase()) ||
          article.lead_paragraph
          .toString()
          .toLowerCase()
          .match(state.searchField.toString().toLowerCase()) )
      );
    },
  },
});

export const articlesActions = articleSlice.actions;

export default articleSlice;
