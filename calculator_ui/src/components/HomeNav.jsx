// import React from 'react';
// import { Container, Navbar } from 'react-bootstrap';
// import ivisImg from '../Assets/ivis.png';

// function HomeNav() {
//   return (
//     <>
//       <Navbar className="bg-info">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt="logo"
//               src={ivisImg}
//               width="100"
//               height="50"
//               className="d-inline-block align-top"
//               style={{ marginRight: '10px' }}
//             />
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default HomeNav;


import React from 'react';
import {  Container,  Navbar } from 'react-bootstrap';
import ivisImg from '../Assets/ivis.png';

function HomeNav() {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      
        <Navbar.Brand href="#home">
          <img
            src={ivisImg}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
          
        </Navbar.Brand>
        
        <center>
            
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Storage And Bandwidth Calculator</p>
          
          </center>
      
    </Navbar>



  );
}

export default HomeNav;
