import Link from "next/link";
const Navbar = () => {
  return (
    /*  <nav>
           <div className="logo">NinjaList</div>
           <Link href="/"><a class="text-lg">Home</a></Link>
           <Link href="/about"><a class="text-lg">About</a></Link>

       </nav> */
    <nav>
      <div class="text-center bg-gray-300">
        Start learning Today (or) Start teaching Today -
        <span class="text-blue-600 hover:underline cursor-pointer text-lg tracking.wider">
          {" "}
          Register to get started.
        </span>
      </div>

      <div class="flex justify-end py-6 px-10">
        <div class="flex space-x-8">
          {/* <Link href="/"><a class="flex text-lg mt-2">Home</a></Link>
                    <Link href="/about"><a class="flex text-lg mt-2">About</a></Link>
                    <Link href="/loginform"><a class="flex text-lg mt-2">Login</a></Link>
                    <button class="py-3 px-6 bg-black text-white rounded-md text-bold">SignUp</button> */}

          <Link href="/adduserform">
            <a class="flex  text-lg mt-2">AddUsers</a>
          </Link>
          <Link href="/listusersform">
            <a class="flex text-lg mt-2 ">ListUsers</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
