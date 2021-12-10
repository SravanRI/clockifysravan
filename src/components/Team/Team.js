import React,{useState} from 'react'
import ColumnGroupingTable from './Table'
import CustomizedTables from './Groups'
import './Team.css'




function Team() {
    const [toggleFlag,setToggleFlag] = useState(true)
    const [groupFlag,setGroupFlag] = useState(false)


    const toggle = () => {
        setToggleFlag(true)
        setGroupFlag(false)
    }

    const toggle1 = () => {
        setToggleFlag(false)
        setGroupFlag(true)
    }
    

    return (
        <div style={{height:'100vh'}}>
            <h1 style={{marginTop:'5rem',marginLeft:'6rem'}}>Team</h1>
            <div>
            <button className={toggle ? 'member-styles': 'jh' } onClick={() => {
                toggle()
            }}>
                MEMBERS
            </button>
           
            <button style={{marginLeft:'10px',color:'grey',padding:'5px',width:'80px'}} onClick={() => {
                toggle1()
            }}>
             GROUPS
            </button>
            {toggleFlag ? <div><ColumnGroupingTable/></div>: groupFlag ? <CustomizedTables/>: ''}
            </div>
        </div>
    )
}

export default Team
