import React, { Component } from 'react';
import Navigation from './Navigation';
import {    
    MDBCol,
    MDBRow,
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText,
    MDBCardImage 
} from 'mdb-react-ui-kit';
import profilePic from './profile.jpg';
export class Header extends Component {
    render() {
        return (
            <header>
                <Navigation/>
                <div className='p-5 text-center navy'>
                    <MDBRow>
                        <MDBCol  className='col-md-4 offset-md-1'>
                            <MDBCard>
                            <MDBCardImage src={profilePic} className='img-fluid rounded profile' />
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6' className='col-md-6'>
                            <MDBCard className='bio'>
                                <MDBCardBody>
                                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                                    <MDBCardText>
                                    With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBCardText>
                                    With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBCardText>
                                    With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBCardText>
                                    With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBCardText>
                                    With supporting text below as a natural lead-in to additional.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>                
            </header>
        )
    }
}

export default Header
