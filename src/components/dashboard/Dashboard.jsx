import { useContext, useState } from "react";
import BarCharts from "./BarCharts";
import Deposit from "./Deposit";
import PieChart from "./PieCharts";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";
import './dashboard.css';
import { authContext } from "../Auth";


const Dashboard = () => {

  const {currentUser} = useContext(authContext);
  const [depositOn, setDepositOn] = useState(false);
  const [withdrawOn, setWithdrawOn] = useState(false);
  const [transferOn, setTransferON] = useState(false);

  const handleExpand = (num)=>{
    if(num===1){
      setDepositOn(true)
      setWithdrawOn(false)
      setTransferON(false)
    }
    else if(num===2){
      setWithdrawOn(true)
      setDepositOn(false)
      setTransferON(false)
    }
    else{
      setTransferON(true)
      setDepositOn(false)
      setWithdrawOn(false)
    }
  }

  const closeTransacts = ()=>{
    setDepositOn(false)
    setTransferON(false)
    setWithdrawOn(false)
  }

  return (<div className= "dashboard">
    {<h1 className="dashboardTitle">Welcome, {currentUser.employeeName}!</h1>}
    <div className="charts">
    <PieChart/>
    <BarCharts/>
    </div>
    <br />
    
    <div className="transactionButtons">
      <button onClick={()=>handleExpand(1)}>DEPOSIT</button>
      <button onClick={()=>handleExpand(2)}>WITHDRAW</button>
      <button onClick={()=>handleExpand(3)}>TRANSFER</button>
    
    </div>
    
    {depositOn && <div className="transactContainer"><Deposit/><i className="fa-solid fa-delete-left closeButo" onClick={closeTransacts}></i></div>}
    {withdrawOn && <div className="transactContainer"><Withdraw/><i className="fa-solid fa-delete-left closeButo" onClick={closeTransacts}></i></div>}
    {transferOn && <div className="transactContainer"><Transfer/><i className="fa-solid fa-delete-left closeButo" onClick={closeTransacts}></i></div>}
    
    <br />
    

  </div>  )
}
 
export default Dashboard;