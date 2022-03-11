import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';
import bg7 from '../images/bg-image-5.jpg';
const Service = () => {
const [post, setpost] = useState([])

useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=> {
        setpost(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
},[])
  return (
    <section>
      <div className='comn_mbr' style={{backgroundImage: (`url(${bg7})`)}}></div>
        <Container>
            <Row className='my-5'>
              {post.map(data=>(
                   <Col md='6'>
                      <ul>
                        <li key={data.id}>
                            <span>{data.name}</span>
                          </li>
                      </ul>
                   </Col>
              ))}
             
            </Row>
        </Container>
    </section>
  )
}

export default Service;