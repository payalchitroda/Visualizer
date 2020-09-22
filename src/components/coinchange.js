import React from 'react';
import Konva from 'konva';
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
            answeranimate:[]


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
            }
        }
        a.push(<div style={styles.rectangle}>{V}</div>)
        for (var i = 0; i < deno.length; i++) {
            d.push(<div style={styles.rectangle}>{deno[i]}</div>);
        }
        this.setState({
            denominationanimate: d,
            amountanimate: a
        })


    }

    findMin(deno, V) {
        console.log("outer loop   "+"V" + V + "   deno" + deno[this.state.i])
        console.log("i" + this.state.i)
        const styles = {
            rectangle: {
                display: 'inline-block',
                width: '50px',
                height: '50px',
                background: 'yellow',
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
            denominationanimate:newdenominationanimate
        })

        if (V >= deno[this.state.i]) {
            console.log("V" + V + "   deno" + deno[this.state.i])
            this.setState({ flag: !this.state.flag })
        }
        else
        {
            this.setState({
                i: this.state.i - 1,
            })
            this.findMin(deno, V)

        }
        if (this.state.i == -1) {
            return this.completed();
        }
        
    }

    findMinInnerLoop(deno, V) {
        console.log("inner loop")
        console.log("V" + V + "   deno" + deno[this.state.i])
        var ans = this.state.ans;
        if (V >= deno[this.state.i]) {
        ans.push(deno[this.state.i]);
        this.setState({
            V: V - deno[this.state.i],
            ans,
        })
    }
    let newamountanimate = this.state.amountanimate.map((item, idx) => {
        if (idx == 0) {
            return <div style={item.props.style}>{V}</div>;
        } 

    })

    this.setState({
        amountanimate: newamountanimate
    })
        if (this.state.V < deno[this.state.i]) {
            this.setState({
                i: this.state.i - 1,
                flag: !this.state.flag
            })
        }

        if (this.state.i == 0) {
            return this.completed();
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
    completed() {

        console.log("answer"+this.state.ans.length)
        for (var i = 0; i < this.state.ans.length; i++) {
            console.log(this.state.ans[i]);
        }
        this.setState({ message: "Completed!!!" })
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
            <div>
                <button onClick={() => this.start(this.props.denomination, this.props.amount)}>start</button>
                <button onClick={() => this.decide(this.state.deno, this.state.V)}>step</button>
                {this.state.message}
                <br />
                <br />
                <div style={{ marginLeft: "100px" }}>
                    {this.state.amountanimate}
                </div>
                <div style={{ marginLeft: "300px" }}>
                    {this.state.denominationanimate}
                </div>

            </div>
        );
    }
}


export default CoinChange;