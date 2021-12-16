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
        <div>
            <input class="form-control" type = "search" placeholder='search by name' onChange ={(e) => setName(e.target.value)}/>
            <button className = "btn btn-primary"onClick = {handleSearch}>Apply filter</button>
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
            </div>
 
    )
                }