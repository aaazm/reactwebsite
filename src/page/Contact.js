import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import bg6 from '../images/bg-image-4.jpg';

const Contact = () =>{
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(
          (result)=>{
            setIsLoaded(true);
            setItems(result)
          },
          (error)=>{
            setIsLoaded(true);
            setError(error);
          }
        )
      },[])
      if(error){
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div className="spin">
          <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </div>
      } else {
        return (
          <section className="data ">
             <div className="comn_mbr" style={{backgroundImage: `url(${bg6})`}}></div>
              <Container>
                <Row className='my-5'>
                {items.map(data=>(
                  <Col md='6'>
                    <div className="indata">
                        <ul>
                            
                              <li className="api_data d-flex flex-column border rounded shadow pt-3 pb-3" key={data.id}>
                                <span>{data.name}</span>
                                <span>{data.username}</span>
                                <span>{data.email}</span>
                                <span>{data.address.city}</span>
                              </li>
                            
                        </ul>  
                    </div>  
                  </Col>  
                   ))} 
                </Row>  
              </Container>  
          </section>
        );
      }
  // return(
  //   <section className="main">
  //     <div className="comn_mbr" style={{backgroundImage: `url(${bg6})`}}></div>
  //       <Container>
  //           <Row className='my-5'>
  //             <Col md='12'>
  //               <form className="row g-3">
  //                 <Col md="6">
  //                   <label for="inputEmail4" className="form-label">Email</label>
  //                   <input type="email" className="form-control" id="inputEmail4" />
  //                 </Col>
  //                 <Col md="6">
  //                   <label for="inputPassword4" className="form-label">Password</label>
  //                   <input type="password" className="form-control" id="inputPassword4" />
  //                 </Col>
  //                 <Col md="12">
  //                   <label for="inputAddress" className="form-label">Address</label>
  //                   <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  //                 </Col>
  //                 <Col md="12">
  //                   <label for="inputAddress2" className="form-label">Address 2</label>
  //                   <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  //                 </Col>
  //                 <Col md="6">
  //                   <label for="inputCity" className="form-label">City</label>
  //                   <input type="text" className="form-control" id="inputCity" />
  //                 </Col>
  //                 <Col md="4">
  //                   <label for="inputState" className="form-label">State</label>
  //                   <select id="inputState" className="form-select">
  //                     <option selected>Choose...</option>
  //                     <option>...</option>
  //                   </select>
  //                 </Col>
  //                 <Col md="2">
  //                   <label for="inputZip" className="form-label">Zip</label>
  //                   <input type="text" className="form-control" id="inputZip" />
  //                 </Col>
  //               <Col md="12">
  //                   <div className="form-check">
  //                     <input className="form-check-input" type="checkbox" id="gridCheck" />
  //                     <label className="form-check-label" for="gridCheck">
  //                       Check me out
  //                     </label>
  //                   </div>
  //                 </Col>
  //               <Col md="12">
  //                   <button type="submit" className="btn btn-primary">Sign in</button>
  //                 </Col>
  //             </form>
  //             </Col>
  //           </Row>
        
  //       </Container>
  //   </section>
    
  // )
}


export default Contact;