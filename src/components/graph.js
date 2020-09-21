componeent{

constr()
{
    this.state ={
        nodes: []
        edges: []
        activeNode: -1
    }
}

render(){


    let nelems = this.state.map((item)=>{
        <Node />
    })

    retuynr (
        <div>

            {nlems}
            {lelems}

            </div>
    )
}






}



                                                                setState --> new state
                                                                |               |
                                                                |               v
Main --> state = empty ---> state - nodes, update --> render --> <Kruskal></Krushkl>
                                                                    |
                                                                    |
                                                                    v
                                                                    --- -->state, update
                                                                    |                   ^
                                                                    |                   |
                                                                    v                   |
                                                                    active, link --------



    