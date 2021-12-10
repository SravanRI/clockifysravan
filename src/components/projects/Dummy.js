import React,{useState} from 'react'
import Tasks from './Tasks'
import Access from './access'

function Dummy() {
    // const [tasks,setTasks] = useState(true)
    // const [access,setAccess] = useState(false)

    // const tasksHandler = () => {
    //     setTasks(true)
    //     setAccess(false)
    // }
    // const accessHandler = () => {
    //     setTasks(false)
    //     setAccess(true)
    // }

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
        <div>
            <h1>Project access</h1>
            {/* <div>
            <button onClick= {tasksHandler}>TASKS</button>
            <button onClick={accessHandler}>Access</button>
            {tasksHandler? <div><Tasks /></div> : accessHandler? <Access /> : ''}
            </div> */}
            <div>
            <button className={toggle ? 'member-styles': 'jh' } onClick={toggle}>
                tasks
            </button>
           
            <button style={{marginLeft:'10px',color:'grey',padding:'5px',width:'80px'}} onClick={toggle1}>
             access
            </button>
            {toggleFlag ? <div><Tasks/></div>: groupFlag ? <Access/>: ''}
            </div>
        </div>
    )
}

export default Dummy
