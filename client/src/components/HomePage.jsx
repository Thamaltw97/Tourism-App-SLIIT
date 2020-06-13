import React, {Component} from 'react';
import Img1 from "../images/sri-lanka-eta-visa.jpg";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ["Elephant Safari","Sky Diving"]
        };

    }

    render() {


        return (

            <div id="packages">

                <div className="container my-3 py-5 text-center">

                    <div className="row mb-5">
                        <div className="col">
                            <h1>Tourism in Sri Lanka</h1>
                            <p>Find travel ideas for planning your holiday to Sri Lanka. Discover things to see and do, places to stay and more..</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img1} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Beach Side</h3>
                                    <p>Enjoy authentic Sri Lankan cuisine at the beach side cafes and party late in one of the best nightclubs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;