import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class Kruskal extends React.Component {
    n = 0;
    parent = [];
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            graph: [],
            lines:[],
            connections:[],
        };
    }

    union(x, y) {

        var px = this.find(x);
        var py = this.find(y);
        if (px != py) {

            this.parent[px] = py;
            this.n--;

        }
    }
    find(x) {

        if (this.parent[x] == x) {
            return this.parent[x];
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    start(N, connections) {
        for (var i = 0; i <= N; i++) {
            this.parent[i] = i;
        }

        connections.sort(function (a, b) { return (a[2] - b[2]) });

        var graph = []
        var lines = []
        graph.push(<Circle id="1" x={200} y={100} radius={50} fill="DarkGoldenRod" />);
        graph.push(<Text text="1" x={200} y={100} fontSize={20} />);
        graph.push(<Circle id="2" x={200} y={300} radius={50} fill="DarkGoldenRod" />);
        graph.push(<Text text="2" x={200} y={300} fontSize={20} />);
        graph.push(<Circle id="3" x={500} y={100} radius={50} fill="DarkGoldenRod" />);
        graph.push(<Text text="3" x={500} y={100} fontSize={20} />);
        graph.push(<Circle id="4" x={500} y={300} radius={50} fill="DarkGoldenRod" />);
        graph.push(<Text text="4" x={500} y={300} fontSize={20} />);

        lines.push(<Line id="1" points={[200, 300, 200, 100]} stroke='black' strokeWidth={3} />);
        lines.push(<Line id="1" points={[200, 300, 500, 100]} stroke='black' strokeWidth={3} />);
        lines.push(<Line id="1" points={[200, 100, 500, 300]} stroke='black' strokeWidth={3} />);

        this.setState({ graph: graph})
        this.setState({ lines: lines})
        this.setState({ connections: connections})

        console.log("graph" + this.state.graph);
    }

    minimumCost(connections) {

        console.log(connections.length);

        var j = this.state.i;
        var lines=this.state.lines;
        console.log("ij " + this.state.i + "  " + j);
        var x = connections[j][0], y = connections[j][1];
        console.log("connections " + x + "  " + y);
        if (this.find(x) != this.find(y)) {

            var index1 = (connections[ j][0] - 1) * 2;
            var index2 = (connections[j][1] - 1) * 2;
            var weight = connections[j][2];
            var d = this.state.graph[index1];
            var c = this.state.graph[index2];

            lines.push(<Line points={[200, 300, 200, 100]} stroke='red' strokeWidth={3} />)
         //   lines.push(<Line points={[d.props.x, d.props.y, c.props.x, c.props.y]} stroke='red' strokeWidth={3} />)
            console.log("hello");
            this.union(x, y);
            this.setState({ lines: lines})


        }

        console.log(j);

        this.setState({ i: this.state.i + 1 })
        this.setState({ lines:lines })
    }




    render() {

        return (
            <div>


                <div >
               
                    <button onClick={() =>this.start(4, [[1, 2, 3], [2, 3, 4], [1, 4, 2]])}>start</button>
                    <button onClick={() => this.minimumCost(this.state.connections)}>step</button>
                   
                    <Stage width={1600} height={800}>
                        <Layer id="layer">
                            {this.state.graph}
                            {this.state.lines}
                        </Layer>
                    </Stage>
                </div>
            </div>
        );
    }
}


export default Kruskal;