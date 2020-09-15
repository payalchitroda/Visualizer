import React from 'react';
import Konva from 'konva';
//import {Kruskal} from '../pages/kruskal.js';
import Kruskal from './kruskal.js';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { Button } from 'react-bootstrap';

class Node extends React.Component {
  a=0;
  b=0;
  kruskal = [];
  graph = [];
  lines = [];
  componentDidUpdate() {
    var cx = 0, cy1 = 100, w = 300, cy2 = 300, cy;
    var flag = true;
    this.a = this.props.numberofnodes;
    this.b = this.props.data;
    for (var i = 0; i < this.a; i++) {
      if (flag) {
        cx = cx + w;
        cy = cy1;
      }
      else {
        cy = cy2;
      }
      flag = !flag;
      this.graph.push(<Circle id={i + 1} x={cx} y={cy} radius={50} fill="DarkGoldenRod" />);
      this.graph.push(<Text text={i + 1} x={cx} y={cy} fontSize={20} />);

    }
    console.log("length" + this.b.length)

    for (var i = 1; i <= this.b.length; i++) {
      var index1 = (this.b[i - 1][0] - 1) * 2;
      var index2 = (this.b[i - 1][1] - 1) * 2;
      var weight = this.b[i - 1][2];
      var a = this.graph[index1];
      var c = this.graph[index2];
      //console.log(index1+" "+index2);
      this.lines.push(<Line points={[a.props.x, a.props.y, c.props.x, c.props.y]} stroke='black' strokeWidth={3} />)
      var tx = ((a.props.x + c.props.x) / 2);
      var ty = ((a.props.y + c.props.y) / 2);
      this.lines.push(<Text text={weight} x={tx} y={ty} fontSize={20} />)
     // console.log(this.graph);
     // console.log(a.props.x +" "+a.props.y+" "+c.props.x+" "+c.props.y);
    }
  }
 
  kruskalrender() {

    this.kruskal.push(<Kruskal nodes={this.a} connections={this.b} g={this.graph} l={this.lines} />);
  }




render() {
  return (

    <div>
<button onClick={this.kruskalrender}>play</button>
      <Stage width={1600} height={800}>
        <Layer id="layer">
          {this.graph}
          {this.lines}
         
          {/* <Circle id ="1" x={200} y={100} radius={50} fill="DarkGoldenRod"/>
          <Text text="1" x={200} y={100} fontSize={20}/>
          <Line points={[250, 100, 450,100]} stroke='black' strokeWidth={3}/>
          <Circle id ="2" x={500} y={100} radius={50} fill="DarkGoldenRod" />
          <Text text="2" x={500} y={100} fontSize={20}/>
          <Line points={[200, 150, 300,250]} stroke='black' strokeWidth={3}/>
          <Circle id ="3" x={300} y={300} radius={50} fill="DarkGoldenRod" />
          <Text text="3" x={300} y={300} fontSize={20}/>
          <Line points={[500, 150, 300,250]} stroke='black' strokeWidth={3}/>
    */}

        </Layer>
      </Stage>
      {this.a}
      {/* <Kruskal nodes={this.a} connections={this.b} /> */}
    </div>
  );

}
}


export default Node;