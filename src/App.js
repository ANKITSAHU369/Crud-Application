import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [mobile,setMobile] = useState("");
  const [users,setUsers] = useState([]);
  const addUser = (e) =>{
    e.preventDefault();
    const user = {
      name,
      email,
      address,
      mobile
    }

    setUsers([...users,user]);
    setName("")
    setEmail("")
    setAddress("")
    setMobile("")
  };

  const onEditClick = (index)=>{
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setMobile(user.mobile);

  }
  const deleteUser = (user)=>{
    if(window.confirm('Do you want to delete?')){
      let copy = users.filter(item => item !== user);
    setUsers([...copy]);
    }

  }
  return (
    <div>
      <h1 className='title'>Crud Application</h1>
      <div className="container">
        <div className="row justify-content-center mt-7">
        <div className="col-lg-5">
          <form onSubmit={addUser}>
            <div className="formGroup">
              <label htmlFor=''>Name</label>
              <input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="formGroup">
              <label htmlFor=''>E-Mail</label>
              <input type='email' className='form-control'value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="formGroup">
              <label htmlFor=''>Address</label>
              <input type='text' className='form-control'value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className="formGroup">
              <label htmlFor=''>Mobile Number</label>
              <input type='tel' className='form-control'value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <button className='btn btn-success form-control mt-3'>ADD</button>
          </form>
        </div>

        </div>

      </div>
      <table className='table table-bordered mt-5' >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile No.</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user , index) =>{
              return(
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button className='btn btn-info'onClick={()=> onEditClick(index)}>Edit</button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>deleteUser(user)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
