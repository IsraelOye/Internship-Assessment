// import Image from "next/image";
// import { Dot, } from 'lucide-react';
// import { AiFillPicture } from 'react-icons/ai';
// import { FaFolder, FaPencilRuler } from "react-icons/fa";
// import { GiWatchtower } from 'react-icons/gi';
// import { GoHomeFill } from 'react-icons/go';
// import { IoIosNotifications } from 'react-icons/io';
// import { IoVideocam } from 'react-icons/io5';
// import { MdLightMode } from 'react-icons/md';
// import { PiPencilSimpleLineFill } from 'react-icons/pi';
// import { RiCustomerService2Line } from 'react-icons/ri';
// import { ThemeToggle } from "./theme-toggle";

//  const Home = () => {
//   return (
//     <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white px-10 pb-5 transition-all duration-300">
//       {/* // Add this div somewhere in your Home component for testing */}
//         <div className="bg-red-500 dark:bg-blue-500 p-4 text-white">
//           Test: Should be RED in light mode, BLUE in dark mode
//         </div>
//       <section className="Navbar py-5 flex items-center justify-between">
//         <div className='flex items-center gap-1'>
//           <Dot size={25} strokeWidth={17} absoluteStrokeWidth className='text-blue-400' />
//           <p className='text-gray-500'>israeloyedele</p>
//           <select name="" className='focus:outline-none text-gray-500'></select>
//           {/* <ChevronDown size={15} /> */}

//         </div>

//         <div className="bg-gray-100 flex gap-8 py-3 px-7 text-lg rounded-xl">
//         <GoHomeFill className='cursor-pointer hover:text-gray-500 duration-300' />
//         <AiFillPicture className='cursor-pointer hover:text-gray-500 duration-300' />
//         <IoVideocam className='cursor-pointer hover:text-gray-500 duration-300' />
//         <FaPencilRuler className='cursor-pointer hover:text-gray-500 duration-300' />
//         <PiPencilSimpleLineFill className='cursor-pointer hover:text-gray-500 duration-300' />
//         <GiWatchtower className='cursor-pointer hover:text-gray-500 duration-300' />
//         <FaFolder className='cursor-pointer hover:text-gray-500 duration-300' />
//         </div>

//         <div className='flex items-center gap-2'>
//           <div className='flex items-center gap-1 bg-gray-100 p-2 rounded-xl cursor-pointer'>
//             <AiFillPicture />
//             <p className='text-sm'>Gallery</p>  
//           </div>

//           <div className='flex items-center gap-1 bg-gray-100 p-2 rounded-xl cursor-pointer'>
//             <RiCustomerService2Line />
//             <p className='text-sm'>Supporrt</p>  
//           </div>

//           <IoIosNotifications className='text-[27px] bg-gray-100 p-1 rounded-xl cursor-pointer' />
//           {/* <MdLightMode className='text-[27px] bg-gray-100 p-1 rounded-xl cursor-pointer' /> */}
//           <ThemeToggle />
//           <Dot size={25} strokeWidth={17} absoluteStrokeWidth className='text-blue-400' />
//         </div>
//       </section>
//       <section className="flex mt-10 mb-10">
//         <div className="relative flex">
//           <Image src="/assets/face-1.png" alt="face picture" width={350} height={100} className="rounded-l-2xl"/>
//           <Image src="/assets/face-2.png" alt="face picture" width={350} height={100}/>
//           <Image src="/assets/face-3.jpg" alt="face picture" width={350} height={100} className="rounded-r-2xl"/>

//           <div className="absolute bottom-[42%] right-[36%]">
//             <p className="text-white text-7xl font-bold">WAN 2.2</p>
//           </div>

//           <div className="absolute text-white bottom-7 left-7">
//             <p className="text-3xl font-medium mb-2">WAN 2.2 Image generation</p>
//             <p className="max-w-xl leading-5 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis corporis laboriosam quis consectetur, modi veritatis expedita molestiae tempore asperiores!</p>
//           </div>

//           <div className="absolute right-8 bottom-5">
//             <button className="bg-white text-gray-900 px-7 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-300 duration-200">Try WAN 2.2</button>
//           </div>
//         </div>
//       </section>
//       <section>
//         <p className="text-lg font-semibold mb-5">Generate</p>
//         <div className="grid grid-cols-3 gap-7">
//           <div className="flex items-center gap-2">
//             <AiFillPicture className="bg-gray-600 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold">Image</p>
//               <p className="text-gray-600 leading-4.5">Generate images with custom styles in Flux and ideogram</p>
//             </div>

//             <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//           <IoVideocam className="bg-yellow-500 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold">Video</p>
//               <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
//             </div>

//             <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//           <PiPencilSimpleLineFill className="bg-gray-950 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold">Enhancer</p>
//               <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
//             </div>

//             <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//           <GiWatchtower className="bg-purple-500 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold">Edit</p>
//               <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
//             </div>

//             <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <FaFolder className="bg-green-900 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold">Video Lipsync</p>
//               <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
//             </div>

//             <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <GoHomeFill className="bg-black text-white px-2 text-5xl rounded-xl" />
//               <div>
//                 <p className="font-semibold">Motion Transfer</p>
//                 <p className="text-gray-600">Generate images with custom styles in Flux and ideogram</p>
//               </div>

//               <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;


// import Image from "next/image";
// import { Dot, } from 'lucide-react';
// import { AiFillPicture } from 'react-icons/ai';
// import { FaFolder, FaPencilRuler } from "react-icons/fa";
// import { GiWatchtower } from 'react-icons/gi';
// import { GoHomeFill } from 'react-icons/go';
// import { IoIosNotifications } from 'react-icons/io';
// import { IoVideocam } from 'react-icons/io5';
// import { PiPencilSimpleLineFill } from 'react-icons/pi';
// import { RiCustomerService2Line } from 'react-icons/ri';
// import { ThemeToggle } from "./theme-toggle";

// const Home = () => {
//   return (
//     <div className="min-h-screen px-10 pb-5 transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
//       {/* Test div - remove after testing */}
//       <div className="bg-red-500 dark:bg-blue-500 p-4 text-white mb-4 rounded">
//         Test: Should be RED in light mode, BLUE in dark mode
//       </div>
      
//       <section className="Navbar py-5 flex items-center justify-between">
//         <div className='flex items-center gap-1'>
//           <Dot size={25} strokeWidth={17} absoluteStrokeWidth className='text-blue-400' />
//           <p className='text-gray-500 dark:text-gray-400'>israeloyedele</p>
//           <select name="" className='focus:outline-none text-gray-500 dark:text-gray-400 bg-transparent'></select>
//         </div>

//         <div className="bg-gray-100 dark:bg-gray-800 flex gap-8 py-3 px-7 text-lg rounded-xl">
//           <GoHomeFill className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//           <AiFillPicture className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//           <IoVideocam className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//           <FaPencilRuler className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//           <PiPencilSimpleLineFill className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//           <GiWatchtower className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//           <FaFolder className='cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 duration-300 text-gray-700 dark:text-gray-300' />
//         </div>

//         <div className='flex items-center gap-2'>
//           <div className='flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl cursor-pointer'>
//             <AiFillPicture className="text-gray-700 dark:text-gray-300" />
//             <p className='text-sm text-gray-700 dark:text-gray-300'>Gallery</p>  
//           </div>

//           <div className='flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl cursor-pointer'>
//             <RiCustomerService2Line className="text-gray-700 dark:text-gray-300" />
//             <p className='text-sm text-gray-700 dark:text-gray-300'>Support</p>  
//           </div>

//           <IoIosNotifications className='text-[27px] bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-1 rounded-xl cursor-pointer' />
//           <ThemeToggle />
//           <Dot size={25} strokeWidth={17} absoluteStrokeWidth className='text-blue-400' />
//         </div>
//       </section>

//       <section className="flex mt-10 mb-10">
//         <div className="relative flex">
//           <Image src="/assets/face-1.png" alt="face picture" width={350} height={100} className="rounded-l-2xl"/>
//           <Image src="/assets/face-2.png" alt="face picture" width={350} height={100}/>
//           <Image src="/assets/face-3.jpg" alt="face picture" width={350} height={100} className="rounded-r-2xl"/>

//           <div className="absolute bottom-[42%] right-[36%]">
//             <p className="text-white text-7xl font-bold">WAN 2.2</p>
//           </div>

//           <div className="absolute text-white bottom-7 left-7">
//             <p className="text-3xl font-medium mb-2">WAN 2.2 Image generation</p>
//             <p className="max-w-xl leading-5 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis corporis laboriosam quis consectetur, modi veritatis expedita molestiae tempore asperiores!</p>
//           </div>

//           <div className="absolute right-8 bottom-5">
//             <button className="bg-white text-gray-900 px-7 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-300 duration-200">Try WAN 2.2</button>
//           </div>
//         </div>
//       </section>

//       <section>
//         <p className="text-lg font-semibold mb-5 text-black dark:text-white">Generate</p>
//         <div className="grid grid-cols-3 gap-7">
//           <div className="flex items-center gap-2">
//             <AiFillPicture className="bg-gray-600 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold text-black dark:text-white">Image</p>
//               <p className="text-gray-600 dark:text-gray-400 leading-4.5">Generate images with custom styles in Flux and ideogram</p>
//             </div>
//             <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <IoVideocam className="bg-yellow-500 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold text-black dark:text-white">Video</p>
//               <p className="text-gray-600 dark:text-gray-400">Generate images with custom styles in Flux and ideogram</p>
//             </div>
//             <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <PiPencilSimpleLineFill className="bg-gray-950 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold text-black dark:text-white">Enhancer</p>
//               <p className="text-gray-600 dark:text-gray-400">Generate images with custom styles in Flux and ideogram</p>
//             </div>
//             <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <GiWatchtower className="bg-purple-500 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold text-black dark:text-white">Edit</p>
//               <p className="text-gray-600 dark:text-gray-400">Generate images with custom styles in Flux and ideogram</p>
//             </div>
//             <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <FaFolder className="bg-green-900 text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold text-black dark:text-white">Video Lipsync</p>
//               <p className="text-gray-600 dark:text-gray-400">Generate images with custom styles in Flux and ideogram</p>
//             </div>
//             <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>

//           <div className="flex items-center gap-2">
//             <GoHomeFill className="bg-black text-white px-2 text-5xl rounded-xl" />
//             <div>
//               <p className="font-semibold text-black dark:text-white">Motion Transfer</p>
//               <p className="text-gray-600 dark:text-gray-400">Generate images with custom styles in Flux and ideogram</p>
//             </div>
//             <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-1 rounded-full font-semibold">Open</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;




"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dot } from 'lucide-react';
import { AiFillPicture } from 'react-icons/ai';
import { FaFolder, FaPencilRuler } from "react-icons/fa";
import { GiWatchtower } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { IoIosNotifications } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { RiCustomerService2Line } from 'react-icons/ri';

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Get saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Apply theme class to <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, isClient]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}></div>;
  }

  const isDark = theme === "dark";

  // Dynamic styles based on theme
  const styles = {
    container: {
      backgroundColor: isDark ? '#111827' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '10px 40px',
      transition: 'all 0.3s ease'
    },
    navbar: {
      padding: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    logoText: {
      color: isDark ? '#D1D5DB' : '#6B7280'
    },
    select: {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: isDark ? '#D1D5DB' : '#6B7280'
    },
    navIcons: {
      backgroundColor: isDark ? '#374151' : '#F3F4F6',
      display: 'flex',
      gap: '32px',
      padding: '12px 28px',
      fontSize: '18px',
      borderRadius: '12px',
      transition: 'background-color 0.3s ease'
    },
    navIcon: {
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexShrink: 0
    },
    navButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: isDark ? '#374151' : '#F3F4F6',
      padding: '8px 12px',
      borderRadius: '12px',
      cursor: 'pointer',
      border: 'none',
      color: isDark ? '#ffffff' : '#000000',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
      whiteSpace: 'nowrap' as const,
      flexShrink: 0
    },
    themeButton: {
      fontSize: '20px',
      backgroundColor: isDark ? '#374151' : '#F3F4F6',
      padding: '4px',
      borderRadius: '12px',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.2s ease',
      color: isDark ? '#ffffff' : '#000000'
    },
    notificationIcon: {
      fontSize: '27px',
      backgroundColor: isDark ? '#374151' : '#F3F4F6',
      padding: '4px',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    heroSection: {
      display: 'flex',
      marginTop: '40px',
      marginBottom: '40px'
    },
    heroContainer: {
      position: 'relative' as const,
      display: 'flex'
    },
    heroTitle: {
      position: 'absolute' as const,
      bottom: '42%',
      right: '36%',
      color: '#ffffff',
      fontSize: '4.5rem',
      fontWeight: 'bold'
    },
    heroContent: {
      position: 'absolute' as const,
      color: '#ffffff',
      bottom: '28px',
      left: '28px'
    },
    heroMainTitle: {
      fontSize: '1.875rem',
      fontWeight: '500',
      marginBottom: '8px'
    },
    heroDescription: {
      maxWidth: '36rem',
      lineHeight: '1.25',
      color: '#E5E7EB'
    },
    heroButton: {
      position: 'absolute' as const,
      right: '32px',
      bottom: '20px',
      backgroundColor: isDark ? '#374151' : '#ffffff',
      color: isDark ? '#ffffff' : '#111827',
      padding: '12px 28px',
      borderRadius: '9999px',
      fontWeight: '600',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.2s ease'
    },
    generateSection: {
      marginBottom: '40px'
    },
    generateTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '28px'
    },
    gridItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    iconContainer: {
      fontSize: '3rem',
      padding: '0 8px',
      borderRadius: '12px',
      color: '#ffffff'
    },
    itemContent: {
      flex: 1
    },
    itemTitle: {
      fontWeight: '600',
      marginBottom: '2px'
    },
    itemDescription: {
      color: isDark ? '#9CA3AF' : '#6B7280',
      fontSize: '14px'
    },
    itemButton: {
      backgroundColor: isDark ? '#374151' : '#F3F4F6',
      color: isDark ? '#E5E7EB' : '#374151',
      padding: '4px 20px',
      borderRadius: '9999px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <section style={styles.navbar}>
        <div style={styles.logoSection}>
          <Dot size={25} strokeWidth={17} absoluteStrokeWidth style={{ color: '#60A5FA' }} />
          <p style={styles.logoText}>israeloyedele</p>
          <select name="" style={styles.select}></select>
        </div>

        <div style={styles.navIcons}>
          <GoHomeFill 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
          <AiFillPicture 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
          <IoVideocam 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
          <FaPencilRuler 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
          <PiPencilSimpleLineFill 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
          <GiWatchtower 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
          <FaFolder 
            style={styles.navIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#6B7280'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = isDark ? '#ffffff' : '#000000'}
          />
        </div>

        <div style={styles.rightSection}>
          <div 
            style={styles.navButton}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? '#4B5563' : '#E5E7EB'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? '#374151' : '#F3F4F6'}
          >
            <AiFillPicture />
            <span>Gallery</span>
          </div>

          <div 
            style={styles.navButton}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? '#4B5563' : '#E5E7EB'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? '#374151' : '#F3F4F6'}
          >
            <RiCustomerService2Line />
            <span>Support</span>
          </div>

          <IoIosNotifications 
            style={styles.notificationIcon}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = isDark ? '#4B5563' : '#E5E7EB'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = isDark ? '#374151' : '#F3F4F6'}
          />

          {/* Theme Toggle Button */}
          <div
            onClick={toggleTheme}
            style={styles.themeButton}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? '#4B5563' : '#E5E7EB';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = isDark ? '#374151' : '#F3F4F6';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </div>

          <Dot size={25} strokeWidth={17} absoluteStrokeWidth style={{ color: '#60A5FA' }} />
        </div>
      </section>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <Image src="/assets/face-1.png" alt="face picture" width={350} height={100} style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}/>
          <Image src="/assets/face-2.png" alt="face picture" width={350} height={100}/>
          <Image src="/assets/face-3.jpg" alt="face picture" width={350} height={100} style={{ borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}/>

          <div style={styles.heroTitle}>
            <p>WAN 2.2</p>
          </div>

          <div style={styles.heroContent}>
            <p style={styles.heroMainTitle}>WAN 2.2 Image generation</p>
            <p style={styles.heroDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis corporis laboriosam quis consectetur, modi veritatis expedita molestiae tempore asperiores!</p>
          </div>

          <div>
            <button 
              style={styles.heroButton}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = isDark ? '#4B5563' : '#F3F4F6'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = isDark ? '#374151' : '#ffffff'}
            >
              Try WAN 2.2
            </button>
          </div>
        </div>
      </section>

      {/* Generate Section */}
      <section style={styles.generateSection}>
        <p style={styles.generateTitle}>Generate</p>
        <div style={styles.grid}>
          <div style={styles.gridItem}>
            <AiFillPicture style={{ ...styles.iconContainer, backgroundColor: '#6B7280' }} />
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>Image</p>
              <p style={styles.itemDescription}>Generate images with custom styles in Flux and ideogram</p>
            </div>
            <button style={styles.itemButton}>Open</button>
          </div>

          <div style={styles.gridItem}>
            <IoVideocam style={{ ...styles.iconContainer, backgroundColor: '#EAB308' }} />
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>Video</p>
              <p style={styles.itemDescription}>Generate images with custom styles in Flux and ideogram</p>
            </div>
            <button style={styles.itemButton}>Open</button>
          </div>

          <div style={styles.gridItem}>
            <PiPencilSimpleLineFill style={{ ...styles.iconContainer, backgroundColor: '#030712' }} />
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>Enhancer</p>
              <p style={styles.itemDescription}>Generate images with custom styles in Flux and ideogram</p>
            </div>
            <button style={styles.itemButton}>Open</button>
          </div>

          <div style={styles.gridItem}>
            <GiWatchtower style={{ ...styles.iconContainer, backgroundColor: '#A855F7' }} />
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>Edit</p>
              <p style={styles.itemDescription}>Generate images with custom styles in Flux and ideogram</p>
            </div>
            <button style={styles.itemButton}>Open</button>
          </div>

          <div style={styles.gridItem}>
            <FaFolder style={{ ...styles.iconContainer, backgroundColor: '#14532D' }} />
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>Video Lipsync</p>
              <p style={styles.itemDescription}>Generate images with custom styles in Flux and ideogram</p>
            </div>
            <button style={styles.itemButton}>Open</button>
          </div>

          <div style={styles.gridItem}>
            <GoHomeFill style={{ ...styles.iconContainer, backgroundColor: '#000000' }} />
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>Motion Transfer</p>
              <p style={styles.itemDescription}>Generate images with custom styles in Flux and ideogram</p>
            </div>
            <button style={styles.itemButton}>Open</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;