import React, {useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Register(props) {

    const [NameValue, setNameValue] = useState("");
    const [EmailValue, setEmailValue] = useState("");
    const [PasswordValue, setPasswordValue] = useState("");
    const [PasswordCheckValue, setPasswordCheckValue] = useState("");
    const [MobileValue, setMobileValue] = useState("");
    const [CountryValue, setCountryValue] = useState("");


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




    const onSubmit = async (e) => {
        e.preventDefault();

        if (!NameValue || !EmailValue || !PasswordValue || !PasswordCheckValue || !MobileValue || !CountryValue) {
            return alert('Fill all the fields first !');
        }

        if (PasswordValue.length < 5)
            return alert('Password needs to be at least 5 character long');

        if (PasswordValue !== PasswordCheckValue)
            return alert('Please Check your password');

        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(EmailValue))){
            return alert('Please Check you Email Address !');
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
                //console.log(res.data)
            })
            .catch(err => {
                // alert('Error from client: ' + err);
                alert("Sorry!, Please check your inserted data... TRY AGAIN!");
            });

    };


    return(
        <div className="container pt-3 mt-3 mb-5 " >
            <div className="card card-body my-0 bg-light">
                <form onSubmit={onSubmit}>

                    <div className="row">
                        <div className="col-md-2"/>
                        <div className="col-md-8">
                            <h2 className="text-capitalize text-center mt-3 mb-2">Register</h2>
                            <br/>

                            <label style={{ textAlign: 'left' }}>Your Name : </label>
                            <input id="displayName" type="text" className="form-control text-capitalize"
                                   maxLength="30"
                                   placeholder="Enter your Name"
                                   onChange={onNameChange}
                                   value={NameValue} />
                            <br />
                            <label>Your Email : </label>
                            <input id="email" type="email" className="form-control "
                                   maxLength="50"
                                   placeholder="Enter your Email"
                                   onChange={onEmailChange}
                                   value={EmailValue} />
                            <br/>
                            <label>Password : </label>
                            <input id="password" type="password" className="form-control "
                                   maxLength="20"
                                   placeholder="Enter Password"
                                   onChange={onPasswordChange}
                                   value={PasswordValue} />
                            <br />

                            <label>Confirm Password : </label>
                            <input id="passwordCheck" type="password" className="form-control "
                                   maxLength="20"
                                   placeholder="Re-Enter Password"
                                   onChange={onPasswordCheckChange}
                                   value={PasswordCheckValue} />
                            <br />
                            <label className="label-form">Mobile No. : </label>
                            <input id="displayName" type="number" className="form-control text-capitalize"
                                   maxLength="10"
                                   placeholder="Enter mobile number"
                                   onChange={onMobileChange}
                                   value={MobileValue} />
                            <br />
                            <label>Country : </label>
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