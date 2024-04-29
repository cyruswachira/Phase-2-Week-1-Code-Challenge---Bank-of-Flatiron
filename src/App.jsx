
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/Form';
import Search from './components/Searchbar';
import { useState } from 'react';

function App() {
  const transactionData = [
    {
      date: "01/04/2024",
        description: "Zara,Puma",
        category: "Fashion",
        amount: "100"
    },
    {
        date: "02/04/2024",
        description: "Movie",
        category: "Entertainment",
        amount: "50"
    },
    {
        date: "03/04/2024",
        description: "Basketball,Football",
        category: "Sports",
        amount: "35"
    },
    {
        date: "04/04/2024",
        description: "Bitcoin",
        category: "Crypto",
        amount: "1000"
    }
      ]


      const [data, setData] = useState(transactionData)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.includes(searchData)
        }
        else {
            return true
          }
        })
        
      function handleNewData (formData) {
        setData([...data, formData])
      }


  return (

    <>
    <Header/>
    <Search searching={handleSearch}/>
    <Form handleNewData={handleNewData}/>
    <Table transaction={newData}/>
    </>
  );
}

export default App;

