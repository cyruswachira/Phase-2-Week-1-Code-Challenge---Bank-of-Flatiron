
function Search ({searching}) {
    
    return (
        <div><input type="text"
        className="form-control" 
        style={{backgroundcolor: "#333",
        color: "#fff",
        padding: "15",
        marginLeft: "24.5%",
        height: "50px",
        width: "55%",
        borderRadius: "10px",
        border: "3px solid #333",
        boxShadow: "0 0 10px #333"}}
        placeholder="Search your Recent Transactions" 
        onChange={searching}>
            </input> 
            </div>
    )
}

export default Search