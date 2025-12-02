
import React from 'react'
import { ToastContainer ,toast } from 'react-toastify';
// import { useEffect } from 'react';

// const Upload = () => {

//     const handleSubmit=(event)=>{

//         event.preventDefault();
       
//         const form=event.target;

//         const title=form.title.value;
//         const img=form.img.value;
//         const des=form.des.value;
//         const price=form.price.value;
//         const quantity=1;

//         if(title==="" || img==="" ||des===""  || price==="")
//         {
//             toast.warn('fill all fields ');
//         }else{
//             const foods={title,img,des,price,quantity};
//             // console.log(foods,"foods in object ");
           
//             fetch('http://localhost:5500/update',{
//                 method:"POST",
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify(foods),
//             })
//             // .then((res)=>res.json())
//             .then((data)=>{
//                 toast.success('added successfully');
//                 form.reset();
//                 window.location.href="/update"
//             }
//             )

//         }
//         }

//         return (
//             <div>
//                 <ToastContainer/>
//               <div class="card upload6">
//          <div class="card-body upload5">
//         <form onSubmit={handleSubmit} >
//             <h2>UPLOAD</h2>
//             <div class="upload0">
//                 <label value="title"><b>TITLE</b></label>
//                 <input type="text" name="title" className='ms-3'/>
//             </div>
//             <div class="upload1">
//                 <label value="img"><b>IMAGE</b></label>
//                 <input type='img' name="img" className='ms-3'/>
//                 </div>
             
//                 <div class="upload3">
//                 <label value="des"><b>DES</b></label>
//                 <input type='text' name='des' className='ms-3'/>
//                 </div>
//                 <div class="upload4">
//                 <label value="price"><b>PRICE</b></label>
//                 <input type='numbers' name='price' className='ms-3'/>
//             </div>

//             <div class="upload7">
//                 <button type="submit" class="btn btn-primary">upload</button>
               
//             </div>
//         </form>
//         </div>
//         </div>
//     </div>
   
//        )

// }


// export default Upload







const Upload1 = () => {

    const handleSubmit=(event)=>{

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

     const foods={rollno,stdno,fathername,dateofbirth ,mobileno,email,password,gender,Department,crs,cty,address,quantity};
       

        if(rollno==="" || stdno==="" ||fathername===""  || dateofbirth==="" || mobileno==="" ||email==="" ||password===""||gender==="" || Department==="" ||crs===""  ||  cty==="" ||address==="" )
        {
            console.log(foods)
            toast.warn('fill all fields ');
        }else{
        
            // console.log(foods,"foods in object ");
           
            fetch('http://localhost:5500/update',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),
            })
            // .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/update"
            }
            )
        }
        }

        return (
            <div>
                <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form onSubmit={handleSubmit} >
            <h2>Student Registration Form</h2>
            <br></br>
            <div class="upload0">
                <label value="title"><b>Roll no :</b></label>
                <input type="text" name="rn" className='ms-3'/>
            </div>
            <br></br>
            <div class="upload1">
                <label value="img"><b>Student name :</b></label>
                <input type='text' name="sn" className='ms-3'/>
                </div>
                <br></br>
             
                <div class="upload3">
                <label value="des"><b>Father's name :</b></label>
                <input type='text' name='fn' className='ms-3'/>
                </div>
                <br></br>
                <div class="upload4">
                <label value="price"><b>Date of birth :</b></label>
                <input type='date' name='dob' className='ms-3'/>
            </div>
            <br></br>
                 <div class="upload5">
                <label value="price"><b>Mobile no :</b></label>
                <input type='numbers' name='no' className='ms-3'/>
            </div>
            <br></br>
             <div class="upload6">
                <label value="price"><b>Email id :</b></label>
                <input type='email' name='mail' className='ms-3'/>
            </div>
            <br></br>
             <div class="upload7">
                <label value="price"><b>password :</b></label>
                <input type='password' name='psw' className='ms-3'/>
            </div>
            <br></br>
            <div class="upload8">
                <label><b>Gender : </b></label>
                <br></br>
                <br></br>
                <input type='radio' name='gen' value={"male"}/>  <b>Male </b>
                <input type='radio' name='gen' value={"female"}/> <b>Female</b>

            </div>
            <br></br>
             <div class="upload9">
                <label>
                <b>Department : </b>
              </label>
              <br />
              <input type="checkbox" name="dep" value="CSE" /> <b>CSE</b>
              <input type="checkbox" name="dep" value="IT" /> <b>IT</b>
              <input type="checkbox" name="dep" value="ECE" /> <b>ECE</b>
              <input type="checkbox" name="dep" value="Civil" /> <b>Civil</b>
              <input type="checkbox" name="dep" value="Mech" /> <b>Mech</b>
            </div>
            <br></br>

            <div className="upload10">
  <label ><b>Course :</b></label>
  <select name="course" id="course" defaultValue="">
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
                 <input type='text' name='city' className='ms-3'/>
             </div>
           <br></br>
              <div className="upload13">
  <label htmlFor="add"><b>Address :</b></label>
  <textarea name="add" id="add" rows="3" cols="30"></textarea>
</div>

             <br></br>


            <div class="upload14">
                <button type="submit" class="btn btn-primary">SUBMIT</button>
               
            </div>
        </form>
        </div>
        </div>
    </div>
   
       )

}


export default Upload1