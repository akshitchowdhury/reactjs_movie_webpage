import { getMovies } from "../../../services/getmovies";
import ListMovies from "../../listmovies";

const Movies=(props:{query: string})=>{
    return(
           <>
            <h1>
               Top Rated Movies
            </h1>
            <ListMovies getmovies={getMovies} query={props.query}/>
            </>     
    )
};
export default Movies;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy