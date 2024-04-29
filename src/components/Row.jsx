
function Row ({transactions: transact}) {
  
    const rows = transact.map ((transact, include) => {
      return (
        
        <tr key={include+1}>
          <td>{transact.date}</td>
          <td>{transact.description}</td>
          <td>{transact.category}</td>
          <td>{transact.amount}</td>
          
        </tr>
        
      )
    })
    
      return (
          <>
          
              {rows}
  
          </>
      )
  }
  
  export default Row