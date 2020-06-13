import React, {useState} from "react";
import Axios from "axios";
import '../../index.css';
import SiteLoading from "../siteloading/SiteLoading";


const Packages = [
    { key: 1, value: "Southern Beach Site" },
    { key: 2, value: "Ancient Capital Tour" },
    { key: 3, value: "Fortress In The Sky Tour" },
    { key: 4, value: "Colombo and Kandy" },
    { key: 5, value: "Discover Sri Lanka" },
    { key: 6, value: "Cultural and Heritage" }
];

function RegPackage(props) {

    const [NameValue, setNameValue] = useState(1);
    const [NoOfDaysValue, setNoOfDaysValue] = useState();
    const [NoOfPeopleValue, setNoOfPeopleValue] = useState();
    const [RemarksValue, setRemarksValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const onNameChange = (e) => {
        setNameValue(e.currentTarget.value);
        console.log(NameValue);
    };

    const onNoOfDaysChange = (e) => {
        setNoOfDaysValue(e.currentTarget.value);
    };

    const onNoOfPeopleChange = (e) => {
        setNoOfPeopleValue(e.currentTarget.value);
    };

    const onRemarksChange = (e) => {
        setRemarksValue(e.currentTarget.value);
    };


    //Register to a package
    const onSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if(!NoOfDaysValue || !NoOfPeopleValue || !RemarksValue) {
            return alert('Fill all the fields first !');
        }

        const packObj = {
            name: NameValue,
            noOfDays: NoOfDaysValue,
            noOfPeople: NoOfPeopleValue,
            remarks: RemarksValue,
            packUserId: localStorage.getItem('user-id')
        };
        Axios.post('http://localhost:5000/api/packages/add', packObj)
            .then(res => {
                alert(res.data);
                props.history.push('/mypackages');
                setIsLoading(false);
            })
            .catch(err => {
                alert('Error from client: ' + err);
                setIsLoading(false);
            });

    };

    return(
        <div className="container pt-3 mt-3 mb-5 " >
            {isLoading && <SiteLoading />}
            <div className="card card-body my-0 bg-light">
                <form onSubmit={onSubmit}>

                    <div className="row div-login">
                        <div className="col-md-2"/>
                        <div className="col-md-8">
                            <h2 className="text-capitalize text-center mt-3 mb-2">Register for a Package</h2>
                            <br/>
                            <br />

                            <label>Package Name : </label>
                            <select className="form-control" onChange={onNameChange}>
                                {Packages.map(pack => (
                                    <option key={pack.key} value={pack.value}>
                                        {pack.value}
                                    </option>
                                ))}
                            </select>
                            <br/>
                            <label>No. of Days : </label>
                            <input id="days" type="number" className="form-control"
                                   maxLength="20"
                                   placeholder="Enter number of days"
                                   onChange={onNoOfDaysChange}
                                   value={NoOfDaysValue} />
                            <br />

                            <label>No. of People : </label>
                            <input id="people" type="number" className="form-control"
                                   maxLength="20"
                                   placeholder="Enter number of people"
                                   onChange={onNoOfPeopleChange}
                                   value={NoOfPeopleValue} />
                            <br />

                            <label>Remarks : </label>
                            <textarea id="people" type="text" className="form-control"
                                   maxLength="100"
                                   placeholder="Enter remarks"
                                   onChange={onRemarksChange}
                                   value={RemarksValue} />
                            <br />

                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <button type="submit" className="btn btn-block btn-primary mt-3 btn-signIn"
                                            id="btnSubmit"
                                            onClick={onSubmit}
                                    >Register Package</button>
                                </div>
                            </div>
                            <br/>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default RegPackage;