import { getMoviesInTheatres } from "../../../services/getmovies";
import ListMovies from "../../listmovies";

const Movies_in_theatre=(props:{query: string})=>{
    console.log("rerendered");
    return(
           <>
            <h1>
                Movies in theatres
            </h1>
            <ListMovies getmovies={getMoviesInTheatres} query={props.query}/>
            </>     
    )
};
export default Movies_in_theatre;