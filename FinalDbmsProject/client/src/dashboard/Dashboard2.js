import React from 'react'
import './DashboardStyle.css'
import {useState} from "react";
import {useLocation} from 'react-router-dom';
import EnhancedTable from './TableData2';
import PieChart from './PieChart';
import YearPicker from "react-year-picker";
import Axios from 'axios'
import EmpNav from '../components/EmpNav';
import Carousal from '../components/Carousal';
//import DropDownPicker from 'react-native-dropdown-picker';

function Dashboard2() {
  const location = useLocation();
  console.log('Dashboard',location.state.stockDetail)

  
  const [year,setYear]=useState(-1)
  const [sales,setSales]=useState(0)
  const [orders,setOrders]=useState(location.state.orders[0].orders)
  const [customers,setCostumers]=useState(location.state.customers[0].customers)

  const handleSelect=(year)=>{
    console.log(year)
    Axios.post("http://localhost:3001/totalSales",{
      year:year
    }).then((response)=>{
      console.log(response.data)
      if(response.data[0].sales!=null)
      setSales(response.data[0].sales)
      else
      setSales(0)
    })
  }

  
  return (
    
    <div>
      <EmpNav/>
      <Carousal/>
    <div className='top'>
        <div className='card1'>
            <div className='text1'>Orders</div>
            <div className='text2'>{orders}</div>
        </div>
        <div className='card2'>
            <div className='text1'>Customers</div>
            <div className='text2'>{customers}</div>
        </div>
        <div className='card3'>
            {/* <div className='row'>
            <div className='text1'>Total Sales</div>
            <div className='year'>
            <YearPicker/>
            </div>
            <div className='text2'>20k</div>
            </div> */}
            <div className='header'>
            <div className='text1'>Total Sales</div>
            <div className='year'>
            <YearPicker onChange={handleSelect}/>
            </div>
            </div>
            <div className='text2'>{sales}</div>
            
        </div>
    </div>
    <div className='body1'>
      <div className='stockItems'>
        <EnhancedTable stockDetail={location.state.stockDetail}/>
      </div>
      <div className='body2'>
        <div className='card4'>
          <PieChart details={location.state.chartDetails}/>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Dashboard2