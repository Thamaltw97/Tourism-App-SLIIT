import React, {useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import SiteLoading from "../siteloading/SiteLoading";

function Register(props) {

    const [NameValue, setNameValue] = useState("");
    const [EmailValue, setEmailValue] = useState("");
    const [PasswordValue, setPasswordValue] = useState("");
    const [PasswordCheckValue, setPasswordCheckValue] = useState("");
    const [MobileValue, setMobileValue] = useState("");
    const [CountryValue, setCountryValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const onNameChange = (e) => {
        setNameValue(e.currentTarget.value);
    };

    const onEmailChange = (e) => {
        setEmailValue(e.currentTarget.value);
    };

    const onPasswordChange = (e) => {
        setPasswordValue(e.currentTarget.value);
    };

    const onPasswordCheckChange = (e) => {
        setPasswordCheckValue(e.currentTarget.value);
    };

    const onMobileChange = (e) => {
        setMobileValue(e.currentTarget.value);
    };

    const onCountryChange = (e) => {
        setCountryValue(e.currentTarget.value);
    };



    //onSubmit event for user registration
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!NameValue || !EmailValue || !PasswordValue || !PasswordCheckValue || !MobileValue || !CountryValue) {
            setIsLoading(false);
            return alert('Fill all the fields first !');
        }

        if (PasswordValue.length < 5) {
            setIsLoading(false);
            return alert('Password needs to be at least 5 character long');
        }

        if (PasswordValue !== PasswordCheckValue) {
            setIsLoading(false);
            return alert('Please Check your password');
        }

        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(EmailValue))){
            setIsLoading(false);
            return alert('Please Check you Email Address !');
        }

        if (MobileValue.length > 10) {
            setIsLoading(false);
            return alert('Mobile number should be 10 digits');
        }

        const userObj = {
            name: NameValue,
            email: EmailValue,
            password: PasswordValue,
            passwordCheck: PasswordCheckValue,
            mobile: MobileValue,
            country: CountryValue

        };

        Axios.post('http://localhost:5000/api/users/register', userObj)
            .then(res => {
                // alert(res.data.msg);
                alert("Successfully Registered!");
                props.history.push('/login');
                setIsLoading(false);
                //console.log(res.data)
            })
            .catch(err => {
                // alert('Error from client: ' + err);
                alert("Sorry!, Please check your inserted data... TRY AGAIN!");
                setIsLoading(false);
            });

    };


    return(
        <div className="container pt-3 mt-3 mb-5 " >
            {isLoading && <SiteLoading />}
            <div className="card card-body my-0 bg-light">
                <form onSubmit={onSubmit}>

                    <div className="row">
                        <div className="col-md-2"/>
                        <div className="col-md-8">
                            <h2 className="text-capitalize text-center mt-3 mb-2">Register</h2>
                            <br/><br />

                            <input id="displayName" type="text" className="form-control text-capitalize"
                                   maxLength="30"
                                   placeholder="Enter your Name"
                                   onChange={onNameChange}
                                   value={NameValue} />
                            <br />
                            <input id="email" type="email" className="form-control"
                                   maxLength="50"
                                   placeholder="Enter your Email"
                                   onChange={onEmailChange}
                                   value={EmailValue} />
                            <br/>
                            <input id="password" type="password" className="form-control "
                                   maxLength="20"
                                   placeholder="Enter Password"
                                   onChange={onPasswordChange}
                                   value={PasswordValue} />
                            <br />

                            <input id="passwordCheck" type="password" className="form-control "
                                   maxLength="20"
                                   placeholder="Re-Enter Password"
                                   onChange={onPasswordCheckChange}
                                   value={PasswordCheckValue} />
                            <br />
                            <input id="displayName" type="number" className="form-control text-capitalize"
                                   maxLength="10"
                                   placeholder="Enter mobile number"
                                   onChange={onMobileChange}
                                   value={MobileValue} />
                            <br />
                            <input id="displayName" type="text" className="form-control text-capitalize"
                                   maxLength="30"
                                   placeholder="Enter country"
                                   onChange={onCountryChange}
                                   value={CountryValue} />
                            <br />



                            <p>By creating an account you agree to our <Link>Terms & Privacy</Link>.</p>


                            <div className="row">
                                <div className="col-md-2"/>
                                <div className="col-md-8">
                                    <button type="submit" className="btn btn-block btn-primary mt-3 btn-signup"
                                            id="btnSubmit"
                                            onClick={onSubmit}
                                    >REGISTER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Register;