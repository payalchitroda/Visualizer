import React from 'react';
import Node from '../components/node';
function Algo() {

    function graphinput(node, edges) {
        var n = parseInt(node);
        console.log(node, edges);
        var e = [];
        var k=0;
        for (var i = 0; i < n; i++) {
            var data = [];
            for (var j = 0; j < 3; j++) {
                data.push(edges.charAt(k));
                k+=2;
            }
            e.push(data);
        }
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < 3; j++) {
                console.log(e[i][j]);
            } 
        }



    }
    let n;
    let edges;
    return (
        <div>

            <div style={{ backgroundColor: "LightGray", height: "630px" }}>
                <h1>Kruskal Algorithm</h1>
                Enter number of nodes<input type="text" ref={node => { n = node; }} />
                Edges<input type="text" ref={node => { edges = node; }} />
                <button onClick={() => { graphinput(n.value, edges.value); n.value = ''; edges.value = ''; }}>
                    Submit
                </button>
                <Node></Node>
            </div>

        </div>
    );

}

export default Algo;