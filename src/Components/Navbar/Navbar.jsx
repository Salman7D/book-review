const Navbar = () => {
    return (
//         <div>
//             <header className="p-10">
// 	<div className="container flex justify-between h-16 mx-auto">
// 		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
// 			<p className="btn btn-ghost text-3xl font-bold">Book Vibe</p>
// 		</a>
// 		<ul className="items-stretch hidden space-x-3 lg:flex">
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2">Listed Books</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2">Pages to Read</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2">Link</a>
// 			</li>
// 			<li className="flex">
// 				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2">Link</a>
// 			</li>
			
// 		</ul>
// 		<div className="items-center flex-shrink-0 hidden lg:flex gap-2">
// 			<button className="self-center px-8 py-3 rounded-lg bg-[#23BE0A] text-[#FFF] text-lg font-semibold btn btn-ghost">Sign in</button>
// 			<button className="self-center px-8 py-3 rounded-lg bg-[#59C6D2] text-[#FFF] text-lg font-semibold btn btn-ghost">Sign up</button>
// 		</div>
// 		<button className="p-4 lg:hidden">
// 			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
// 				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// 			</svg>
// 		</button>
// 	</div>
// </header>
//         </div>

<div className="navbar bg-base-100 p-10">
<div className="navbar-start">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
    <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
    <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
    <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
    <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
    <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
    </ul>
  </div>
  <a className="btn btn-ghost text-xl"><p className="text-3xl font-bold">Book Vibe</p></a>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 gap-2">
  <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
  <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
  <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
  <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
  <li className="flex">
        <a rel="noopener noreferrer" href="#" className="flex items-center px-3 text-[#23BE0A] border border-solid  border-[#23BE0A] rounded-lg text-lg font-normal">Home</a>   
    </li>
  </ul>
</div>
<div className="navbar-end gap-2">
  <a className="rounded-lg bg-[#23BE0A] text-[#FFF] text-lg font-semibold btn btn-ghost">Sign In</a>
  <a className="rounded-lg bg-[#59C6D2] text-[#FFF] text-lg font-semibold btn btn-ghost">Sign Up</a>
</div>
</div>
    );
};

export default Navbar;