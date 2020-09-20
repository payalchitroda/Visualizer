// import React from 'react';
// import Konva from 'konva';
// import Kruskal from './kruskal.js';
// import { render } from 'react-dom';
// import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
// import { Button } from 'react-bootstrap';

// class Node extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       // a: props.numberofnodes,
//       // b: props.data,
//       graph: [],
//       lines: []
//     }
//     this.mount = this.mount.bind(this);
//   }


//   mount() {

// var a=this.props.numberofnodes
//     var cx = 0, cy1 = 100, w = 300, cy2 = 300, cy;
//     var flag = true;

//     console.log("a" + a);
//     var g = [];
//     for (var i = 0; i < a; i++) {
//       if (flag) {
//         cx = cx + w;
//         cy = cy1;
//       }
//       else {
//         cy = cy2;
//       }
//       flag = !flag;
//       this.g.push(<Circle id={i + 1} x={cx} y={cy} radius={50} fill="DarkGoldenRod" />);
//       this.g.push(<Text text={i + 1} x={cx} y={cy} fontSize={20} />);

//     }

// var b=this.props.data;
//     var l = [];
//     for (var i = 1; i <= b.length; i++) {
//       var index1 = (b[i - 1][0] - 1) * 2;
//       var index2 = (b[i - 1][1] - 1) * 2;
//       var weight = b[i - 1][2];
//       var a = this.state.graph[index1];
//       var c = this.state.graph[index2];
//       this.l.push(<Line points={[a.props.x, a.props.y, c.props.x, c.props.y]} stroke='black' strokeWidth={3} />)
//       var tx = ((a.props.x + c.props.x) / 2);
//       var ty = ((a.props.y + c.props.y) / 2);
//       this.l.push(<Text text={weight} x={tx} y={ty} fontSize={20} />)
//     }

//     this.setState({ graph: g, lines: l });
//   }
//   componentDidMount() {
//     this.mount();
//   }


//   render() {
//     return (

//       <div >
//         {/* <Kruskal nodes={this.state.a} connections={this.state.b} graph={this.state.graph} lines={this.state.lines}/> */}
// {this.state.graph}
// {this.state.lines}
//       </div>
//     );

//   }
// }


// export default Node;

import React, { useState } from 'react';
import Konva from 'konva';
import Kruskal from './kruskal.js';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

function Node(props) {
  // const [a, setA] = useState(props.numberofnodes);
  // const [b, setB] = useState(props.data);
  // const [graph, setGraph] = useState([]);
  // const [lines, setLines] = useState([]);
  var a = props.numberofnodes
  var b = props.data;
  var g = []
  var l = []
  var cx = 0, cy1 = 100, w = 300, cy2 = 300, cy;
  var flag = true;

  for (var i = 0; i < a; i++) {
    if (flag) {
      cx = cx + w;
      cy = cy1;
    }
    else {
      cy = cy2;
    }
    flag = !flag;
    g.push(<Circle id={i + 1} x={cx} y={cy} radius={50} fill="DarkGoldenRod" />);
    g.push(<Text text={i + 1} x={cx} y={cy} fontSize={20} />);

  }


  for (var i = 1; i <= b.length; i++) {
    var index1 = (b[i - 1][0] - 1) * 2;
    var index2 = (b[i - 1][1] - 1) * 2;
    var weight = b[i - 1][2];
    var d = g[index1];
    var c = g[index2];
    console.log(index1 + " " + index2);
    l.push(<Line points={[d.props.x, d.props.y, c.props.x, c.props.y]} stroke='black' strokeWidth={3} />)
    var tx = ((d.props.x + c.props.x) / 2);
    var ty = ((d.props.y + c.props.y) / 2);
    l.push(<Text text={weight} x={tx} y={ty} fontSize={20} />)

    console.log(d.props.x + " " + d.props.y + " " + c.props.x + " " + c.props.y);

  }
  // setGraph(g);
  // setLines(l);

  return (
      <div>
      <Kruskal nodes={a} connections={b} />
    </div>
    // <Stage width={1600} height={800}>
    //   <Layer id="layer">
    //     {g}
    //     {l}
    //   </Layer>
    // </Stage>



  );

}


export default Node;