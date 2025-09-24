// "use client";
// import { useState, useEffect } from "react";
// import { 
//   Camera, 
//   Video, 
//   PenTool, 
//   Home, 
//   Bell, 
//   Sun, 
//   Moon,
//   Image,
//   Folder,
//   Edit,
//   Play,
//   Headphones,
//   Circle
// } from 'lucide-react';

// const ThemeToggleApp = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   // Handle component mounting to avoid hydration issues
//   useEffect(() => {
//     setMounted(true);
//     // Check for saved theme preference or default to light
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDark(savedTheme === 'dark');
//     } else {
//       // Check system preference
//       setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//   }, []);

//   // Apply theme changes
//   useEffect(() => {
//     if (mounted) {
//       if (isDark) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('theme', 'light');
//       }
//     }
//   }, [isDark, mounted]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   // Don't render until mounted to avoid hydration mismatch
//   if (!mounted) {
//     return <div className="min-h-screen bg-white"></div>;
//   }

//   const features = [
//     {
//       icon: Image,
//       title: "Image",
//       description: "Generate images with custom styles in Flux and Ideogram",
//       color: "bg-gray-600"
//     },
//     {
//       icon: Video,
//       title: "Video", 
//       description: "Create stunning videos with AI-powered generation",
//       color: "bg-yellow-500"
//     },
//     {
//       icon: PenTool,
//       title: "Enhancer",
//       description: "Enhance and improve your existing content",
//       color: "bg-gray-900"
//     },
//     {
//       icon: Edit,
//       title: "Edit",
//       description: "Professional editing tools for your content",
//       color: "bg-purple-500"
//     },
//     {
//       icon: Play,
//       title: "Video Lipsync",
//       description: "Synchronize audio with video content seamlessly",
//       color: "bg-green-700"
//     },
//     {
//       icon: Headphones,
//       title: "Motion Transfer",
//       description: "Transfer motion between different video clips",
//       color: "bg-black"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//       <div className="px-4 sm:px-6 lg:px-10">
//         {/* Navigation Bar */}
//         <nav className="py-5 flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center gap-2">
//             <Circle size={20} className="text-blue-500 fill-current" />
//             <span className="text-gray-600 dark:text-gray-300 font-medium">israeloyedele</span>
//           </div>

//           {/* Navigation Icons */}
//           <div className="hidden md:flex items-center gap-6 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-xl">
//             <Home className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//             <Image className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//             <Video className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//             <PenTool className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//             <Edit className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//             <Camera className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//             <Folder className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-3">
//             <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//               <Image className="w-4 h-4" />
//               <span className="text-sm">Gallery</span>
//             </button>

//             <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//               <Headphones className="w-4 h-4" />
//               <span className="text-sm">Support</span>
//             </button>

//             <button className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//               <Bell className="w-5 h-5" />
//             </button>

//             {/* Theme Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
//               aria-label="Toggle theme"
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5 text-yellow-500" />
//               ) : (
//                 <Moon className="w-5 h-5 text-blue-600" />
//               )}
//             </button>

//             <Circle size={20} className="text-blue-500 fill-current" />
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="mt-10 mb-16">
//           <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-12 text-white overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
//               <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
//               <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
//             </div>

//             <div className="relative z-10">
//               <div className="max-w-2xl">
//                 <h1 className="text-6xl font-bold mb-4">WAN 2.2</h1>
//                 <h2 className="text-3xl font-medium mb-4">WAN 2.2 Image Generation</h2>
//                 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
//                   Experience the next generation of AI-powered content creation with advanced algorithms and stunning results.
//                 </p>
//                 <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
//                   Try WAN 2.2
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-bold mb-8">Generate</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
//               >
//                 <div className={`${feature.color} p-3 rounded-xl`}>
//                   <feature.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
//                     {feature.title}
//                   </h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {feature.description}
//                   </p>
//                 </div>
//                 <button className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
//                   Open
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Demo Section */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl">
//             <h3 className="text-xl font-bold mb-4">Theme Toggle Demo</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
//                 <p className="text-red-800 dark:text-red-200">Red themed card</p>
//               </div>
//               <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
//                 <p className="text-green-800 dark:text-green-200">Green themed card</p>
//               </div>
//               <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
//                 <p className="text-blue-800 dark:text-blue-200">Blue themed card</p>
//               </div>
//             </div>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
//               Current theme: <span className="font-semibold">{isDark ? 'Dark' : 'Light'}</span>
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ThemeToggleApp;


// "use client";
// import { useState, useEffect } from "react";
// import { 
//   Camera, 
//   Video, 
//   PenTool, 
//   Home, 
//   Bell, 
//   Sun, 
//   Moon,
//   Image,
//   Folder,
//   Edit,
//   Play,
//   Headphones,
//   Circle
// } from 'lucide-react';

// const ThemeToggleApp = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   // Handle component mounting to avoid hydration issues
//   useEffect(() => {
//     setMounted(true);
//     // Check for saved theme preference or default to light
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDark(savedTheme === 'dark');
//     } else {
//       // Check system preference
//       setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//   }, []);

//   // Apply theme changes
//   useEffect(() => {
//     if (mounted) {
//       if (isDark) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('theme', 'light');
//       }
//     }
//   }, [isDark, mounted]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   // Don't render until mounted to avoid hydration mismatch
//   if (!mounted) {
//     return <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}></div>;
//   }

//   const features = [
//     {
//       icon: Image,
//       title: "Image",
//       description: "Generate images with custom styles in Flux and Ideogram",
//       color: "#6B7280"
//     },
//     {
//       icon: Video,
//       title: "Video", 
//       description: "Create stunning videos with AI-powered generation",
//       color: "#EAB308"
//     },
//     {
//       icon: PenTool,
//       title: "Enhancer",
//       description: "Enhance and improve your existing content",
//       color: "#111827"
//     },
//     {
//       icon: Edit,
//       title: "Edit",
//       description: "Professional editing tools for your content",
//       color: "#8B5CF6"
//     },
//     {
//       icon: Play,
//       title: "Video Lipsync",
//       description: "Synchronize audio with video content seamlessly",
//       color: "#15803D"
//     },
//     {
//       icon: Headphones,
//       title: "Motion Transfer",
//       description: "Transfer motion between different video clips",
//       color: "#000000"
//     }
//   ];

//   // Dynamic styles based on theme
//   const styles = {
//     container: {
//       minHeight: '100vh',
//       backgroundColor: isDark ? '#111827' : '#FFFFFF',
//       color: isDark ? '#FFFFFF' : '#111827',
//       transition: 'all 0.3s ease',
//       padding: '0 40px'
//     },
//     navbar: {
//       padding: '20px 0',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       borderBottom: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`
//     },
//     navIcons: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '24px',
//       backgroundColor: isDark ? '#374151' : '#F3F4F6',
//       padding: '12px 24px',
//       borderRadius: '12px'
//     },
//     navButton: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//       backgroundColor: isDark ? '#374151' : '#F3F4F6',
//       padding: '8px 12px',
//       borderRadius: '8px',
//       border: 'none',
//       color: isDark ? '#FFFFFF' : '#111827',
//       cursor: 'pointer',
//       fontSize: '14px',
//       transition: 'all 0.2s ease'
//     },
//     themeButton: {
//       backgroundColor: isDark ? '#374151' : '#F3F4F6',
//       padding: '8px',
//       borderRadius: '8px',
//       border: 'none',
//       cursor: 'pointer',
//       transition: 'all 0.2s ease',
//       transform: 'scale(1)'
//     },
//     hero: {
//       marginTop: '40px',
//       marginBottom: '64px',
//       background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #3B82F6)',
//       borderRadius: '16px',
//       padding: '48px',
//       color: '#FFFFFF',
//       position: 'relative',
//       overflow: 'hidden'
//     },
//     heroTitle: {
//       fontSize: '4rem',
//       fontWeight: 'bold',
//       marginBottom: '16px'
//     },
//     heroSubtitle: {
//       fontSize: '1.5rem',
//       fontWeight: '500',
//       marginBottom: '16px'
//     },
//     heroDescription: {
//       fontSize: '1.125rem',
//       lineHeight: '1.75',
//       marginBottom: '32px',
//       maxWidth: '32rem'
//     },
//     heroButton: {
//       backgroundColor: '#FFFFFF',
//       color: '#111827',
//       padding: '12px 32px',
//       borderRadius: '9999px',
//       border: 'none',
//       fontWeight: '600',
//       cursor: 'pointer',
//       fontSize: '16px',
//       transition: 'all 0.2s ease'
//     },
//     featuresGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '24px',
//       marginBottom: '64px'
//     },
//     featureCard: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '16px',
//       padding: '16px',
//       backgroundColor: isDark ? '#374151' : '#F9FAFB',
//       borderRadius: '12px',
//       cursor: 'pointer',
//       transition: 'all 0.2s ease'
//     },
//     featureIcon: {
//       padding: '12px',
//       borderRadius: '12px',
//       color: '#FFFFFF'
//     },
//     featureButton: {
//       backgroundColor: isDark ? '#111827' : '#FFFFFF',
//       color: isDark ? '#D1D5DB' : '#374151',
//       padding: '8px 16px',
//       borderRadius: '9999px',
//       border: 'none',
//       fontSize: '14px',
//       fontWeight: '500',
//       cursor: 'pointer'
//     },
//     demoSection: {
//       backgroundColor: isDark ? '#374151' : '#F3F4F6',
//       padding: '32px',
//       borderRadius: '16px',
//       marginBottom: '64px'
//     },
//     demoGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '16px',
//       marginBottom: '16px'
//     },
//     demoCard: {
//       padding: '16px',
//       borderRadius: '8px'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Navigation Bar */}
//       <nav style={styles.navbar}>
//         {/* Logo Section */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//           <Circle size={20} style={{ color: '#3B82F6' }} />
//           <span style={{ color: isDark ? '#D1D5DB' : '#6B7280', fontWeight: '500' }}>israeloyedele</span>
//         </div>

//         {/* Navigation Icons */}
//         <div style={styles.navIcons}>
//           <Home size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//           <Image size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//           <Video size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//           <PenTool size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//           <Edit size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//           <Camera size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//           <Folder size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} />
//         </div>

//         {/* Right Section */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <button style={styles.navButton}>
//             <Image size={16} />
//             <span>Gallery</span>
//           </button>

//           <button style={styles.navButton}>
//             <Headphones size={16} />
//             <span>Support</span>
//           </button>

//           <button style={styles.navButton}>
//             <Bell size={20} />
//           </button>

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             style={{
//               ...styles.themeButton,
//               ':hover': { transform: 'scale(1.05)' }
//             }}
//             onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//           >
//             {isDark ? (
//               <Sun size={20} style={{ color: '#EAB308' }} />
//             ) : (
//               <Moon size={20} style={{ color: '#3B82F6' }} />
//             )}
//           </button>

//           <Circle size={20} style={{ color: '#3B82F6' }} />
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section style={styles.hero}>
//         <div>
//           <h1 style={styles.heroTitle}>WAN 2.2</h1>
//           <h2 style={styles.heroSubtitle}>WAN 2.2 Image Generation</h2>
//           <p style={styles.heroDescription}>
//             Experience the next generation of AI-powered content creation with advanced algorithms and stunning results.
//           </p>
//           <button 
//             style={styles.heroButton}
//             onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
//             onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
//           >
//             Try WAN 2.2
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section style={{ marginBottom: '64px' }}>
//         <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '32px' }}>Generate</h3>
//         <div style={styles.featuresGrid}>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               style={styles.featureCard}
//               onMouseEnter={(e) => e.target.style.backgroundColor = isDark ? '#4B5563' : '#F3F4F6'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = isDark ? '#374151' : '#F9FAFB'}
//             >
//               <div style={{ ...styles.featureIcon, backgroundColor: feature.color }}>
//                 <feature.icon size={24} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>
//                   {feature.title}
//                 </h4>
//                 <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280' }}>
//                   {feature.description}
//                 </p>
//               </div>
//               <button style={styles.featureButton}>
//                 Open
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Demo Section */}
//       <section style={styles.demoSection}>
//         <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Theme Toggle Demo</h3>
//         <div style={styles.demoGrid}>
//           <div style={{
//             ...styles.demoCard,
//             backgroundColor: isDark ? '#7F1D1D' : '#FEE2E2',
//             color: isDark ? '#FCA5A5' : '#991B1B'
//           }}>
//             <p>Red themed card</p>
//           </div>
//           <div style={{
//             ...styles.demoCard,
//             backgroundColor: isDark ? '#14532D' : '#DCFCE7',
//             color: isDark ? '#86EFAC' : '#166534'
//           }}>
//             <p>Green themed card</p>
//           </div>
//           <div style={{
//             ...styles.demoCard,
//             backgroundColor: isDark ? '#1E3A8A' : '#DBEAFE',
//             color: isDark ? '#93C5FD' : '#1D4ED8'
//           }}>
//             <p>Blue themed card</p>
//           </div>
//         </div>
//         <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280' }}>
//           Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong>
//         </p>
//       </section>
//     </div>
//   );
// };

// export default ThemeToggleApp;