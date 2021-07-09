import React, { Component } from 'react'
// import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText,
    MDBCardImage 
} from 'mdb-react-ui-kit';
import profilePic from './profile.jpg';
export class Navigation extends Component {
    render() {
        return (
            <>
<header>
      <MDBNavbar expand='lg' className='navy'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div className='p-5 text-center navy'>
        {/* <h1 className='mb-3'>Heading</h1
        > */}
        <MDBRow>
        <MDBCol  className='col-md-4 offset-md-1'>
            <MDBCard>
                
                <MDBCardImage src={profilePic} className='img-fluid rounded profile' />
               
            </MDBCard>
            
        {/* <img
          
          className='img-fluid rounded'
          alt=''
        /> */}
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
    </>
        )
    }
}

export default Navigation
