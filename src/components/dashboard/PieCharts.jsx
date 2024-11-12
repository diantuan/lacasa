import { PieChart } from "@mui/x-charts/PieChart";
import { useContext } from "react";
import { clientContext } from "../ClientHandling";

const PieCharts = () => {

  const {deposits, withdrawals, transfers} = useContext(clientContext);

  

  return ( <div>

    <PieChart
    series={[
      {
        data: [
          { id: 0, value: deposits, label: 'Deposits' },
          { id: 1, value: withdrawals, label: 'Withdrawals' },
          { id: 2, value: transfers, label: 'Transfers' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
  </div>);
}
 
export default PieCharts;