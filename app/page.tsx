import Image from "next/image";
import { ChevronDown, Dot, Folder, House, PencilRuler, PenOff, TowerControl, Video } from 'lucide-react';
import { AiFillPicture } from 'react-icons/ai';
import { FaFolder, FaPencilRuler } from "react-icons/fa";
import { GiWatchtower } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { IoIosNotifications } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { MdLightMode } from 'react-icons/md';
import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { RiCustomerService2Line } from 'react-icons/ri';

 const Home = () => {
  return (
    <div className="bg-white min-h-screen text-black px-10 pb-5">
      <section className="Navbar py-5 flex items-center justify-between">
        <div className='flex items-center gap-1'>
          <Dot size={25} strokeWidth={17} absoluteStrokeWidth className='text-blue-400' />
          <p className='text-gray-500'>israeloyedele</p>
          <select name="" className='focus:outline-none text-gray-500'></select>
          {/* <ChevronDown size={15} /> */}

        </div>

        <div className="bg-gray-100 flex gap-8 py-3 px-7 text-lg rounded-xl">
        <GoHomeFill className='cursor-pointer hover:text-gray-500 duration-300' />
        <AiFillPicture className='cursor-pointer hover:text-gray-500 duration-300' />
        <IoVideocam className='cursor-pointer hover:text-gray-500 duration-300' />
        <FaPencilRuler className='cursor-pointer hover:text-gray-500 duration-300' />
        <PiPencilSimpleLineFill className='cursor-pointer hover:text-gray-500 duration-300' />
        <GiWatchtower className='cursor-pointer hover:text-gray-500 duration-300' />
        <FaFolder className='cursor-pointer hover:text-gray-500 duration-300' />
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1 bg-gray-100 p-2 rounded-xl cursor-pointer'>
            <AiFillPicture />
            <p className='text-sm'>Gallery</p>  
          </div>

          <div className='flex items-center gap-1 bg-gray-100 p-2 rounded-xl cursor-pointer'>
            <RiCustomerService2Line />
            <p className='text-sm'>Support</p>  
          </div>

          <IoIosNotifications className='text-[27px] bg-gray-100 p-1 rounded-xl cursor-pointer' />
          <MdLightMode className='text-[27px] bg-gray-100 p-1 rounded-xl cursor-pointer' />
          <Dot size={25} strokeWidth={17} absoluteStrokeWidth className='text-blue-400' />
        </div>
      </section>
      <section className="flex mt-10 mb-10">
        <div className="relative flex">
          <Image src="/assets/face-1.png" alt="face picture" width={350} height={100} className="rounded-l-2xl"/>
          <Image src="/assets/face-2.png" alt="face picture" width={350} height={100}/>
          <Image src="/assets/face-3.jpg" alt="face picture" width={350} height={100} className="rounded-r-2xl"/>

          <div className="absolute bottom-[42%] right-[36%]">
            <p className="text-white text-7xl font-bold">WAN 2.2</p>
          </div>

          <div className="absolute text-white bottom-7 left-7">
            <p className="text-3xl font-medium mb-2">WAN 2.2 Image generation</p>
            <p className="max-w-xl leading-5 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis corporis laboriosam quis consectetur, modi veritatis expedita molestiae tempore asperiores!</p>
          </div>

          <div className="absolute right-8 bottom-5">
            <button className="bg-white text-gray-900 px-7 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-300 duration-200">Try WAN 2.2</button>
          </div>
        </div>
      </section>
      <section>
        <p className="text-lg font-semibold mb-5">Generate</p>
        <div className="grid grid-cols-3 gap-7">
          <div className="flex items-center gap-2">
            <AiFillPicture className="bg-gray-600 text-white px-2 text-5xl rounded-xl" />
            <div>
              <p className="font-semibold">Image</p>
              <p className="text-gray-600 leading-4.5">Generate images with custom styles in Flux and ideogram</p>
            </div>

            <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
          </div>

          <div className="flex items-center gap-2">
          <IoVideocam className="bg-yellow-500 text-white px-2 text-5xl rounded-xl" />
            <div>
              <p className="font-semibold">Video</p>
              <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
            </div>

            <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
          </div>

          <div className="flex items-center gap-2">
          <PiPencilSimpleLineFill className="bg-gray-950 text-white px-2 text-5xl rounded-xl" />
            <div>
              <p className="font-semibold">Enhancer</p>
              <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
            </div>

            <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
          </div>

          <div className="flex items-center gap-2">
          <GiWatchtower className="bg-purple-500 text-white px-2 text-5xl rounded-xl" />
            <div>
              <p className="font-semibold">Edit</p>
              <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
            </div>

            <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
          </div>

          <div className="flex items-center gap-2">
            <FaFolder className="bg-green-900 text-white px-2 text-5xl rounded-xl" />
            <div>
              <p className="font-semibold">Video Lipsync</p>
              <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
            </div>

            <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
          </div>

          <div className="flex items-center gap-2">
            <GoHomeFill className="bg-black text-white px-2 text-5xl rounded-xl" />
              <div>
                <p className="font-semibold">Motion Transfer</p>
                <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
              </div>

              <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
