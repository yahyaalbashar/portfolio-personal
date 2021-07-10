import React, { Component } from 'react';
import Navigation from './Navigation';
import {    
    MDBCol,
    MDBRow,
    MDBCard, 
    MDBCardBody, 
    MDBCardText,
    MDBCardImage 
} from 'mdb-react-ui-kit';
import profilePic from './profile.jpg';
export class Header extends Component {
    render() {
        return (
            <header>
                <Navigation/>
                {/* <NavSearch/> */}
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
                                     <h1 className="card-title">Yahya Albashar</h1>
                                    <MDBCardText>
                                    Software developer, freelancer and coding instructor.
                                    </MDBCardText>
                                    <MDBCardText>
                                    Tech stack:<b> Python, Django, Django rest-franework, html, JS and css.
                                    Frontend libraries: Jquery, ReactJS.</b>
                                    </MDBCardText>
                                    <MDBCardText>
                                     <ul>
                                         <li>Instructor at <b><a href='https://www.facebook.com/ASAC.LTUC'>LTUC-ASAC Amman</a></b>-Jordan.</li>
                                         <li>Teaching <a href='https://www.codefellows.org/'>codefellows</a> curriculum for software development.</li>
                                         <li>Backend engineer and consultant at <a href="https://ahlifintech.com/"> Ahli-FinTech.</a></li>
                                         <li>Full-stack web developer at <a href="https://rofancare.com"> Rofancare.</a></li>
                                     </ul>
                                    </MDBCardText>
                                     <h3>Reach out on: <a href="https://github.com/yahyaalbashar">Github</a>,<a href="https://twitter.com/yahyaalbashar"> Twitter.</a></h3>
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
