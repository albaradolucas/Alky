import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

export default function Listado () {
    let token = localStorage.getItem('token')

    const [ moviesList, setMoviesList ] = useState([])

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=6140261265f37d5f57e7b761abe30256&language=en-US&page=1'
        axios
            .get(endPoint)
            .then(res => {
                const apiData = res.data
                setMoviesList(apiData.results)
            })
    }, [setMoviesList])
    
    console.log(moviesList)

    return (
        <>
            { !token && <Redirect to='/' />}
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}