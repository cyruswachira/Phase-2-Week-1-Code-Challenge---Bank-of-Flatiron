
import Row from "./Row"

function Table({transaction}){


    return(

        <div>

        <table 
        style={{ 
        border: "1px solid black", 
        width: "40%",
        marginTop:"5vh",
        marginLeft: "33%", }}>
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>AMOUNT</th>
                    
                </tr>
            </thead>
            <tbody>
                <Row transactions={transaction}/>
            </tbody>    
        </table>

        </div>
    )

}


export default Table;