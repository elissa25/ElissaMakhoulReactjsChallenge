
import { useEffect, useState,Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid,Box,Typography,Button } from "@mui/material";

import Header from"../components/dashboard/Header";

import Article from"../components/dashboard/article/Article";
import NoArticlesFound from "../components/dashboard/article/NoArticlesFound";

import { getArticles } from "../store/articles/articles-actions";



function DashboardPage() {

  const [page, setPage] = useState(0);
  const { articles, searchedArticles, searchField,error,loading } = useSelector(
    (state) => state.articles
);

  const articlesToDispaly = searchField ? searchedArticles : articles;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles(page));
    
  }, [dispatch,page]);

  const infiniteScroll = () => {
    setPage(page + 1);
    dispatch(getArticles(page));
  };

  useEffect(() => {

    const handleScroll = (page) => {
      const scrollHeight = page.target.documentElement.scrollHeight;
      const currentHeight =
      page.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight &&  !searchField) {
        infiniteScroll();
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {

      window.removeEventListener("scroll", handleScroll)};
  }, [page]);


  return (
    <Fragment>
      <header>
        <Header />
      </header>
      {articles.length===0 && loading===false && <NoArticlesFound />}
      <main>
        <Grid container spacing="50px">
          {articlesToDispaly &&
            articlesToDispaly.map((article, index) => (
              <Article
                key={index}
                abstract={article.abstract}
                lead_paragraph={article.lead_paragraph}
              
              />
            ))}
          <Grid item xs={12}>
            {error && (
              <div>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent="center"
                  marginTop={5}
                >
                  <Typography variant="h4" color="MenuText">
                    {error}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ marginTop: 1, borderRadius: 2, fontSize: 14 }}
                    onClick={() => dispatch(getArticles(page))}
                  >
                    Reload
                  </Button>
                </Box>
              </div>
            )}
          </Grid>
        </Grid>
      </main>
    </Fragment>
  );}

export default DashboardPage;
