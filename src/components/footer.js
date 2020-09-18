import React from 'react';
import './footer.css';
import { MDBIcon, MDBContainer } from 'mdbreact';
function Footer() {

  return (
    <div style={{ backgroundColor: "rgb(100, 100, 100)", height: "100px" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<div style={{ textAlign: "center"}} >
      <a href="https://www.facebook.com/payal.chitroda.3/" class="fa fa-facebook"></a>
      <a href="https://github.com/payalchitroda" class="fa fa-github"></a>
      <a href="https://www.linkedin.com/in/payal-chitroda/" class="fa fa-linkedin"></a>
      <a href="#" class="fa fa-instagram"></a>
</div>
    </div>
  );

}

export default Footer;