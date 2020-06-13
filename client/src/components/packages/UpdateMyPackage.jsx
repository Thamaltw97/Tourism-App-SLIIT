import React, {Component} from "react";
import Axios from "axios";
import SiteLoading from "../siteloading/SiteLoading";

class UpdateMyPackage extends Component{

    constructor(props) {
        super(props);

        this.onNoOfDaysChange = this.onNoOfDaysChange.bind(this);
        this.onNoOfPeopleChange = this.onNoOfPeopleChange.bind(this);
        this.onRemarksChange = this.onRemarksChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            name: '',
            noOfDays: 0,
            noOfPeople: 0,
            remarks: '',
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        Axios.get('http://localhost:5000/api/packages/' + this.props.match.params.id)
            .then(response => {
                //console.log(response.data.name)
                this.setState({
                    name: response.data.name,
                    noOfDays: response.data.noOfDays,
                    noOfPeople: response.data.noOfPeople,
                    remarks: response.data.remarks,
                    isLoading: false
                });
            })
            .catch(function (err) {
                console.log(err);
                this.setState({
                    isLoading: false
                });
            })
    }


    onNoOfDaysChange(e) {
        this.setState({
            noOfDays: e.target.value
        });
    }

    onNoOfPeopleChange(e) {
        this.setState({
            noOfPeople: e.target.value
        });
    }

    onRemarksChange(e) {
        this.setState({
            remarks: e.target.value
        });
    }


    onUpdate(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        console.log(this.state.noOfDays);
        const obj = {
            noOfDays: this.state.noOfDays,
            noOfPeople: this.state.noOfPeople,
            remarks: this.state.remarks
        };
        Axios.put('http://localhost:5000/api/packages/update/' + this.props.match.params.id, obj)
            .then(res => {
                alert(res.data);
                this.props.history.push('/mypackages');
                this.setState({
                    isLoading: false
                });
            })
            .catch(err => {
                console.log('Error from client: ' + err);
                this.setState({
                    isLoading: false
                });
            });

    }

    onDelete(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        Axios.delete('http://localhost:5000/api/packages/delete/' + this.props.match.params.id)
            .then(res => {
                alert(res.data);
                this.props.history.push('/mypackages');
                this.setState({
                    isLoading: false
                });
            })
            .catch(err => {
                console.log('Error from client: ' + err);
                this.setState({
                    isLoading: false
                });
            });

    }


    render() {

        if (this.state.isLoading) {
            return <SiteLoading />
        }

        return (
            <>

                <div className="container pt-3 mt-3 mb-5" >
                    <div className="card card-body my-0 bg-light">
                        <form onSubmit={this.onUpdate}>

                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <h2 className="text-capitalize text-center mt-3 mb-2">Edit My Package</h2>
                                    <br/>
                                    <br />

                                    <label>Package Name : </label>
                                    <input id="days" type="text" className="form-control"
                                           maxLength="20"
                                           value={this.state.name} disabled/>
                                    <br />

                                    <label>No. of Days : </label>
                                    <input id="days" type="number" className="form-control"
                                           maxLength="20"
                                           placeholder="Enter number of days"
                                           onChange={this.onNoOfDaysChange}
                                           value={this.state.noOfDays} />
                                    <br />

                                    <label>No. of People : </label>
                                    <input id="people" type="number" className="form-control"
                                           maxLength="20"
                                           placeholder="Enter number of people"
                                           onChange={this.onNoOfPeopleChange}
                                           value={this.state.noOfPeople} />
                                    <br />

                                    <label>Remarks : </label>
                                    <textarea id="people" type="text" className="form-control"
                                              maxLength="100"
                                              placeholder="Enter remarks"
                                              onChange={this.onRemarksChange}
                                              value={this.state.remarks} />
                                    <br />

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-block btn-primary mt-3"
                                            id="btnUpdate"
                                            onClick={this.onUpdate}
                                    >Update</button>
                                </div>
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-block btn-danger mt-3"
                                            id="btnDelete"
                                            onClick={this.onDelete}
                                    >Delete Product</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </>
        )
    }

}

export default UpdateMyPackage;
