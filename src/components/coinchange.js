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
            code:[],
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

        var code=[]
        var cx=300,cy=50;
        code.push(<Text id="c1" text="sort(denomination);" x={cx} y={cy} fontSize={20} fill='green'/>);
        code.push(<Text id="c2" text="for(int i=n-1;i>denomination.length;i--){" x={cx} y={cy+25} fontSize={20} />);
        code.push(<Text id="c3" text="       while(Amount>=denomination[i]){" x={cx} y={cy+50} fontSize={20} />);
        code.push(<Text id="c4" text="           V -= denomination[i];" x={cx} y={cy+75} fontSize={20} />);
        code.push(<Text id="c5" text="           ans.add(denomination[i]);" x={cx} y={cy+100} fontSize={20} />);
        code.push(<Text id="c6" text="       }" x={cx} y={cy+125} fontSize={20} />);
        code.push(<Text id="c7" text=" }" x={cx} y={cy+150} fontSize={20} />);
        
        
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
            msg2: "Denominations Available",
            code:code

        })


    }
    // sort(denomination)
    // for(int i=n-1;i>denomination.length;i--)
    // {
    //     while(Amount>=denomination[i])
    //     {
    //         V -= denomination[i] 
    //         ans.add(denomination[i])
    //     }
    // }

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

         var i = this.state.i;
        var b="for(int i="+i+";i>denomination.length;i--){";
        let newcode = this.state.code.map((item, idx) => {
            if (item.props.id == "c2") {
                return <Text id={item.props.id} text={b} x={item.props.x} y={item.props.y} fontSize={20} fill='red'/>;
            }
            else
            return <Text id={item.props.id} text={item.props.text} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;

        })
        let newdenominationanimate = this.state.denominationanimate.map((item, idx) => {

            if (idx == this.state.i) {
                return <div style={styles.rectangle}>{deno[this.state.i]}</div>;
            }
            else
                return item;

        })

        this.setState({
            denominationanimate: newdenominationanimate,
            code:newcode
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

       
        var c="       while(Amount>=denomination[i]){";

        let newcodefor = this.state.code.map((item, idx) => {
          
           if(item.props.id == "c3")
            {
                return <Text id={item.props.id} text={c} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;
            }
            else
            return item;

        })
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
            let newcode = newcodefor.map((item, idx) => {
                if (item.props.id == "c4" ) {
                   
                    return <Text id={item.props.id} text="           V -= denomination[i];" x={item.props.x} y={item.props.y} fontSize={20} fill='red'/>;
                }
                else if(item.props.id == "c5")
                {
                    return <Text id={item.props.id} text="           ans.add(denomination[i]);" x={item.props.x} y={item.props.y} fontSize={20} fill='red'/>;
                }
                else
                return <Text id={item.props.id} text={item.props.text} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;


            })
           

            this.setState({
                amountanimate: newamountanimate,
                code:newcode
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
             {/* <div style={{ height: "400px", width:"600px", borderStyle:"solid" ,marginLeft: "450px"}}> <img src={Image}/></div> */}
             <div style={{ marginLeft: "30%"}} >
             <Stage width={700} height={300}>
                        <Layer id="layer">
                           
                            {this.state.code}
                        </Layer>
                    </Stage>
          </div>
            </div>
            </ div >
                );
    }
}


export default CoinChange;