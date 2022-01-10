import React, { useState } from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { SiFacebook } from 'react-icons/si';
import { HiOutlineEmojiSad } from 'react-icons/hi';
const Screen1 = () => {
    const [state, setState] = useState()
    const loadData = (e) => {
        e.preventDefault();
        var orderid = e.target.orderid;
        setState({
            ...state,
            orderid: e.target.value
        })
        console.log(state)
    }
    const validate = () => {
        if ((state.orderid) == 5678) {
            window.location.href = 'Delivered';
        }
        else {
            document.getElementById("demo1").style.visibility="visible";
          
            document.getElementById("demo").innerHTML="Tracking Number/Order ID not registered with us";
            document.getElementById("demo").style.color='red'
        }
    }
    
    return (
        <div>
            <div class="flex flex-row height-36 bg-white mt-4 mb-4">


                <div class="  w-2/3 grid justify-items-end ">

                    <h1 class="inline-block text-white text-4xl tracking-widest border-2 bg-neutral-900 px-4 mr-0  "> TRACKING</h1>


                </div>
                <div class="w-1/2 grid justify-items-end ">
                    <ul>
                        <li class="inline-block mr-10"><a href='https://www.facebook.com/'><SiFacebook size={28} /></a></li>
                        <li class="inline-block mr-10"><a href='https://www.instagram.com/'><RiInstagramFill size={30} /></a></li>
                    </ul>
                </div>

            </div>
            <div class="bg-slate-300 pt-10 pb-20   h-screen">
                <div class="flex flex-col grid justify-center ">
                    <h1 class="font-bold ">Enter your Tracking ID/Order ID</h1>
                    <div class="flex flex-row mt-8">

                        {/* <input type="radio" name="name1" class="w-5 h-5  " /><span class="mr-8 ">Tracking ID/Order ID</span>  */}

                    </div>
                    <div class="flex flex-row pt-8">
                        <input type="text" placeholder='Eg.123456789' class="border rounded-md h-10 w-full" orderid="id" onChange={loadData}></input>
                        <button class="border border-blue bg-blue-900 px-2 text-white ml-4 rounded-md" onClick={validate}>Submit</button>
                    </div>
                   <div class="pt-10 grid justify-items-center">
                   
                      <HiOutlineEmojiSad style={{visibility:"hidden",color:"red"}} size={50} id="demo1" />
                    <p id="demo"></p>
                     
                    
                    </div>
                </div>
                <div class="flex flex-row grid justify-end absolute bottom-0 right-10">
                    <div >
                        <p class="text-sm">Powered By</p>
                    </div>
                    <div>
                        <img src='./Images/logo.png' size={50} />
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Screen1