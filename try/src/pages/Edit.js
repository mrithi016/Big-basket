import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

const Edit = () => {
 const{id}=useParams();
 
 const [productsItems,setproductsItems]=useState ({
    })

    useEffect(()=>{
     fetch(`http://localhost:5500/getid/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])
     
 const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
     const rollno=form.rn.value;
        const stdno=form.sn.value;
        const fathername=form.fn.value;
        const dateofbirth=form.dob.value;
        const mobileno=form.no.value;
         const email=form.mail.value;
          const password=form.psw.value;
          const gender=form.gen.value;
        //   const i=form.dep.value;
        const depNodes = form.querySelectorAll("input[name='dep']:checked");
const Department = Array.from(depNodes).map(d => d.value);
          console.log(Department);
           const quantity=1;
          const crs=form.course.value;
          const cty=form.city.value;
          const address=form.add.value;

    const update={rollno,stdno,fathername,dateofbirth ,mobileno,email,password,gender,Department,crs,cty,address,quantity};
    console.log(update);

    fetch(`http://localhost:5500/editpop/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/update";
        })
    }

 return (
 <div>
<ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
       <h2>EDIT</h2>
        <div class="upload0">
                <label value="title"><b>Roll no :</b></label>
                <input type="text" name="rn" className='ms-3' defaultValue={productsItems.rollno}/>
            </div>
            <br></br>
            <div class="upload1">
                <label value="img"><b>Student name :</b></label>
                <input type='text' name="sn" className='ms-3'defaultValue={productsItems.stdno}/>
                </div>
                <br></br>
             
                <div class="upload3">
                <label value="des"><b>Father's name :</b></label>
                <input type='text' name='fn' className='ms-3'defaultValue={productsItems.fathername}/>
                </div>
                <br></br>
                <div class="upload4">
                <label value="price"><b>Date of birth :</b></label>
                <input type='date' name='dob' className='ms-3' defaultValue={productsItems.dateofbirth}/>
            </div>
            <br></br>
                 <div class="upload5">
                <label value="price"><b>Mobile no :</b></label>
                <input type='numbers' name='no' className='ms-3'defaultValue={productsItems.mobileno}/>
            </div>
            <br></br>
             <div class="upload6">
                <label value="price"><b>Email id :</b></label>
                <input type='email' name='mail' className='ms-3'defaultValue={productsItems.email}/>
            </div>
            <br></br>
             <div class="upload7">
                <label value="price"><b>password :</b></label>
                <input type='password' name='psw' className='ms-3'defaultValue={productsItems.password}/>
            </div>
            <br></br>
            <div class="upload8">
                <label><b>Gender : </b></label>
                <br></br>
                <br></br>
                <input type='radio' name='gen' defaultValue={productsItems.gender} value={"male"}/>  <b>Male </b>
                <input type='radio' name='gen' value={"female"}/> <b>Female</b>

            </div>
            <br></br>
             <div class="upload9">
                <label>
                <b>Department : </b>
              </label>
              <br />
              <input type="checkbox" name="dep" defaultValue={productsItems.Department} value="CSE" /> <b>CSE</b>
              <input type="checkbox" name="dep" value="IT" /> <b>IT</b>
              <input type="checkbox" name="dep" value="ECE" /> <b>ECE</b>
              <input type="checkbox" name="dep" value="Civil" /> <b>Civil</b>
              <input type="checkbox" name="dep" value="Mech" /> <b>Mech</b>
            </div>
            <br></br>

            <div className="upload10">
  <label ><b>Course :</b></label>
  <select name="course" id="course" defaultValue={productsItems.crs}>
    <option value="">----- Select Course -----</option>
    <option value="AWS">AWS</option>
    <option value="IOT">IOT</option>
    <option value="MERN">MERN</option>
    <option value="JAVA">JAVA</option>
  </select>
</div>
           
            <br></br>
              <div class="upload12">
                 <label value="price"><b>City :</b></label>
                 <input type='text' name='city' defaultValue={productsItems.cty} className='ms-3'/>
             </div>
           <br></br>
              <div className="upload13">
  <label htmlFor="add"><b>Address :</b></label>
  <textarea name="add" defaultValue={productsItems.address}id="add" rows="3" cols="30"></textarea>
</div>

             <br></br>
       <section className='update9'>
       
       <div class="update14 ms-3">
           <button type="submit" class="btn btn-primary">UPDATE</button>
           
       </div>
    </section>
   </form>
   </div>
   </div>
    </div>
  )
}

export default Edit















