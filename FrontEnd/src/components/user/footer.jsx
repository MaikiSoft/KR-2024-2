const footer = () => {

    return (
        <>
            <div className="container">
                <footer className="pt-5 pb-0">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Creador</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">GitHub</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">LinkedIn</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Instagram</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gmail</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Recursos</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Fundacion Universitaria Konrad lorenz</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Bootstrap</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">...</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">...</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                            <div className="d-flex flex-column flex-sm-row justify-content-center pt-4 pb-0 my-4 border-top">
                                <p>© 2024 MaikiSoft, Inc. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )

}

export default footer;