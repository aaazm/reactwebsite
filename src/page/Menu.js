import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {MenuList} from "../helper/MenuList";
import bg4 from '../images/bg-image2.jpg';
import {NavLink} from "react-router-dom";
const Menu = () =>{
  return(
 
    <section className="menu">
          <div className="comn_mbr" style={{backgroundImage: `url(${bg4})`}}></div>
        <Container>
        <h1>menu list</h1>
           <Row>
             {MenuList.map((menuItem)=> {
               return(
        
                <Col md="3">
                <NavLink to='/'>
                <div className="crd">
                <img src={menuItem.image} />
                <h1>{menuItem.name}</h1>
                <p>{menuItem.price}</p>
                </div>
                </NavLink>
            </Col>
          
               )
               
             })}
             
           </Row>
        </Container>
    </section>
  )
}

export default Menu;

