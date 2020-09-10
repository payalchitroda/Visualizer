import React from 'react';
import Konva from 'konva';
//import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
function Node() {
    
    return(

        <Stage width={800} height={800}>
        <Layer>
   
          <Circle id ="1" x={200} y={100} radius={50} fill="DarkGoldenRod"/>
          <Text text="1" x={200} y={100} fontSize={20}/>
          <Line points={[250, 100, 450,100]} stroke='black' strokeWidth={3}/>
          <Circle id ="2" x={500} y={100} radius={50} fill="DarkGoldenRod" />
          <Text text="2" x={500} y={100} fontSize={20}/>
          <Line points={[200, 150, 300,250]} stroke='black' strokeWidth={3}/>
          <Circle id ="3" x={300} y={300} radius={50} fill="DarkGoldenRod" />
          <Text text="3" x={300} y={300} fontSize={20}/>
          <Line points={[500, 150, 300,250]} stroke='black' strokeWidth={3}/>
         
        </Layer>
      </Stage>
    );

}

export default Node;