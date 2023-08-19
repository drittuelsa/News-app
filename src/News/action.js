export function GetNews(){
    return(dispatch) =>{
        fetch('https://newsapi.org/v2/everything?q=apple&from=2023-08-17&to=2023-08-17&sortBy=popularity&apiKey=8449c3372dbf42daa8ac80d825c83e83')
        .then(response =>response.json())
        .then(json =>{
            dispatch(GetByName(json.articles))
        })
        .catch((error) => {
            console.error("Error fetching news:", error);
          });
    }
}

export function GetByName(articles){
    return{
        type : "ByName",
        payload : articles
    }
}

export function AddNews(news){
    return{
        type : "Add",
        payload : news
    }
}