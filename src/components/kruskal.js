import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class Kruskal extends React.Component {
    n=0;
    parent =[];
    graph =[]
    

    union(x, y) {
       
        var px = this.find(x);
        var py = this.find(y);
        if (px != py) {

            this.parent[px] = py;
            this.n--;

        }
    }
    find(x) {
      // console.log("find"+x);
        if (this.parent[x] == x) {
            return this.parent[x];
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    minimumCost(N, connections) {
        console.log("node____"+N);
        for (var i = 0; i <= N; i++) {
            this.parent[i] = i;
        }

       // console.log("node____"+props.nodes);
        connections.sort(function (a, b) { return (a[2] - b[2]) });
        //this.graph.push(<Circle id={1} x={200} y={100} radius={50} fill="blue" />);
        for (var i = 0; i < connections.length; i++) {

            var x = connections[i][0], y = connections[i][1];
           
            
            
            // console.log(x + " " + y);
            if (this.find(x) != this.find(y)) {
                
               
              
                var index1 = (x-1) * 2;
                var index2 = (y-1)  * 2;
                
                var a = this.graph[index1];
                var c = this.graph[index2];
               // console.log("index"+index1+ " " + index2);
               // console.log("nodes"+a.props.id+ " " +a.props.x+ " " + a.props.y);

            // this.graph.push(<Circle id={a.props.id} x={a.props.cx} y={a.props.cy} radius={100} fill="blue" />);
               // console.log(a.props.fill);
                //console.log(a.props.cx + " " + a.props.cy);
                console.log("hello");
                //document.write(x+" "+y);
                this.union(x, y);

            }
        }

    }



    render() {

        return (
            <div>
                <div onLoad={this.minimumCost(4, [[1, 2, 3], [2, 3, 4], [1, 4, 2]])}>
                {/* <div onLoad={this.minimumCost(this.props.nodes, this.props.connections)}> */}
                    <Stage width={1600} height={800}>
                        <Layer id="layer"  >
                            {this.graph}
                        </Layer>
                    </Stage>
                </div>
            </div>
        );
    }
}


export default Kruskal;