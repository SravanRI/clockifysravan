import React,{useState,useEffect,useContext} from 'react'
import myContext from '../../Context'
import {Card,Container} from '@mui/material'
import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StarOutlined, DownOutlined,SearchOutlined,CaretDownOutlined,CaretUpOutlined  } from '@ant-design/icons';
import { Menu, Dropdown, Button, Input } from "antd";
// import './Project.css'
// import Dummy from './Dummy';
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'



function Project() {
    const context=useContext(myContext)
    
    const [userData,setUserData] = useState([])
    const [userSearchData,setUserSearchData] = useState([])
    const [name,setName] = useState()

    useEffect(() => {
        const data = [
            {name:'Recruitment', clients:'Retail HR', tracked:'32.56h', access: '-', favourites:'public'},
            {name:'Freshers', clients:'Retail Freshers', tracked:'56.3h',access: '-', favourites:'public'},
           {name:'unsa', clients:' dasa', tracked:'56.3h', access:'-', favourites:'public'},
            {name:'fcdfa',clients: 'dasa ', tracked:'56.3h',access: '-', favourites:'public'}
            
          ];
          
          setUserData(data)
          setUserSearchData(data)

    },[])

    const handleSearch =() => {
        // debugger
        const newData = userData
        .filter(x => x.name == (name== '' ? x.name : name))
        // .filter(y => y.profession == (profession == '' ? y.profession : profession))
        setUserSearchData(newData)
    }

    return (
        <Container className={context.state.collapsed ? 'projectWidthCollapsed' :'projectWidth'}>
   
            <div>
                <h1 style={{marginTop:"5rem"}}>Projects</h1>
            </div>
            <Card style={{marginTop:"5rem",marginBottom:"3rem",padding:"1rem"}}>







                
            <SearchOutlined style={{fontSize:"1.2rem",marginLeft:"2rem",marginTop:"2px"}} />
            <input class="form-control" type = "search" placeholder='search by name' onChange ={(e) => setName(e.target.value)}/>
            {/* <input style={{border:"none",height:"30px",width:"200px",fontSize:"1rem",marginLeft:"5px"}} type="text"  placeholder="Project name" onChange={(e) => setName(e.target.value)} /> */}
            {/* <Button style={{marginLeft:"16rem"}} type="primary" onClick={handleSearch}>APPLY FILTER</Button> */}
            <button className = "btn btn-primary"onClick = {handleSearch}>Apply filter</button>

         
          <p style={{position:'absolute',marginTop:'20px',marginLeft:'63rem'}}>clear filters</p>
          
        </Card>
        {/* <p style={{}}>clear filters</p> */}
            

        {/* <Card><h1 style={{color:"grey",marginLeft:"5px"}}>Projects</h1></Card>
         
        <TableContainer component={Paper}> */}
         <Table >
         <thead>
                    <tr>
                        <th>Name</th>
                        <th>Clients</th>
                        <th>Tracked</th>
                        <th>Access</th>
                        <th>Favourites</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userSearchData && userSearchData.length>0 ?
                        userSearchData.map(item => 
                          
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.clients}</td>
                            <td>{item.tracked}</td>
                            <td>{item.access}</td>
                            <td>{item.favourites}</td>
                        </tr>
                        )
                        : 'No Data'
                    }
                </tbody>
            </Table>
            </Card>
            </Container>

 
            )
        }
        
export default Project
        