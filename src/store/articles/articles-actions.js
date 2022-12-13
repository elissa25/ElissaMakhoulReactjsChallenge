
import { articlesActions } from "./articles-slice";

export const getArticles = (page) => {
 
    const token = localStorage.getItem("token");
    return async (dispatch) => {  
     dispatch(articlesActions.articlesRequest());
      const fetchData = async () => {
      const response=await fetch("http://34.245.213.76:3000/articles?page="+page, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
  
        });
        if (!response.ok) {
          throw new Error('Could not articles data data!');
        }
        const data = await response.json();
        
        return data;
      };

        try{
          const articlesData=await fetchData();      
          const articles = articlesData.response.docs;
          dispatch(articlesActions.successArticles(articles));
        }catch(error){      
          dispatch(articlesActions.failedArticles(error.message));
        };
       
        
    };
  };