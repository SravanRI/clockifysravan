// import React from 'react' 
// import ColumnGroupingTable from './Table'


// class Toggle extends React.Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             name:'sravan',
//              toggleFlag : true
//         }
//     }

//      toggle = () => {
//          this.setState({toggleFlag: !this.state.toggleFlag})

//     }
//     toggle1 = () => {
//         this.setState({toggleFlag: !this.state.toggleFlag})


//     }
    
//     render() {
//         return (
//             <div>
//                 {/* <button onClick={this.toggle}>Click ME</button>
//                 { this.state.toggleFlag === false ? !this.state.textflag && this.state.name: '' } */}

//                 <button onClick={this.toggle}>Click</button>
//                 { this.state.toggleFlag === false ? 'sravan' : '' }

//                 {/* <h2>{this.state.toggleFlag === false? 'Hide' : 'Show'}</h2> */}
//                 <button onClick={this.toggle1}>Click me</button>
//                 { this.state.toggleFlag === false ? '': 'vengal'  }


//             </div>
//         )
//     }
// }

// export default Toggle


import React, { Component } from 'react'
import ColumnGroupingTable from './components/Team/Table'
import CustomizedTables from './components/Team/Groups'
export class Toggle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toogl1: true,
             toogl2: ''
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({toogl1:true, toogl2:false})
                }}>
                    click1
                </button>
                <button onClick={() => {
                    this.setState({toogl1:false, toogl2:true})
                }}>
                    click2
                </button>
                {this.state.toogl1 ? <ColumnGroupingTable/> :this.state.toogl2? <CustomizedTables/> : ''}
                
            </div>
        )
    }
}

export default Toggle
