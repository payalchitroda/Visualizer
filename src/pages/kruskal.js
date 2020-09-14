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
            document.write(connections[0]);
            for (var i = 0; i < connections.length; i++) {
                // document.write(connections[i]);
                var x = connections[i][0], y = connections[i][0];
                //document.write(x);
                if (this.find(x) != this.find(y)) {
                    //document.write(connections[i]);
                    this.union(x, y);
                }
            }

    }

}

// var twoD = [[1, 2, 3], [2, 3, 4], [1, 4, 2], [1, 3, 1]];
// new Kruskal().minimumCost(4, twoD);


