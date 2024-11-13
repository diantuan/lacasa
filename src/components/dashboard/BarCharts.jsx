import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";
import { clientContext } from "../ClientHandling";

const BarCharts = () => {

  const {clients} = useContext(clientContext);
  
  return (  <BarChart
    width={500}
    height={300}
    series={[
      { data: clients.map(client=>client.funds),  id: 'pvId', label:"Client Funds"}
    ]
    }
    xAxis={[{ data: clients.map(client=>(`${client.firstName}`)), scaleType: 'band' }]}
  />);
}
 
export default BarCharts;