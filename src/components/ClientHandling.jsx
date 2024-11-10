import { createContext, useEffect, useState } from "react";
import clientlist from '../data/clients.json';

const clientContext = createContext();


const ClientProvider = ({children}) => {


  const [clients, setClients] = useState(clientlist);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    const clientsSaved = JSON.parse(localStorage.getItem("clients"));

    if(clientsSaved){
      setClients(clientsSaved)
    }else{
      setClients(clientlist)
    }
    
  }, [])
  


  const addClient = (obj)=>{
    let newArray = [...clients, obj]
    setClients(newArray)
    localStorage.setItem("clients", JSON.stringify(newArray))
    
  }

  const deleteClient = id=>{
    let newArray = clients.filter(client=>client.id!==id);
    setClients(newArray)
    localStorage.setItem("clients", JSON.stringify(newArray))

  }

  const editClient = (id, firstName, lastName, address, cardNumber)=>{
    let clientIndex = clients.findIndex(client=>client.id===id);
    let newArray = clients;
    newArray[clientIndex].firstName = firstName;
    newArray[clientIndex].lastName = lastName;
    newArray[clientIndex].address = address;
    newArray[clientIndex].cardNumber = cardNumber;
    localStorage.setItem("clients", JSON.stringify(newArray));
    setClients(newArray);

  }

  const deposit = (id, amount)=>{
    let newArray = clients;
    let clientIndex = clients.findIndex(client=>client.id===id);
    newArray[clientIndex].funds += amount;
    localStorage.setItem("clients", JSON.stringify(newArray));
    setClients(newArray);
  }

  const withdraw = (id, amount) =>{
    let newArray = clients;
    let clientIndex = clients.findIndex(client=>client.id===id);
    if(newArray[clientIndex].funds >= amount){
      newArray[clientIndex].funds -= amount;
    }else{
      setError("Withdrawal Amount Exceeds Funds");
    }
    
    localStorage.setItem("clients", JSON.stringify(newArray));
    setClients(newArray);
  }

  const transfer = (id1, id2, amount)=>{
    let newArray = clients;
    let clientIndex1 = clients.findIndex(client=>client.id===id1);
    let clientIndex2 = clients.findIndex(client=>client.id===id2);
    if(newArray[clientIndex1].funds >= amount){
      newArray[clientIndex1].funds -= amount;
      newArray[clientIndex2].funds += amount;
    }else{
      setError("Transfer Amount Exceeds Funds");
    }
    localStorage.setItem("clients", JSON.stringify(newArray));
    setClients(newArray);
  }


  return (
    <clientContext.Provider value={{clients, setClients, addClient, deleteClient, editClient, deposit, withdraw, transfer}}>
      {children}
    </clientContext.Provider>
    
   );
}
 
export {clientContext, ClientProvider} ;