import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from 'react-router'
import Button from "@mui/material/Button"
import InfoDiv from "./InfoDiv"
import InfoDivArray from "./InfoDivArray"
import InfoRow from "./InfoRow"

function AnimeDetails(props){
  const {id} = useParams();
  const url = "https://api.jikan.moe/v4/anime/" + id + "/full";
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch(){
      setLoading(true)
      const response = await axios.get(url);
      const res = await response.data;
      setAnimeData(res.data);
      setLoading(false);
      console.log(animeData);
    }
    fetch();

  },[])
  return(
    <div>
      {
        loading
        ? null
        : <div className="anime-details-container ">
          <div className="info-col">
            <div className="border-margin">
              <div className="image-container">
                <img className="anime-image" src={animeData.images.jpg.image_url}/>
              </div>
              <div>
                <Button
                  target="_blank"
                  href={"http://www.animixplay.to/anime/"+id}
                  variant="contained"
                  color= "warning"
                  sx={{
                    width: "100%",
                    backgroundColor: "#FF7338",
                  }}
                  >
                    Watch
                  </Button>
                </div>
            </div>
            <div className="info-col">
              <h2 className="info-section-heading">Information</h2>
              <hr className="information-hr"/>
              <div className="info-box">
                <InfoDiv title="Source" value={animeData.source} />
                <InfoDiv title="Type" value={animeData.type} />
                <InfoDiv title="Episodes" value={animeData.episodes} />
                <InfoDiv title="Status" value={animeData.status} />
                <InfoDiv title="Premired" value={animeData.season ? animeData.season.charAt(0).toUpperCase()+animeData.season.slice(1)+" "+animeData.year : null}/>
                <InfoDiv title="Aired" value={animeData.aired.string} />
                <InfoDiv title="Rating" value={animeData.rating} />
                <InfoDivArray title="Genres" value={animeData.genres} />
                <InfoDivArray title="Themes" value={animeData.themes} />
                <InfoDivArray title="Studios" value={animeData.studios} />
              </div>
            </div>
          </div>
          <div className="content-container padding-anime-content">
            <div className="details-header">
              <div className="det-header-content">
                <div>
                  <h1 className="anime-title">{animeData.title}</h1>
                  <h4>{animeData.title_english}</h4>
                </div>
                <div className="stats-row">
                  <div>
                    <h4 className="stats-heading">Score</h4>
                    <p>{animeData.score}</p>
                  </div>
                  <div>
                    <h4 className="stats-heading">Rank</h4>
                    <p>{animeData.rank}</p>
                  </div>
                  <div>
                    <h4 className="stats-heading">Popularity</h4>
                    <p>{animeData.popularity}</p>
                  </div>
                </div>
              </div>
              <div>
                {/* <iframe
                  src={animeData.trailer.embed_url}
                  frameBorder="20px"
                  allow="encrypted-media"
                  allowFullScreen
                  title="video"
                /> */}
              </div>
            </div>
            <div>
              <h2 className="info-section-heading">Synopsis</h2>
              <hr className="hr-underline"/>
              <p className="synopsis-style">{animeData.synopsis}</p>
            </div>
            <div>
              <div>
                <h2 className="info-section-heading">Relations</h2>
                <hr className="hr-underline"/>
              </div>
              <div>
                <InfoRow data={animeData.relations} />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default AnimeDetails;
