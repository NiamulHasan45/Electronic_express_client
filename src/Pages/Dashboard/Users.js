import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const Users = () => {
    // const {data} = use('users', ()=>fetch('http://localhost:5000/user').then(res=>res.json()));
     const [users, setUsers] = useState([]);
     useEffect(()=>{
        fetch('http://localhost:5000/user',{
            method: 'GET',
            headers:{
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        } )
        .then(res=>res.json())
        .then(data=>setUsers(data));
     }, [users])

     const makeAdmin =(email)=>{
         fetch(`http://localhost:5000/user/admin/${email}`, {
             method: 'PUT',
             headers:{
                headers:{
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
             }
         })
         .then(res=>{
            toast.error('Failed to make a admin')
            res.json()
         })
         .then(data=> toast('Made admin successfully'))
     }

    return (
        <div>
           
            <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Users Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.email}</td>
                                <td>{
                                    a.role==='admin'?<button  className="btn btn-xs">Admin</button>:<button onClick={()=>makeAdmin(a.email)} className="btn btn-xs">Make admin</button>
                                    }</td>

                            </tr>)
                        }


                    </tbody>
                </table>
        </div>
    );
};

export default Users;