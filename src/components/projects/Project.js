import React,{useState,useEffect,useContext} from 'react'
import myContext from '../../Context'
import {Card,Container} from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StarOutlined, DownOutlined,SearchOutlined,CaretDownOutlined,CaretUpOutlined  } from '@ant-design/icons';
import { Menu, Dropdown, Button, Input } from "antd";
import './Project.css'
import Dummy from './Dummy';
import {Link} from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';





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

const rows = [
  createData('Recruitment', 'Retail HR', '32.56h', '-', 'public',<StarOutlined />),
  createData('Freshers', 'Retail Freshers', '56.3h', '-', 'public',<StarOutlined />),

];

  

const menuOne = (
    <Menu >
      <Menu.Item key="1" >
        Active
      </Menu.Item>
      <Menu.Item key="2">
        Archieved
      </Menu.Item>
      <Menu.Item key="3" >
        All
      </Menu.Item>
    </Menu>
  );

  const menuTwo = (
    <Menu >
      <Menu.Item key="1" >
       <Input  type="text" placeholder="Search Client"/>
      </Menu.Item>
      <Menu.Item key="2">
          <div style={{display:"flex",justifyContent:"space-between"}}>
           <p>SHOW</p>
           <p>Active<span><DownOutlined /></span></p>
       </div>
      </Menu.Item>
      <Menu.Item key="3" >
      <div>
          <input type="checkbox" name="select" />
          <label for="select">Select all</label>
      </div>
    
      </Menu.Item>
      <Menu.Item key="4" >
      <div>
          <input type="checkbox" name="client" />
          <label for="client">Without client</label>
      </div>
    
      </Menu.Item>
    </Menu>
  );
  const menuThree = (
    <Menu >
      <Menu.Item key="1" >
       <Input  type="text" placeholder="Find member or group..."/>
      </Menu.Item>
      <Menu.Item key="2">
          <div style={{display:"flex",justifyContent:"space-between"}}>
           <p>SHOW</p>
           <p>Active<span><DownOutlined /></span></p>
       </div>
      </Menu.Item>
      <Menu.Item key="3" >
      <div>
          <input type="checkbox" name="select" />
          <label for="select">Select all</label>
      </div>
    
      </Menu.Item>
      < Menu.Item key="4" >
          Groups
      </Menu.Item>
      <Menu.Item key="5" >
      <div>
          <input type="checkbox" name="freshers" />
          <label for="freshers">Freshers</label>
      </div>
    
      </Menu.Item>
      <Menu.Item key="6" >
      <div>
          <input type="checkbox" name="recruitment" />
          <label for="recruitment">Recruitment</label>
      </div>
    
      </Menu.Item>
      < Menu.Item key="7" >
          Users
      </Menu.Item>
      <Menu.Item key="8" >
      <div>
          <input type="checkbox" />
          <label>Abhishek</label>
      </div>
    
      </Menu.Item>
      <Menu.Item key="9" >
      <div>
          <input type="checkbox"  />
          <label> Sravan</label>
      </div>
    
      </Menu.Item>
      <Menu.Item key="10" >
      <div>
          <input type="checkbox"  />
          <label> Vengalreddy</label>
      </div>
    
      </Menu.Item>
    </Menu>
  );
  const menuFour = (
    <Menu>
      
      <Menu.Item key="1">
      <div>
          <input type="checkbox" name="billable" />
          <label for="bill">Billable</label>
      </div>
      </Menu.Item>
      <Menu.Item key="2" >
      <div>
          <input type="checkbox" name="billable" />
          <label for="bill">Non billable</label>
      </div>
      </Menu.Item>
    </Menu>
  );



function Project() {
    const context=useContext(myContext)

    const [sortType,setSortType] = useState('asc')
    const [userData,setUserData] = useState([])
    const [userSearchData,setUserSearchData] = useState([])
    const [name,setName] = useState()
    


    useEffect(() => {
      const data = [
          {name:'Recruitment', client:'Retail HR', tracked:'32.56h', access: '-', favourites:'public'},
          {name:'Freshers', client:'Retail Freshers', tracked:'56.3h',access: '-', favourites:'public'},
         {name:'unsa', client:' dasa', tracked:'56.3h', access:'-', favourites:'public'},
          {name:'fcdfa',client: 'dasa ', tracked:'56.3h',access: '-', favourites:'public'}
        
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


    const sorted = userSearchData.sort( (a,b) => {
    const isReversed = (sortType === 'asc') ? 1 :-1
    return isReversed * a.name.localeCompare(b.name)
           
          })


    return (
        <Container className={context.state.collapsed ? 'projectWidthCollapsed' :'projectWidth'}>
            <div>
                <h1 className='projects-heading'>Projects</h1>
            </div>
            <Card className="menu-card">
            <Dropdown overlay={menuOne}>
                <Button style={{marginLeft:"20px"}}>
                   Active<DownOutlined />
                </Button>
            </Dropdown>
            <Dropdown overlay={menuTwo}>
                <Button  style={{marginLeft:"20px"}}>
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
            </Dropdown>

            <SearchOutlined className='search-icon' />
            <input className='search-bar' type="text"  placeholder="Project name" onChange ={(e) => setName(e.target.value)}/>
            <Button style={{marginLeft:"10rem"}} type="primary" onClick = {handleSearch}>APPLY FILTER</Button>
            {/* <p style={{marginTop:'-3rem',marginBottom:'7rem',float:'right',marginRight:'13rem'}}>clear filters</p> */}
        </Card>
         

        <Card><h2 className='projects-subheading'>Projects</h2></Card>
         <TableContainer component={Paper}>
         <Table >   
        <TableHead >   
          <TableRow >
            <StyledTableCell className='table' >NAME<span><ArrowDropUpIcon className="arrow-dropup" onClick={() => {setSortType('asc')}}/></span><span><ArrowDropDownIcon className='arrow-dropdown' onClick={() => {setSortType('desc')}}/></span></StyledTableCell>
            <StyledTableCell className='table' align="left">CLIENT <span><ArrowDropUpIcon className="arrow-dropup" onClick={() => {setSortType('asc')}}/></span><span><ArrowDropDownIcon className='arrow-dropdown' onClick={() => {setSortType('desc')}}/></span></StyledTableCell>
            <StyledTableCell className='table' align="left">TRACKED</StyledTableCell>
            {/* <StyledTableCell className='table' align="left">ACCESS</StyledTableCell> */}
            {/* <StyledTableCell className='table' align="left">FAVOURITES</StyledTableCell> */}
          </TableRow>
        </TableHead>      
        <TableBody>
          {
             userSearchData && userSearchData.length>0 ?
             userSearchData.map(item => (
            <StyledTableRow key={item.name}>
              <Link to ='/dummy'>
             <StyledTableCell component="th" scope="row" >
                {item.name}
              </StyledTableCell> 
              </Link>
              <StyledTableCell align="left">{item.client}</StyledTableCell>
              <StyledTableCell align="left">{item.tracked}</StyledTableCell>
              <StyledTableCell align="left">{item.access}</StyledTableCell>
              {/* <StyledTableCell align="left">{row.favourites}</StyledTableCell> */}
            </StyledTableRow>    
          ))
          : 'No data'
        }
                
        </TableBody>
      </Table>
    </TableContainer>

    </Container>

       
    )
}

export default Project
