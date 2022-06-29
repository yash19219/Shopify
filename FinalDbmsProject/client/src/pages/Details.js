import React from 'react'
import './DetailStyle.css';
import {useLocation} from 'react-router-dom';
import EmpNav from '../components/EmpNav';
import Carousal from '../components/Carousal';
function Details() {
	const location = useLocation();
  	console.log('------INSIDE DETAILS----------',location.state.empDetail)
	  const empDetails=location.state.empDetail;
	// const empDetails=[
	// 	{
	// 		name:'Yash Aggarwal',
	// 		email:'yash@gmail.com',
	// 		department:1
	// 	},
	// 	{
	// 		name:'Yash Aggarwal1',
	// 		email:'yash1@gmail.com',
	// 		department:2
	// 	},
	// 	{
	// 		name:'Yash Aggarwal2',
	// 		email:'yash2@gmail.com',
	// 		department:3
	// 	},
	// 	{
	// 		name:'Yash Aggarwal3',
	// 		email:'yash3@gmail.com',
	// 		department:4
	// 	},
	// 	{
	// 		name:'Yash Aggarwal4',
	// 		email:'yash4@gmail.com',
	// 		department:5
	// 	},
	// 	{
	// 		name:'Yash Aggarwal5',
	// 		email:'yash5@gmail.com',
	// 		department:5
	// 	}
	// ]
  return (
	<div className='detailContainer'>
		<EmpNav/>
		{/* <Carousal/> */}
		{
		empDetails.map((item)=>(
			<div className='detailCard'>
				<img className='empPic' src='images/person.jpeg' alt="Avatar"/>
				<div>{item['name']}</div>
				<div>{item['email']}</div>
				<div>{item['Department_did']}</div>
			</div>
		))
		}
	</div>
  )
}

export default Details