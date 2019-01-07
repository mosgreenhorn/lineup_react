import * as React from 'react';
import './App.css';
import LineUp, {LineUpStringColumnDesc, LineUpCategoricalColumnDesc, LineUpNumberColumnDesc, LineUpRanking, LineUpColumn, LineUpSupportColumn} from 'lineupjsx'

// import LineUpCategoricalColumnDesc from 'lineupjsx'
// import LineUpNumberColumnDesc from 'lineupjsx'

class App extends React.Component<{}, {data: any[], enums: string[]}> {

  constructor(props : any){
    super(props);
    this.state = {data: [], enums: []};
  }


  componentDidMount() {
    this.setState(this.initState());
  }

  
  protected initState() : {data: any[], enums: string[]} {
    const arr = [];
    const cats = ['c1', 'c2', 'c3'];
    for (let i = 0; i < 100; ++i) {
      arr.push({
        a: Math.random() * 10,
        d: 'Row ' + i,
        x: Math.sin(Math.random()),
        cat: cats[Math.floor(Math.random() * 3)],
        cat2: cats[Math.floor(Math.random() * 3)]
      })
    }
    return {data: arr, enums: cats};
  }



  public render() {

    // generate some data
    if(this.state.enums == null || this.state.enums.length == 0){
      return (<h1>Loading</h1>);
    }

    // const cats = ['c1', 'c2', 'c3'];

    return (
      <LineUp data={this.state.data} defaultRanking>
        <LineUpStringColumnDesc column="d" label="Label" width={100} />
        <LineUpCategoricalColumnDesc column="cat" categories={this.state.enums} color="green" />
        <LineUpCategoricalColumnDesc column="cat2" categories={this.state.enums} color="blue" />
        <LineUpNumberColumnDesc column="a" domain={[0, 10]} color="blue" />
        
        <LineUpRanking groupBy="cat" sortBy="a:desc">
          <LineUpSupportColumn type="*" />
          <LineUpColumn column="*" />
          
        </LineUpRanking>

      </LineUp>
    );
  }
}

export default App;
