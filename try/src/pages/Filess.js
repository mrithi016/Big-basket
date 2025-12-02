import react from "react";
import { ToastContainer,toast } from "react-toastify";

const upload3=()=>{
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;

        const a=form.rn.value;
        const b=form.sn.value;
        const c=form.dob.value;
        const d=form.fn.value;
        const e=form.mail.value;
        const f=form.no.value;
        const node=form.querySelectorAll("input[name='dep']:checked");
        const g=Array.form(node).map(d=>d.value);
        const h=form.gen.value;
        const i=form.add.value;
        const quantity=1;

        const foods={a,b,c,d,e,f,g,h,i,quantity}

        if(a===""|| b===""|| c===""|| d===""|| e===""|| f===""|| g===""|| h===""|| i===""||)
       {
         toast.warn('fill all fields');
       }else{
        fetch('http://localhost:5500/update',{
            method:"POST",
            headers:{
            ' Content-type': 'application/json'
            },
            body:JSON.stringify(foods),
        })

        .then((data)=>{
            roast.success('added successfull');
            form.reset();
            window.location.href="/update";
        })

       }

    }
}
 return(
    <div>
        <ToastContainer/>
        <div class="card-upload">
            <div class="card-body upload">
                <form onSubmit={handleSubmit} ></form>
               <h2>Student form</h2>

               <div class="upload1">
                <label><br>Roll no :</br></label>
                <input type="text" name='rn'/>
               </div>
               
               <div class="upload2">
                <label><br>Gender :</br></label>
                <input type="radio" name='gen' value='male' /><b>Male</b>
                <input type="radio" name='gen' value='female' /><b>Female</b>
               </div>

                <div class="upload3">
                <label><br>Department :</br></label>
                <input type='checkbox' name='dep' value='it'/><br>IT</br>
                </div>

                <select name='course' defaultvalue=''>
                    <option value="aws">AWS</option>
                </select>




            </div>
        </div>
    </div>
 )
