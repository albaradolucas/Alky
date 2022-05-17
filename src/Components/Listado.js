import { Link, Redirect } from "react-router-dom";

export default function Listado () {
    let token = localStorage.getItem('token')
    
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