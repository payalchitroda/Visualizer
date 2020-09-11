import React from 'react';
import Node from '../components/node';
class Algo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberofnodes:{},
            data:{}
        };
    }
    
    graphinput(node, edges) {
        var n = parseInt(node);
       // console.log(node, edges);
        var e = [];
        var k = 0;
        for (var i = 0; i < n; i++) {
            var data = [];
            for (var j = 0; j < 3; j++) {
                data.push(edges.charAt(k));
                k += 2;
            }
            e.push(data);
        }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < 3; j++) {
                console.log(e[i][j]);
            }
        }
        this.setState({data:e,numberofnodes:n});
    }

    render() {
        let n;
        let edges;
        return (
            <div>

                <div style={{ backgroundColor: "LightGray", height: "630px" }}>
                    <h1>Kruskal Algorithm</h1>
                Enter number of nodes<input type="text" ref={node => { n = node; }} />
                Edges<input type="text" ref={node => { edges = node; }} />
                    <button onClick={() => { this.graphinput(n.value, edges.value); n.value = ''; edges.value = ''; }}>
                        Submit
                </button>
                    <Node data={this.state.data} numberofnodes = {this.state.numberofnodes}/>
                </div>

            </div>
        );
    }
}


export default Algo;