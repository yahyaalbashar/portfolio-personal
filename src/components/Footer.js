import React, { Component } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'
// import Footer from 'react-bootstrap'
export class Footer extends Component {
    render() {
        return (
            <MDBFooter className='text-center text-lg-left' bgColor='dark' color='light' >
            <div className='text-center p-3 ' >
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a className='text-light' href='https://mdbootstrap.com/'>
                MDBootstrap.com
              </a>
            </div>
          </MDBFooter>
        )
    }
}

export default Footer
