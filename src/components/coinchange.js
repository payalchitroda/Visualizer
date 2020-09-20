import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class CoinChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amountLeft: 0,
           
        };
    }

    findMin(deno,V) 
    {  var n = deno.length; 
        var ans= [];
        for (var i = n - 1; i >= 0; i--) 
        {  
            while (V >= deno[i])  
            { 
                V -= deno[i]; 
                ans.push(deno[i]); 
            } 
        }   
        for (var i = 0; i < ans.length; i++) 
        { 
          console.log(ans[i]);
        } 
    } 

    render() {
const styles={
    rectangle: {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        background:'orange',
      }
}
        return (
            <div>
                <div >
                    <button onClick={() => this.findMin(this.props.denomination, this.props.amount)}>start</button>
                    <div style={styles.rectangle} />
                </div>
            </div>
        );
    }
}


export default CoinChange;