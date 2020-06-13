import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
//import './StylesProduct.css';
import '../../index.css';

const Package  = props => (
    <tr>
        <td>{props.package.name}</td>
        <td>{props.package.noOfDays}</td>
        <td>{props.package.noOfPeople}</td>
        <td>{props.package.remarks}</td>
        <td>
            <Link to={"/package/edit/"+props.package._id}>Edit</Link>
        </td>
    </tr>
);

class MyPackages extends Component{

    constructor(props) {
        super(props);
        this.state = {
            packages: [],
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/packages/packagebyuser/' + localStorage.getItem('user-id'))
            .then(response => {
                this.setState({packages: response.data.package});
                //console.log(this.state.packages)
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     Axios.get('http://localhost:5000/api/packages/packagebyuser/' + localStorage.getItem('user-id'))
    //         .then(response => {
    //             this.setState({packages: response.data.package});
    //             console.log(this.state.packages)
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         })
    // }

    packageList() {
        return this.state.packages.map(function(currentPackage, index){
            return <Package package={currentPackage} key={index} />
        })
    }

    nextUploadPath() {
        this.props.history.push('/package/upload');
    }


    render() {


        return (
            <>
                <div style={{ width: '80%', margin: '3rem auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>My Packages  <span className="fas fa-air-freshener"></span></h2>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Package List</h3>
                        </div>
                        <div className="col-md-5"><p> </p></div>
                        <div className="col-md-4" style={{justifyContent: 'right'}}>
                            <button className="btn btn-primary" id="btnAddNewPackage" onClick={() => this.nextUploadPath('/package/upload')}><i className="fa fa-plus"></i> Add New Package</button>
                        </div>
                    </div>

                    <table className="table table-striped table100" style={{ marginTop: 20 }}>
                        <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>No of Days</th>
                            <th>No of People</th>
                            <th>Remarks</th>
                            <th className="ActionHead">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.packageList() }
                        </tbody>
                    </table>
                </div>

            </>
        )
    }

}

export default MyPackages;