import Deposit from "./Deposit";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";

const Dashboard = () => {
  return (<div>
    <Deposit/>
    <Withdraw/>
    <Transfer/>

  </div>  )
}
 
export default Dashboard;