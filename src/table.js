import React,{useState,useEffect} from 'react'



export const TableContent=function TableContent(){

const data=[
    {id:1,name:"abhay",email:'prakash@gmail.com',address:"1120/a",mobilenumber:'9867456320'},
    {id:2,name:"abhay",email:'prakash@gmail.com',address:"1120/a",mobilenumber:'9867456320'},
    {id:3,name:"abhay",email:'prakash@gmail.com',address:"1120/a",mobilenumber:'9867456320'},
    {id:4,name:"abhay",email:'prakash@gmail.com',address:"1120/a",mobilenumber:'9867456320'},
]
const [dataTable,setDataTable]=useState(data)
const [openForm,setOpenForm]=useState(false)


const AddButton=function AddButton(){
setOpenForm(true);
}

const handleSubmit=function handleSubmit(){


}


console.log(dataTable);

return(

<>
<div className="ui container">
    <div className="ui grid">
        <div className="ui one column row stackable wide " >
            <div className="column">
    
            <table className="ui table">
<tr>
    <th>
        Id   
 </th>
    <th>
        Name
    </th>
    <th>
        Email
    </th>
    <th>
        address
    </th>
    <th>
        MobileNumber
    </th>
    <th colSpan='2'>
       Action area
    </th>
</tr>
 { dataTable.map((data,key)=>{  
    //  console.log(key);
  return(

<tr key={key}>
    <td>
        {data.id}
    </td>
    <td>
        {data.name}
    </td>
    <td>
        {data.email}
    </td>
    <td>
        {data.address}
    </td>
    <td>
        {data.mobilenumber}
    </td>
      <td>
       <button className="ui button" onClick={AddButton}>Add+</button>
       <button className="ui button">Delete-</button>
    </td>


</tr>
)
})}

</table>

</div>
    </div>
    
    <div className="ui one column row stackable wide " >
            <div className="column">
                <form className="ui form" onSubmit={handleSubmit}>
                    <input type="text" name="" required/><br/>
                    <input type="text" name="" required/><br/>
                    <input type="text" name="" required/><br/>
                    <input type="text" name="" required/><br/>
                    <input type="text" name="" required/><br/>

                </form>
                </div>
                </div>

            
</div>
</div>

</>


)

}
