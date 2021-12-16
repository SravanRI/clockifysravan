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





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, client, tracked, access, favourites,star) {
  return { name, client, tracked, access, favourites,star };
}

// const rows = [
//   createData('Recruitment', 'Retail HR', '32.56h', '-', 'public',<StarOutlined />),
//   createData('Freshers', 'Retail Freshers', '56.3h', '-', 'public',<StarOutlined />),
//   createData('unsa', ' dasa', '56.3h', '-', 'public',<StarOutlined />),
//   createData('fcdfa', 'dasa ', '56.3h', '-', 'public',<StarOutlined />),

// ];

  

// const menuOne = (
//     <Menu >
//       <Menu.Item key="1" >
//         Active
//       </Menu.Item>
//       <Menu.Item key="2">
//         Archieved
//       </Menu.Item>
//       <Menu.Item key="3" >
//         All
//       </Menu.Item>
//     </Menu>
//   );

//   const menuTwo = (
//     <Menu >
//       <Menu.Item key="1" >
//        <Input  type="text" placeholder="Search Client"/>
//       </Menu.Item>
//       <Menu.Item key="2">
//           <div style={{display:"flex",justifyContent:"space-between"}}>
//            <p>SHOW</p>
//            <p>Active<span><DownOutlined /></span></p>
//        </div>
//       </Menu.Item>
//       <Menu.Item key="3" >
//       <div>
//           <input type="checkbox" name="select" />
//           <label for="select">Select all</label>
//       </div>
    
//       </Menu.Item>
//       <Menu.Item key="4" >
//       <div>
//           <input type="checkbox" name="client" />
//           <label for="client">Without client</label>
//       </div>
    
//       </Menu.Item>
//       <Menu.Item key="5" >
//       <div>
//           <input type="checkbox" name="client" />
//           <label for="client">dasa</label>
//       </div>
    
//       </Menu.Item><Menu.Item key="6" >
//       <div>
//           <input type="checkbox" name="client" />
//           <label for="client">freshers</label>
//       </div>
    
//       </Menu.Item>
//     </Menu>
//   );
//   const menuThree = (
//     <Menu >
//       <Menu.Item key="1" >
//        <Input  type="text" placeholder="Find member or group..."/>
//       </Menu.Item>
//       <Menu.Item key="2">
//           <div style={{display:"flex",justifyContent:"space-between"}}>
//            <p>SHOW</p>
//            <p>Active<span><DownOutlined /></span></p>
//        </div>
//       </Menu.Item>
//       <Menu.Item key="3" >
//       <div>
//           <input type="checkbox" name="select" />
//           <label for="select">Select all</label>
//       </div>
    
//       </Menu.Item>
//       < Menu.Item key="4" >
//           Groups
//       </Menu.Item>
//       <Menu.Item key="5" >
//       <div>
//           <input type="checkbox" name="freshers" />
//           <label for="freshers">Freshers</label>
//       </div>
    
//       </Menu.Item>
//       <Menu.Item key="6" >
//       <div>
//           <input type="checkbox" name="recruitment" />
//           <label for="recruitment">Recruitment</label>
//       </div>
    
//       </Menu.Item>
//       < Menu.Item key="7" >
//           Users
//       </Menu.Item>
//       <Menu.Item key="8" >
//       <div>
//           <input type="checkbox" />
//           <label>Abhishek</label>
//       </div>
    
//       </Menu.Item>
//       <Menu.Item key="9" >
//       <div>
//           <input type="checkbox"  />
//           <label> Sravan</label>
//       </div>
    
//       </Menu.Item>
//       <Menu.Item key="10" >
//       <div>
//           <input type="checkbox"  />
//           <label> Vengalreddy</label>
//       </div>
    
//       </Menu.Item>
//     </Menu>
//   );
//   const menuFour = (
//     <Menu>
      
//       <Menu.Item key="1">
//       <div>
//           <input type="checkbox" name="billable" />
//           <label for="bill">Billable</label>
//       </div>
//       </Menu.Item>
//       <Menu.Item key="2" >
//       <div>
//           <input type="checkbox" name="billable" />
//           <label for="bill">Non billable</label>
//       </div>
//       </Menu.Item>
//     </Menu>
//   );
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
            {/* <Dropdown overlay={menuOne}>
                <Button style={{marginLeft:"20px"}}>
                   Active<DownOutlined />
                </Button>
            </Dropdown>
            <Dropdown overlay={menuTwo}>
                <Button  style={{marginLeft:"20px"}} >
                   Client<DownOutlined />
                </Button>
            </Dropdown>
            <Dropdown overlay={menuThree}>
                <Button  style={{marginLeft:"20px"}}>
                   Access <DownOutlined />
                </Button>
            </Dropdown>
            <Dropdown overlay={menuFour}>
                <Button  style={{marginLeft:"20px"}}>
                   Billing <DownOutlined />
                </Button>
            </Dropdown> */}
            
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
 
        {/* <TableHead >   
          <TableRow >
            <StyledTableCell className='table' >NAME</StyledTableCell>
            <StyledTableCell className='table' align="left">CLIENT</StyledTableCell>
            <StyledTableCell className='table' align="left">TRACKED</StyledTableCell> */}
            {/* <StyledTableCell className='table' align="left">ACCESS</StyledTableCell> */}
            {/* <StyledTableCell className='table' align="left">FAVOURITES</StyledTableCell> */}
          {/* </TableRow>
        </TableHead>       */}
        {/* <TableBody> */}
          {/* {userData.map((row) => (
            <StyledTableRow key={userData.name}>
              <Link to ='/dummy'>
             <StyledTableCell component="th" scope="row" >
                {userData.name}
              </StyledTableCell> 
              </Link>
              <StyledTableCell align="left">{userData.client}</StyledTableCell>
              <StyledTableCell align="left">{userData.tracked}</StyledTableCell>
              <StyledTableCell align="left">{userData.access}</StyledTableCell>
              <StyledTableCell align="left">{row.favourites}</StyledTableCell>
            </StyledTableRow>    
          ))}      */}

          {/* {
              userData && userData.length>0 ?
            userData.map(item => {
                <StyledTableRow>
              <StyledTableCell align="left">{item.name}</StyledTableCell>
              <StyledTableCell align="left">{item.client}</StyledTableCell>
              <StyledTableCell align="left">{item.tracked}</StyledTableCell>
              <StyledTableCell align="left">{item.access}</StyledTableCell>
              </StyledTableRow>
            })
            : 'null' 
        }
        </TableBody>
      </Table> */}
    {/* </TableContainer> */}

    </Container>

 
    )
}

export default Project
