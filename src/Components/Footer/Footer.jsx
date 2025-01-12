// import React from 'react'

function Footer() {
    return (
        <>
        <footer className='py-5'>
            <div className="container">
                <div className="row py-5 gy-5">
                    <div className="col-sm-4 text-center">
                        <h2 className='text-uppercase fs-3'>location</h2>
                        <p>2215 John Daniel Drive</p>
                        <span>Clark, MO 65243</span>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h2 className='text-uppercase fs-3'>around the web</h2>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-solid fa-globe"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h2 className='text-uppercase fs-3'>about freelancer</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>
        </footer>
                <div className='copyright text-white text-center py-3'>
                    <p>Copyright © Your Website 2021</p>
                </div>
        
        </>
    )
}

export default Footer
