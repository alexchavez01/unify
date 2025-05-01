const Navbar = () => {
    return (
      <nav className="bg-gray-100 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo / Brand */}
          <h1 className="text-xl font-bold text-gray-800">Unify</h1>
  
          {/* Links */}
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Networking</li>
            <li className="hover:text-blue-500 cursor-pointer">Search</li>
            <li className="hover:text-blue-500 cursor-pointer">A.R.E</li>
            <li className="hover:text-blue-500 cursor-pointer">Dorms</li>
            <li className="hover:text-blue-500 cursor-pointer">Scotty AI</li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  