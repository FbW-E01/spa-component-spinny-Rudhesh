import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

let style = {
    width: "100%",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4em"
}


function Wrapper() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_delay=5000&t="+Math.random())
        
        .then(response=> response.json())
        .then(data=>setUser(data))
        
    }, [])


    return(
        <div>
       Users {user ? 
          <ul style = {{listStyle :"none"}}>
      {user.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      :
      <div style={style}>
      <FontAwesomeIcon icon={faSpinner} />
      </div>

    }
        </div>
    )
}
export default Wrapper