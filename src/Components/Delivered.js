import { RiInstagramFill} from 'react-icons/ri'
import { SiFacebook } from 'react-icons/si';
import { HiEmojiSad } from 'react-icons/hi';
import { HiEmojiHappy } from 'react-icons/hi';
import { RiEmotionNormalFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { FiShare2 } from 'react-icons/fi';









const Delivered = () => {

    const mail=()=>{
        window.location.href = 'mailto:muralikrishna.infui@gmail.com';
    }
   
    return (
        <div>
            <div class="flex flex-row height-36 bg-white mt-4 mb-4 ">


                <div class="w-2/3 grid justify-items-end">

                    <h1 class="inline-block text-white text-4xl tracking-widest border-2 bg-neutral-900 px-4 mr-0">TRACKING</h1>


                </div>
                <div class="w-1/2 grid justify-items-end ">
                    <ul>
                        <li class="inline-block mr-10"><a href='https://www.facebook.com/'><SiFacebook size={28} /></a></li>
                        <li class="inline-block mr-10 "><a href='https://www.instagram.com/'><RiInstagramFill size={30} /></a></li>
                    </ul>
                </div>

            </div>
            <div class="bg-slate-300 pt-10 pb-20 ">
            <div class="flex md:flex-row sm:flex flex-col  justify-center md:px-4 ">
                    <div style={{ width: 380, height: 800 }} class=" flex flex-col border-2 bg-white rounded-2xl mr-10 ">
                        <div class="flex justify-around pt-10 pb-10">
                            <h1>Estimated Delivery Date</h1>
                            <FiShare2 size={20} /> 
                        </div>
                        <div class="pl-10">
                            <h1 class="text-2xl font-bold">Tuesday,</h1>
                            <h1 class="text-blue-600 text-5xl">October 26</h1>
                        </div>
                        <h1 class="pt-10 text-orange-600 text-xl pl-10 pb-5">DELIVERED</h1>
                        <hr class="border-1 border-blue-900 mx-4"></hr>
                        <div class="flex justify-around pt-5">
                            <div>
                                <h2 class="text-md font-bold">BLUEDART</h2>
                                <h2 class="text-sm ">Tracking ID:<span class="text-sm text-blue-900">75496502933</span></h2>
                            </div>
                            <div>
                                <h2 class="text-sm text-blue-600 font-bold cursor-pointer" onClick={mail}>Support?</h2>
                            </div>
                        </div>
                        <div class="overflow-y-scroll  pt-12 pl-8 pr-8 pb-20">
                            <div class="flex justify-around ">
                                <div>
                                    <h1 class="font-bold">25 Oct</h1>
                                    <h1 class=" text-blue-600">02:40 PM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-green-900"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Delivered</h2>

                                    <h2 class="text-xs font-semibold"> <span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Hadapsar Service Centre</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">25 Oct</h1>
                                    <h1 class=" text-blue-600">11:14 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Out For Delivery</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Hadapsar Service Centre</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">25 Oct</h1>
                                    <h1 class=" text-blue-600">10:38 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Arrived</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Hadapsar Service Centre</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">24 Oct</h1>
                                    <h1 class=" text-blue-600">11:34 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Further</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Hadapsar Service Centre</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">24 Oct</h1>
                                    <h1 class=" text-blue-600">10:28 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Arrived At Hub</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Pune Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">24 Oct</h1>
                                    <h1 class=" text-blue-600">07:36 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Arrived At Hub</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Mumbai Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">24 Oct</h1>
                                    <h1 class=" text-blue-600">02:46 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Arrived At Hub</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Mumbai Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">24 Oct</h1>
                                    <h1 class=" text-blue-600">12:8 AM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Delivered</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Chennai Airport Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">23 Oct</h1>
                                    <h1 class=" text-blue-600">07:43 PM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Delivered</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Chennai Airport Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5  ">
                                <div >
                                    <h1 class="font-bold">25 Oct</h1>
                                    <h1 class=" text-blue-600">02:40 PM</h1>
                                </div>
                               
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div >
                                    <h2 class="text-xs font-semibold pb-3 "><span class="font-bold">Activity:</span>Shipment Delivered</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Chennai Airport Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                                
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">23 Oct</h1>
                                    <h1 class=" text-blue-600">05:19 PM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Arrived</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Chennai Airport Hub</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">23 Oct</h1>
                                    <h1 class=" text-blue-600">03:35 PM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div class="pl-5">
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Arrived</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Velachery</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>
                            <div class="flex justify-around pt-5 ">
                                <div>
                                    <h1 class="font-bold">23 Oct</h1>
                                    <h1 class=" text-blue-600">02:3 PM</h1>
                                </div>
                                <div>
                                    < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-500 bg-gray-600"></p>
                                </div>
                                <div>
                                    <h2 class="text-xs font-semibold pb-3"><span class="font-bold">Activity:</span>Shipment Picked Up</h2>

                                    <h2 class="text-xs font-semibold"><span class="font-bold">Location: </span><span class="text-gray-600 opacit-60">Velachery</span></h2>
                                    <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div  >
                        <div style={{ width: 380, height: 200 }} class="bg-white  border-2 bg-white rounded-2xl flex flex-col mb-10  ">
                            <h1 class="pl-4 pb-4 pt-8 font-bold text-sm">How you felt shopping with us ?</h1>
                            <div>
                                <ul class="flex justify-around">
                                    <li class="inline-block "><HiEmojiSad size={60} color='#F95656' /></li>
                                    <li class="inline-block "><RiEmotionNormalFill size={60} color='#DAA520' /></li>
                                    <li class="inline-block "><HiEmojiHappy size={60} color='#00FA9A	' /></li>
                                </ul>
                            </div>
                            <div>
                                <ul class="flex justify-around text-xs font-bold mt-4">
                                    <li class="ml-4">Frustated</li>
                                    <li class="ml-4">Can be better</li>
                                    <li>Extremly Happy</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: 380, height: 300 }} class=" bg-white  border-2 bg-white rounded-2xl flex flex-col">
                            <h1 class="pt-8 pb-8 pl-4 text-sm font-bold">Based your recent experience with us, how likely are you to recommend us to friends & family?</h1>

                            <ul class="flex justify-around">
                                <li class="border-2 rounded-full h-8 w-8 border-rose-600 text-center inline-block ">1</li>
                                <li class="border-2 rounded-full h-8 w-8 border-rose-400 text-center inline-block">2</li>
                                <li class="border-2 rounded-full h-8 w-8 border-amber-400 text-center inline-block">3</li>
                                <li class="border-2 rounded-full h-8 w-8 border-cyan-400 text-center inline-block">4</li>
                                <li class="border-2 rounded-full h-8 w-8 border-cyan-400 text-center inline-block">5</li>

                            </ul>
                            <div class="flex justify-between">
                                <BiChevronDown class="ml-7" size={20} />
                                <BiChevronDown class="mr-7" size={20} />
                            </div>
                            <div class="text-xs flex justify-between font-semibold">
                                <p class="ml-4">Not Likely</p>
                                <p class="mr-4">Extremely Likely</p>
                            </div>
                            <div class="flex justify-between mt-8">
                                <input type="text" placeholder='Enter Your Remarks' class="border-2 ml-4 w-full"></input>
                                <button class="text-white text-sm  border bg-blue-600 rounded-md mr-4 px-2" >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="flex flex-col grid justify-end pt-20 pr-20">
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
export default Delivered