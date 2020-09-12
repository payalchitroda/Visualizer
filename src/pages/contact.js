import React from 'react';
import './contact.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    data(n, e, m) {
        console.log(n + " " + e + " " + m);
    }

    render() {
        let n, e, m;
        return (
            <div style={{height: "670px" }}>
                <br/>  <br/>  <br/>
                <h3 style={{marginLeft: "860px"}}>Contact Us</h3>
                <br/>
        <div style={{  borderStyle:"inset", width:"20%" ,backgroundColor: "LightGray", marginLeft:"750px",padding:"40px"}}>
            
                <div class="row">
                    <div class="column">
                        Name<br/><br/>
                        Email<br/><br/>
                        Message<br/><br/><br/><br/><br/><br/>
  
                    </div>
                    <div class="column">
                        <input type="text" size="25" required ref={node => { n = node; }} /><br /><br/>
                        <input type="text" size="25" required ref={node => { e = node; }} /><br /><br/>
                        <textarea rows="4" cols="28" required ref={node => { m = node; }} />
                        
                    </div>
                    <button class="button1" onClick={() => { this.data(n.value, e.value, m.value); n.value = ''; e.value = ''; m.value = ''; }}> 
                            Submit
                </button>
                </div>
                </div>


            </div>
        );

    }
}
export default Contact;