import React, {Component} from 'react';
import Img1 from "../images/sri-lanka-eta-visa.jpg";
import Img2 from "../images/vatadage-temple-polonnaruwa_orig.jpg";
import Img3 from "../images/sigiriya-rock-fortress_1_orig.jpg";
import Img4 from "../images/kandy-street_1_orig.jpg";
import Img5 from "../images/gangaramaya-temple-colombo-670x447_orig.jpg";
import Img6 from "../images/temple-of-the-scared-tooth_1_orig.jpg";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: [],
            name: localStorage.getItem('user-name')
        };

    }

    render() {
    console.log(this.state.name)
        return (

            <div id="packages">

                <div className="container my-3 py-3 text-center">

                    <div className="row mb-5">
                        <div className="col">
                            <h1>Tourism in Sri Lanka</h1>
                            <p>Find travel ideas for planning your holiday to Sri Lanka. Discover things to see and do, places to stay and more..</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img1} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Southern Beach Site</h3>
                                    <p>Sri Lanka is a tropical island and the coastal areas offer tourists some of the best beach holidays in Sri Lanka.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img2} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Ancient Capital Tour</h3>
                                    <p>The city, now a World Heritage site, was the centre of Theravada Buddhism for many centuries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img3} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Fortress In The Sky Tour</h3>
                                    <p>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><br /><br />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img4} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Colombo and Kandy</h3>
                                    <p>If you’re planning a trip to Sri Lanka, Colombo and Kandy will almost certainly be on your radar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img5} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Discover Sri Lanka</h3>
                                    <p>Explore ruins and archaeological sites with local experts, take in a lecture on elephant conservation etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-success">
                                <div className="card-body">
                                    <img src={Img6} alt="" className="img-fluid rounded-circle w-75 mb-3"></img>
                                    <h3>Cultural and Heritage</h3>
                                    <p>The culture of Sri Lanka mixes modern elements with traditional aspects and is known for its regional diversity.</p>
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