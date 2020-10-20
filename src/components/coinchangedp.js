import React from 'react';
import Konva from 'konva';
import Image from './Screenshot (544).png'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class CoinChangeDp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            V: 0,
            deno: [],
            ans: [],
            denominationanimate: [],
            amountanimate: [],
            dp: [],
            i: 0,
            j: 0,
            message: "",
            result: 0,
            flag:false



        };
    }
    start(deno, V) {

        var d = [];
        var a = [];
        this.setState({
            deno: deno,
            V: V,
        })

        var rx = 150, ry = 100;
        var ii = 1
        for (var i = 0; i <= deno.length; i++) {
            for (var j = 0; j <= V + 1; j++) {

                if (i == 0 && j != 0) {

                    d.push(<Rect id={ii} x={rx} y={ry} width={50} height={50} fill="rgb(196,98,16)" stroke="black" strokeWidth={4} />);
                    d.push(<Text id={ii} text={j - 1} x={rx + 25} y={ry + 25} fontSize={20} />);
                }
                else if (j == 0) {

                    d.push(<Rect id={ii} x={rx} y={ry} width={50} height={50} fill="rgb(196,98,16)" stroke="black" strokeWidth={4} />);
                    d.push(<Text id={ii} text={deno[i - 1]} x={rx + 25} y={ry + 25} fontSize={20} />);
                }
                else {
                    var id = (i - 1) + " " + (j - 1);
                    d.push(<Rect id={id} x={rx} y={ry} width={50} height={50} fill="orange" stroke="black" strokeWidth={4} />);
                    // d.push(<Text text={id} x={rx + 25} y={ry + 25} fontSize={20} />);
                }


                rx = rx + 50;
            }
            ry = ry + 50;
            rx = 150;
        }

        d.push(<Text id={ii} text="Amount" x={200} y={70} fontSize={20} />);
        d.push(<Text id={ii} text="Denomination" x={0} y={150} fontSize={20} />);
        var b = [];
        for (var i = 0; i < deno.length; i++) {
            b[i] = [];
        }
        //console.log(b);
        this.setState({
            denominationanimate: d,
            dp: b,

        })


    }

    algo() {

        var i = this.state.i;
        var j = this.state.j;
        var dp = this.state.dp;
        
console.log("----"+i+"-"+j+"-----")
        if (this.state.flag) {
            this.completed();
            return;
        }
        if (i == 0 || j == 0) {
            dp[i][j] = j;
            var index1 = i + " " + j;
            var rx, ry
            let newbox = this.state.denominationanimate.map((item, idx) => {
                if (item.props.id == index1) {
                    rx = item.props.x;
                    ry = item.props.y;

                }
                return item


            })
            var ii = 1
            newbox.push(<Text id={ii} text={dp[i][j]} x={rx + 25} y={ry + 25} fontSize={20} />);
            this.setState({
                denominationanimate: newbox
            })


        }
        else {
            if ((j - parseInt(this.state.deno[i])) < 0) {
                dp[i][j] = dp[i - 1][j];
                var index1 = i + " " + j;
                var index2 = (i - 1) + " " + (j);
                var rx, ry;
                let newbox = this.state.denominationanimate.map((item, idx) => {
                    if (item.props.id == index2) {

                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="MediumSeaGreen" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id == index1) {
                        rx = item.props.x;
                        ry = item.props.y;
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="rgb(0, 153, 255)" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id != 1)
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="orange" stroke="black" strokeWidth={4} />;

                    else
                        return item;

                })
                var ii = 1
                newbox.push(<Text id={ii} text={dp[i][j]} x={rx + 25} y={ry + 25} fontSize={20} />);
                this.setState({
                    denominationanimate: newbox
                })


            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - parseInt(this.state.deno[i])] + 1);

                var index1 = i + " " + j;
                var index2 = (i - 1) + " " + j;
                var index3 = i + " " + (j - parseInt(this.state.deno[i]));
                var rx, ry;
                let newbox = this.state.denominationanimate.map((item, idx) => {
                    if (item.props.id == index2) {

                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="MediumSeaGreen" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id == index1) {
                        rx = item.props.x;
                        ry = item.props.y;
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="rgb(0, 153, 255)" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id == index3) {
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="MediumSeaGreen" stroke="black" strokeWidth={4} />;
                    }

                    else if (item.props.id != 1)
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="orange" stroke="black" strokeWidth={4} />;

                    else
                        return item;
                })
                var ii = 1
                newbox.push(<Text id={ii} text={dp[i][j]} x={rx + 25} y={ry + 25} fontSize={20} />);

                this.setState({
                    denominationanimate: newbox
                })

            }
        }



        var flag;
        
        if (j == this.state.V) {

            i = i + 1;
            j = -1;
            if(i==this.state.deno.length)
            {
                flag=true;
                this.setState({
                    result: dp[i - 1][this.state.V],
    
                })
            }

        }




        this.setState({
            j: j + 1,
            i: i,
            dp: dp,
            flag:flag,

        })


    }

    completed() {
        // this.setState({ message: "Minimum coins"+this.state.dp[this.state.i-1][this.state.V] })
        this.setState({ message: "Minimum coins" + this.state.result })
    }
    play() {

        // if (this.state.i == this.state.deno.length) {
        //     console.log("i" + this.state.i);
        //     this.completed();
        // }
        // else {
            this.algo()
        // }

        setTimeout(() => {
            if (this.state.i <= this.state.deno.length)
                this.play();
        }, 200);

    }




    render() {

        return (
            <div style={{ width: "100%" }} >
                <button onClick={() => this.start(this.props.denomination, this.props.amount)}>start</button>
                <button onClick={() => this.algo()}>step</button>

                <button onClick={() => this.play()}>play</button>

                <br />

                <div style={{ marginLeft: "50px" }}>
                    <h3>{this.state.message}</h3>

                    <Stage width={1600} height={800}>
                        <Layer id="layer">
                            {this.state.denominationanimate}
                        </Layer>
                    </Stage>
                </div>




            </div>

        );
    }
}


export default CoinChangeDp;