import React, {useState,useEffect}from 'react'
import bootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

function BootstrapTable() {
    const [userList,setUserList] = useState([])

    const columns = [
        {dataField: 'id',text:'Id'},
        {dataField: 'name',text:'Name',sort:true},
        {dataField: 'username',text:'Username'},
        {dataField: 'email',text:'Email'},
    ]

   useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(result => setUserList(result))
       .catch(error => console.log(error))
       
   }, [])
    return (
        <div>
            <BootstrapTable
            bootstrap4
            keyField = "id"
            columns={columns}
            data={userList}
            />
        </div>
    )
}

export default BootstrapTable
