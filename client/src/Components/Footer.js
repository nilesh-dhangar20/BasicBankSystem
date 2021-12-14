import React from 'react'
import "../App.css";
const Footer = () => {
    return (
        <>
            <footer className=" footer bg-dark text-white text-center text-lg-start">

                <div className=" footer_link text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
                    © 2021 Copyright:
                    <a className="text-white" href="https://www.thesparksfoundationsingapore.org/">SparkFoundation</a>
                </div>

            </footer>
        </>
    )
}

export default Footer
