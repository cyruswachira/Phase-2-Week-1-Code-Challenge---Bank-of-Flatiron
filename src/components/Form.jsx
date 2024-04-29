
import { useState } from "react";

function Form({handleNewData}) {

    let [formData, setData] = useState({date:"", description: "", category: "", amount: ""} )



    function handleChange(e){
        setData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setData({date:"", description: "", category: "", amount: ""})


        handleNewData(formData) 
    }



  return(
  <form onSubmit={handleSubmit} >
    <div 
    style={{ 
        display: "flex",
        alignitems: "center",
        flexwrap: "wrap",
        margin: "0 auto",
        width: "50%",
        gap:"15px"
    }}>
      
      <div >
        <input type="date"  name="date" 
        value={formData.date}
        onChange={handleChange}
        required />
      </div>

      <div>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      
    </div>

    <button
      type="submit"
        style={{ 
        marginTop:"20px",
        marginLeft: "10px",
        display: "flex",
        alignitems: "center",
        flexwrap: "wrap",
        margin: "0 auto",
        width: "10%",}}>
      Add Transaction
    </button>
  </form>
  )


}
export default Form;