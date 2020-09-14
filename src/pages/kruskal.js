class Kruskal {
    constructor() {
      this.n =0;
      this.parent=[];
    }
    union(x,y) {
      var px=this.find(x);
      var py =this.find(y);
      if(px!=py)
      {
        this.parent[px]=py;
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
    minimumCost(N,connections) {
        this.parent = [];
        this.n = N;
        for (var i = 0; i <= N; i++) {
            this.parent[i] = i;
        }
        
        connections.sort(function(a, b) {return(a[2] - b[2])});
        connections.forEach(myFunction);
        function myFunction(item) {
            var x = item[0], y = item[1];
            if (this.find(x) != this.find(y)) {
                console.log(item);
                this.union(x, y);
            }
          }
       
        
    }

}

// var twoD = [[1, 2, 3], [2,3,4],[1,4,2],[1,3,1]];
// kruskalalgo = new Kruskal();
// kruskalalgo.minimumCost(5,twoD);


export default Kruskal;