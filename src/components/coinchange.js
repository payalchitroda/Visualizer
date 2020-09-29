import React from 'react';
import Konva from 'konva';
import Image from './Screenshot (544).png'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class CoinChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            V: 0,
            deno: [],
            ans: [],
            i: 0,
            denominationanimate: [],
            amountanimate: [],
            flag: false,
            message: "",
            msg1: "",
            msg2: "",
            msg3: "",

        };
    }
    start(deno, V) {

        var d = [];
        var a = [];
        this.setState({
            deno: deno,
            V: V,
            i: deno.length - 1
        })
        console.log("length" + this.state.i)
        const styles = {
            rectangle: {
                display: 'inline-block',
                width: '50px',
                height: '50px',
                background: 'orange',
                borderStyle: 'solid',
                textAlign: 'center',
                padding: '10px 0'
            }
        }

        a.push(<div style={styles.rectangle}>{V}</div>)
        for (var i = 0; i < deno.length; i++) {
            d.push(<div style={styles.rectangle}>{deno[i]}</div>);
        }
        this.setState({
            denominationanimate: d,
            amountanimate: a,
            msg1: "Amount Left",
            msg2: "Denominations Available"

        })


    }

    findMin(deno, V) {
        console.log("outer loop   " + "V" + V + "   deno" + deno[this.state.i])
        console.log("i" + this.state.i)
        const styles = {
            rectangle: {
                display: 'inline-block',
                width: '50px',
                height: '50px',
                background: 'rgb(0, 153, 255)',
                borderStyle: 'solid',
                textAlign: 'center',
                padding: '10px 0'
            }
        }
        let newdenominationanimate = this.state.denominationanimate.map((item, idx) => {

            if (idx == this.state.i) {
                return <div style={styles.rectangle}>{deno[this.state.i]}</div>;
            }
            else
                return item;

        })

        this.setState({
            denominationanimate: newdenominationanimate
        })

        

        if (V >= deno[this.state.i]) {
            console.log("V" + V + "   deno" + deno[this.state.i])
            this.setState({ flag: !this.state.flag })
        }
        else {
            this.setState({
                i: this.state.i - 1,
            })
            // this.findMin(deno, V)

        }
        if (this.state.V != 0 && this.state.i == -1) {
            return this.completed("no solution");
        }
        else if (this.state.i == 0 && this.state.V == 0) {
            return this.completed("completed");
        }

    }

    findMinInnerLoop(deno, V) {
        console.log("inner loop")
        console.log("V" + V + "   deno" + deno[this.state.i])
        var a = []
        // var ans = this.state.ans;
        if (V >= deno[this.state.i]) {
            const styles = {
                rectangle: {
                    display: 'inline-block',
                    width: '50px',
                    height: '50px',
                    background: 'MediumSeaGreen',
                    borderStyle: 'solid',
                    textAlign: 'center',
                    padding: '10px 0'
                }
            }
            a.push(<div style={styles.rectangle}>{deno[this.state.i]}</div>);
            var ans = a.concat(this.state.ans);


            this.setState({
                V: V - deno[this.state.i],
                ans,
                msg3: "Denomination used"
            })
            let newamountanimate = this.state.amountanimate.map((item, idx) => {
                if (idx == 0) {
                    return <div style={item.props.style}>{V - deno[this.state.i]}</div>;
                }

            })
           

            this.setState({
                amountanimate: newamountanimate
            })
            console.log(this.state.ans)
        }

        if (this.state.V < deno[this.state.i]) {
            this.setState({
                i: this.state.i - 1,
                flag: !this.state.flag
            })
        }
        if (this.state.V != 0 && this.state.i == -1) {
            return this.completed("no solution");
        }
        else if (this.state.i == 0 || (this.state.V- deno[this.state.i])==0) {
            return this.completed("completed");
        }
    }

    decide(deno, V) {

        if (this.state.flag == true) {
            return this.findMinInnerLoop(deno, V);
        }
        else {
            return this.findMin(deno, V)
        }
    }
    play(deno, V) {
        
            if (this.state.flag == true) {
                this.findMinInnerLoop(deno, V);
            }
            else {
                this.findMin(deno, V)
            }
         
          setTimeout(() => {
              if(this.state.i>=0)
          this.play(this.state.deno,this.state.V);
        }, 2000);
        
    }
    completed(s) {

        
        this.setState({ message: s })
    }

    render() {
        const styles = {
            rectangle: {
                display: 'inline-block',
                width: '50px',
                height: '50px',
                background: 'orange',
            }
        }
        return (
            <div style={{ width: "100%" }} >
                <button onClick={() => this.start(this.props.denomination, this.props.amount)}>start</button>
                <button onClick={() => this.decide(this.state.deno, this.state.V)}>step</button>
                <button onClick={() => this.play(this.state.deno, this.state.V)}>play</button>
                <br />
                <div style={{ width: "60%", float: "left" }} >
                    <div style={{ marginLeft: "300px" }}>
                        <h3>  {this.state.msg1}</h3>
                        <br />
                        {this.state.amountanimate}
                    </div>
                    <br />
                    <br />
                    <div style={{ marginLeft: "300px" }}>
                        <h3> {this.state.msg2}</h3>
                        <br />
                        {this.state.denominationanimate}
                    </div>
                    <br />
                    <br />
                    <div style={{ marginLeft: "300px" }}>
                        <h3 > {this.state.msg3}</h3>
                        <br />
                        {this.state.ans}
                    </div>
                    <br />
                    <div style={{ marginLeft: "300px" }}>
                        <h3>  {this.state.message}</h3>
                    </div>
                </div>
                <div style={{ marginLeft: "40%"}} >
               <p style={{ fontSize: "20px"}}> <b>The coin change problem is finding the minimum number of coins from certain denominations that add up to a given amount of money
              </b> </p>     <h2 style={{ textAlign: "center"}}><b>Algorithm</b></h2>
             <div style={{ height: "400px", width:"600px", borderStyle:"solid" ,marginLeft: "450px"}}> <img src={Image}/></div>
            </div>
            </ div >
                );
    }
}


export default CoinChange;