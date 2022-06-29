// import React from 'react'
// import {useState} from "react";
// import Axios from 'axios'
// import {useNavigate} from "react-router-dom"
// // import '../LoginStyle.css'
// import './Lg.css'
// //import './LoginController.js'
// function Login() {
//   const [username,setUsername]=useState("");
//   const [password,setPassword]=useState("");
//   const [message,setMessage]=useState("")

//   let navigate=useNavigate();

//   const Authenticate=()=>{
//     console.log(username,password)
//     Axios.post("http://localhost:3001/authentication",{
//       username:username,
//       password:password
//     }).then((response)=>{
//       console.log(response.data)
//       if(response.data.length!=1){
//         setMessage('Wrong Username or Password')
//       }
//       else{
//         setMessage('')
//         Axios.post("http://localhost:3001/customerCheck",{
//           username:response.data[0]['uname']
//         }).then((response1)=>{
//           if(response1.data.length==1){
//             console.log('--------',response1.data)
//             navigate("/Home",{state:{userDetail:response1.data},replace:false})
//           }
//         })
//         Axios.post("http://localhost:3001/employeeCheck",{
//           username:response.data[0]['uname']
//         }).then((response2)=>{
//           if(response2.data.length==1){
//             console.log('##########',response2.data)
//             navigate("/HomeEmp",{state:{userDetail:response2.data},replace:false})
//           }
//         })
        
//       }

//     })
//   }


//   return (
//     <div className="container" id="container">
// 	{/* <div classNameName="form-container sign-up-container">
// 		<form >
// 			<h1>Create Account</h1>
// 			<div className="social-container">
// 				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
// 				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
// 				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
// 			</div>
// 			<span>or use your email for registration</span>
// 			<input type="text" placeholder="Name" />
// 			<input type="email" placeholder="Email" />
// 			<input type="password" placeholder="Password" />
// 			<button>Sign Up</button>
// 		</form>
// 	</div> */}
// 	<div className="form-container sign-in-container">
// 		<div className='input'>
// 			<h1>Sign in</h1>
// 			{/* <div className="social-container">
// 				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
// 				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
// 				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
// 			</div> */}
// 			{/* <span>or use your account</span> */}
// 			<input placeholder="Username" onChange={(event)=>{
//               setUsername(event.target.value);
//             }}/>
// 			<input type="password" placeholder="Password" onChange={(event)=>{
//               setPassword(event.target.value);
//             }}/>
// 			<a>Forgot your password?</a>
// 			<button onClick={Authenticate}>Sign In</button>
// 			{/* onClick={Authenticate} */}
// 			<div>{message}</div>
// 			</div>
		
// 	</div>
// 	<div className="overlay-container">
// 		<div className="overlay">
// 			<div className="overlay-panel overlay-left">
// 				<h1>Welcome Back!</h1>
// 				<p>To keep connected with us please login with your personal info</p>
// 				<button className="ghost" id="signIn" >Sign In</button>
// 			</div>
// 			<div className="overlay-panel overlay-right">
// 				<h1>Hello, Friend!</h1>
// 				<p>Enter your personal details and start journey with us</p>
// 				<button className="ghost" id="signUp" >Sign Up</button>
// 			</div>
// 		</div>
// 	</div>
// </div>
//   )
// }

// export default Login





import React from 'react'
import {useState} from "react";
import Axios from 'axios'
import {useNavigate} from "react-router-dom"
import './Lg.css'
//import './LoginController.js'
function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("")
  const [stockdetails,setStockDetails]=useState("fail")
  let navigate=useNavigate();

  

  const Authenticate=()=>{
    console.log(username,password)
    Axios.post("http://localhost:3001/authentication",{
      username:username,
      password:password
    }).then((response)=>{
      console.log(response.data)
      if(response.data.length!=1){
        setMessage('Wrong Username or Password')
      }
      else{
        setMessage('')
        Axios.post("http://localhost:3001/customerCheck",{
          username:response.data[0]['uname']
        }).then((response1)=>{
          if(response1.data.length==1){
            console.log('--------',response1.data)
            navigate("/Home",{state:{userDetail:response1.data},replace:false})
          }
        })
        Axios.post("http://localhost:3001/employeeCheck",{
          username:response.data[0]['uname']
        }).then((response2)=>{
          if(response2.data.length==1){
            Axios.post("http://localhost:3001/productStock").then((response3)=>{
				console.log('response3')
				Axios.post("http://localhost:3001/countOrders").then((response4)=>{
					console.log("response4")
					console.log(response4.data)
					Axios.post("http://localhost:3001/countCustomers").then((response5)=>{
						console.log("response5")
						console.log(response5.data)
						Axios.post("http://localhost:3001/pieChartData").then((response6)=>{
							console.log('response6')
							console.log(response6.data)
							console.log(response6.data[0].catagory)
							var array={};
							var cnt=0
							var sum=0
							for(let i=0;i<response6.data.length;i++){
								if(cnt<10){
									array[response6.data[i].catagory]=response6.data[i].cat
								}
								else{
									sum+=response6.data[i].cat
								}
								cnt+=1
							}
							array['others']=sum
							console.log(array)
							navigate("/DashBoard",{state:{userDetail:response2.data,stockDetail:response3.data,orders:response4.data,customers:response5.data,chartDetails:array},replace:false})
						})
						
					})
					//navigate("/employee",{state:{userDetail:response2.data,stockDetail:response3.data,orders:response4.data,customers:response5},replace:false})
				})
				//navigate("/employee",{state:{userDetail:response2.data,stockDetail:response3.data},replace:false})
			})
			
            //navigate("/employee",{state:{userDetail:response2.data,stockDetail:stockdetails},replace:false})
          }
        })
        
      }

    })

	//navigate('/loading')

  }


  return (
	  <div className='topContainer'>
    <div className="container" id="container">
	{/* <div classNameName="form-container sign-up-container">
		<form >
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div> */}
	<div className="form-container sign-in-container">
		<div className='input'>
			<h1>Sign in</h1>
			{/* <div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
			{/* <span>or use your account</span> */}
			<input placeholder="Username" onChange={(event)=>{
              setUsername(event.target.value);
            }}/>
			<input type="password" placeholder="Password" onChange={(event)=>{
              setPassword(event.target.value);
            }}/>
			<a>Forgot your password?</a>
			<button onClick={Authenticate}>Sign In</button>
			{/* onClick={Authenticate} */}
			<div>{message}</div>
			</div>
		
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" >Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" >Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>
  )
}

export default Login