import React from 'react'
import ColumnGroupingTable from './Table';

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this.butClick = this.butClick.bind(this);
    }
  
    butClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.butClick}>Members</button>
          {this.state.showComponent ?
             <ColumnGroupingTable /> :
             null
          }
        </div>
      );
    }
  }