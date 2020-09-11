import React from 'react';
import Konva from 'konva';
//import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
function Node(props) {
  var a=props.numberofnodes
  var b=props.data;
  //var a=10;
  //var b=[[1,2,3],[2,3,4],[4,1,6]];
  var cx=0,cy1=100,w=300,cy2=300,cy;
  var flag=true;
  var graph = []
  for(var i=0;i<a;i++)
  {
    if(flag)
    {
      cx=cx+w;
      cy=cy1;
    }
    else
    {
      cy=cy2;
    }
    flag=!flag;
    graph.push(<Circle id ={i+1} x={cx} y={cy} radius={50} fill="DarkGoldenRod"/>);
    graph.push(<Text text={i+1} x={cx} y={cy} fontSize={20}/>);
    
  }
  
    return(

        <Stage width={1600} height={800}>
        <Layer id="layer">
          {graph}
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
    );

}

export default Node;