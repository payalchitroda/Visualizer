import React from 'react';

import './contact.css';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    onSubmit(event){
        
            let query = `&entry.1238625935=${event.target.name.value}&entry.941955885=${event.target.email.value}&entry.1797898034=${event.target.message.value}`;
            let url = `https://docs.google.com/forms/d/1VuGYBKFjIxt5Nn1qsYQd_cWf5d9yc2EEwN01kkjV4AQ/formResponse?${query}`;
            
            fetch(url, {
                mode: "no-cors"
            }).then((res) => {
              
            });
        alert("Successfully sent data");
       

       
    }

    render() {
        let n, e, m;

        return (

            <div style={{ height: "670px" }}>

                <br />  <br />  <br />
                <h3 style={{ marginLeft: "860px" }}>Contact Us</h3>
                <br />
                <div style={{ borderStyle: "inset", width: "20%", backgroundColor: "LightGray", marginLeft: "750px", padding: "40px" }}>
                <form name="form" id="form" ref={form => this.form = form} enctype="text/plain" target="hidden_iframe" onSubmit={this.onSubmit}>
                        <div class="row">
                            <div class="column">
                                Name<br /><br />
                        Email<br /><br />
                        Message<br /><br /><br /><br /><br /><br />

                            </div>
                            <div class="column">
                                <input type="text" id="entry.1238625935" name="name" size="25" required ref={node => { n = node; }} /><br /><br />
                                <input type="text" id="entry.941955885" name="email" size="25" required ref={node => { e = node; }} /><br /><br />
                                <textarea id="entry.1797898034" name="message"rows="4" cols="28" required ref={node => { m = node; }} />

                            </div>
                            <input type="submit" value="Send"/>

                        </div>
                        
                    </form>
                   
                </div>
                <iframe name="hidden_iframe" id="hidden_iframe" style={{display:"none"}} onload=""></iframe>


            </div>
           
        );

    }
}
export default Contact;