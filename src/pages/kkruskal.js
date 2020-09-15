export class Kruskal {
    constructor() {
        this.n = 0;
        this.parent = [];
    }
    union(x, y) {
       // document.write(x);
        var px = this.find(x);
        var py = this.find(y);
        if (px != py) {
           
            this.parent[px] = py;
            this.n--;
        }
    }
    find(x) {
       // document.write(x);
        if (this.parent[x] == x) {
            return this.parent[x];
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    minimumCost(N, connections) {
        //document.write(connections);
        this.parent = [];
        this.n = N;
        for (var i = 0; i <= N; i++) {
            this.parent[i] = i;
        }
        connections.sort(function (a, b) { return (a[2] - b[2]) });
       
            for (var i = 0; i < connections.length; i++) {
                
                var x = connections[i][0], y = connections[i][1];


                console.log(x+" "+y);
                if (this.find(x) != this.find(y)) {
                    console.log(x+" "+y);
                  //document.write(x+" "+y);
                    this.union(x, y);
                }
            }

    }

}

//  var twoD = [[1, 2, 3], [2, 3, 4], [1, 4, 2]];
//  new Kruskal().minimumCost(4, twoD);


