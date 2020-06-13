import React from 'react';
import { MDBFooter, MDBContainer } from "mdbreact";


const FooterHandler = () => {
    return(
        <MDBFooter color="blue" className="footer font-small pt-1 mt-2">
            <div className="footer-copyright text-center py-1">
                <MDBContainer fluid>
                    Made with ❤ by Thamal Wijetunge.
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}


export default FooterHandler;