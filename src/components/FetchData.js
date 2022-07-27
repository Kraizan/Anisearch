import axios from "axios";

async function FetchData(url,page,query,filter) {
  var animeData = [];
  var searchUrl = url;
  if(query){
    searchUrl += "/anime?page=" + page;
    searchUrl += "&q=" + query;
    if(filter){
      searchUrl += "&order_by=" + filter + "&sort=asc";
    }
  }
  else{
    searchUrl += "/top/anime?page=" + page;
    if(filter === "popularity"){
      searchUrl += "&filter=by" + filter;
    }
    else if(filter === "airing"){
      searchUrl += "&filter=" + filter;
    }
  }

  const response = await axios.get(searchUrl);
  const res = await response.data;
  const fetchData = res.data;
  const pagination = res.pagination;

  for (var i = 0; i < fetchData.length; i++) {
    const currentAnime = fetchData[i];
    animeData.push({
      id: currentAnime.mal_id,
      name: currentAnime.title,
      type: currentAnime.type,
      rank: currentAnime.rank,
      popularity: currentAnime.popularity,
      score: currentAnime.score,
      year: currentAnime.aired.prop.from.year,
      episodes: currentAnime.episodes,
      url: currentAnime.images.jpg.image_url,
    });
  }
  return {animeData: animeData, pagination: pagination};
}

export default FetchData;
