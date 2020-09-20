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
            lines: [],
            connections: [],
        };
    }

    union(x, y, connections) {
        console.log("-----------");
        var j = this.state.i;
        var lines = this.state.lines;
        var graph = this.state.graph;
        var x = connections[j][0], y = connections[j][1];
        var index1 = (connections[j][0] - 1) * 2;
        var index2 = (connections[j][1] - 1) * 2;
        var weight = connections[j][2];
        var d = this.state.graph[index1];
        var c = this.state.graph[index2];

        let newgraph = this.state.graph.map((item, idx)=>{
            if (idx==index1){
                return <Circle id={item.props.id} x={item.props.x} y={item.props.y} radius={item.props.radius} fill="red" />;
            }else if (idx==index2){
                return <Circle id={item.props.id} x={item.props.x} y={item.props.y} radius={item.props.radius} fill="red" />;
            }else{
                return item
            }

        })

        // lines[d+"-"c] = Line

        this.setState({
            graph: newgraph,
            lines
        });

        // var temp1 = 
        // var temp2 = 
        var temp3 = <Line points={[d.props.x, d.props.y, c.props.x, c.props.y]} stroke="red" strokeWidth={3} />
        // graph.push(temp1);
        // graph.push(temp2);
        lines.push(temp3);
        console.log("D" + d.props.id + "   C" + c.props.id);
      //  console.log("nodes" + temp1.props.fill);
        // this.updateline(lines);
        // this.updategraph(graph);
        // this.setState({
        //     graph,
        //     lines
        // });
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
        console.log(connections)
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

        lines.push(<Line points={[200, 100, 500, 300]} stroke='black' strokeWidth={3} />);
        lines.push(<Text text="1" x={350} y={200} fontSize={20} />)
        lines.push(<Line points={[200, 300, 500, 100]} stroke='black' strokeWidth={3} />);
        lines.push(<Text text="2" x={350} y={200} fontSize={20} />)
        lines.push(<Line points={[200, 100, 200, 300]} stroke='black' strokeWidth={3} />);
        lines.push(<Text text="3" x={200} y={200} fontSize={20} />)
        lines.push(<Line points={[200, 100, 500, 100]} stroke='black' strokeWidth={3} />);
        lines.push(<Text text="4" x={350} y={100} fontSize={20} />)

        // lines= {
        //     "1,4": Line,
        //     "2,3": Line
        // }


        this.setState({ 
            graph,
            lines,
            connections
         })
        // this.setState({ lines: lines })
        // this.setState({ connections: connections })

        console.log("graph" + this.state.graph);
    }

    minimumCost(connections) {

        var j = this.state.i;
        var lines = this.state.lines;
        var graph = this.state.graph;
        var x = connections[j][0], y = connections[j][1];
        console.log("connections " + x + "  " + y);

        var index1 = (connections[j][0] - 1) * 2;
        var index2 = (connections[j][1] - 1) * 2;
        var weight = connections[j][2];
        var d = this.state.graph[index1];
        var c = this.state.graph[index2];
        var temp = <Line points={[d.props.x, d.props.y, c.props.x, c.props.y]} stroke="blue" strokeWidth={3} />
        lines.push(temp);
        // graph.push(temp);
        console.log("D" + d.props.id + "   C" + c.props.id);
        console.log("line" + temp.props.stroke);
        // Object.assign(d, temp)
        // this.updateline(lines);
        this.setState({
            lines,
            graph
        })
        if (this.find(x) != this.find(y)) {

            this.union(x, y, this.state.connections);
        }

        console.log(j);

        this.setState({ i: this.state.i + 1 })

    }

    // updategraph(p) {
    //     this.setState({ graph: p })
    // }
    // updateline(q) {
    //     this.setState({ lines: q })
    // }


    componentDidUpdate(){
        console.log(this)
    }

    render() {

        return (
            <div>


                <div >
                    {/* <button onClick={() => this.start(this.props.nodes, this.props.connections)}>start</button> */}
                    <button onClick={() => this.start(4, [[1, 2, 3], [1, 3, 4], [1, 4, 1],[2, 4, 2]])}>start</button>
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