import Deposit from "./Deposit";
import PieChart from "./PieCharts";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";
import './dashboard.css';


const Dashboard = () => {
  return (<div className= "dashboard">
    <h1 className="dashboardTitle">La Casa Employee Dashboard</h1>
    <PieChart/>
    <br />
    
    <Deposit/>
    <Withdraw/>
    <Transfer/>
    <br />
    

  </div>  )
}
 
export default Dashboard;