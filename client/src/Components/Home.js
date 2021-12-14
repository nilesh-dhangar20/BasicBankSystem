import React from 'react'

import bank from "../bank_image2.jpg";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="home_page">
                <div className="row">
                    <div className="col mt-5 ms-md-3 text-center">
                        <h1>Welcome to  SparkFoundation</h1>
                        <p>
                            It offers a wide range of banking products and financial services for
                            corporate and retail customers through a variety of delivery channels
                            and specialised subsidiaries in the areas of investment banking, life,
                            non-life insurance, venture capital and asset management. The bank has a
                            network of 5,275 branches and 15,589 ATMs across India and has a
                            presence in 17 countries. TSF Bank is one of the Big banks of India. The
                            bank has subsidiaries in the United Kingdom and Canada; branches in
                            United States, Singapore, Bahrain, Hong Kong, Qatar, Oman, Dubai
                            International Finance Centre, China and South Africa; as well as
                            representative offices in United Arab Emirates, Bangladesh, Malaysia and
                            Indonesia. The company's UK subsidiary has also established branches in
                            Belgium and Germany
                        </p>
                        <div className="row home_btn">
                            <div className="col">
                                <Link to="/transactions"><button className="btn btn-success">transactions</button>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/customers"><button className="btn btn-success">customer</button>
                                </Link></div>
                        </div>
                    </div>
                    <div className="col mt-5">
                        <img src={bank} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
