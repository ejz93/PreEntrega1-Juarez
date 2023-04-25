import React, { Fragment } from 'react'
import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'

const Container = (props) => {
  return (
    <Fragment>
      <NavBar className={"navbar navbar-expand-lg navbar-light bg-warning"} navbarLogo={'Elementary'} />
      {/*Aca va contenido dinamico*/}
      {props.children}
      <Footer/>

    </Fragment>
  )

}

export default Container