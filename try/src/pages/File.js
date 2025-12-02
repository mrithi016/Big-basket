


const Upload1 = () => {

    const handleSubmit=(event)=>{

        event.preventDefault();
       
        const form=event.target;

        const a=form.fn.value;
        const b=form.ln.value;
        const c=form.add.value;
        const d=form.city.value;
        const e=form.state.value;
         const f=form.zip.value;
          const g=form.tele.value;


        const quantity=1;

        if(a==="" || b==="" ||c===""  || d==="" || e==="" ||f==="" ||g=="")
        {
            toast.warn('fill all fields ');
        }else{
            const foods={a,b,c,d,e,f,g,quantity};
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
            <h2>Fill the details</h2>
            <div class="upload0">
                <label value="title"><b>FirstName</b></label>
                <input type="text" name="fn" className='ms-3'/>
            </div>
            <div class="upload1">
                <label value="img"><b>LastName</b></label>
                <input type='img' name="ln" className='ms-3'/>
                </div>
             
                <div class="upload3">
                <label value="des"><b>Address</b></label>
                <input type='text' name='add' className='ms-3'/>
                </div>
                <div class="upload4">
                <label value="price"><b>City</b></label>
                <input type='numbers' name='city' className='ms-3'/>
            </div>
                 <div class="upload5">
                <label value="price"><b>State</b></label>
                <input type='numbers' name='state' className='ms-3'/>
            </div>
             <div class="upload6">
                <label value="price"><b>Zip</b></label>
                <input type='numbers' name='zip' className='ms-3'/>
            </div>
             <div class="upload7">
                <label value="price"><b>Telephone</b></label>
                <input type='numbers' name='tele' className='ms-3'/>
            </div>


            <div class="upload7">
                <button type="submit" class="btn btn-primary">SUBMIT</button>
               
            </div>
        </form>
        </div>
        </div>
    </div>
   
       )

}


export default Upload1
