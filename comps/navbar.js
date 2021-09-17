import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div class="text-center bg-gray-300">
        Start learning Today (or) Start teaching Today -
        <span class="text-blue-600 hover:underline cursor-pointer text-lg tracking.wider">
          {" "}
          Register to get started.
        </span>
      </div>

      <div class="flex  py-6 px-10">
        <div class="flex space-x-8 flex-1"></div>

        <div class="flex space-x-8 flex-1">
          {/* <Link href="/adduserform">
            <a class="flex  text-lg mt-2 ">AddUsers</a>
          </Link>
          <Link href="/listusersform">
            <a class="flex text-lg mt-2 ">ListUsers</a>
          </Link> */}
        </div>

        <div class="flex space-x-8 flex-2">
          {/* ................................ */}
          <div class="flex justify-center p-12">
            <div class="relative">
              {/* <button class="block h-12 w-12 rounded-full overflow-hidden focus:outline-none">
                <a class="flex  text-lg mt-2 ">Manage Users</a>
              </button> */}
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                style={{ margin: 2 }}
              >
                Manage Users
              </button>
              <div class="absolute right-0 w-30 mt-2 py-2 bg-white border rounded shadow-xl">
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/adduserform">
                    <a class="flex  text-lg mt-2 ">Add Users</a>
                  </Link>
                </a>
                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/listusersform">
                    <a class="flex text-lg mt-2 ">List Users</a>
                  </Link>
                </a>
              </div>
            </div>
          </div>

          {/* ................................ */}

          {/* ................................ */}
          <div class="flex justify-center p-12">
            <div class="relative">
              {/* <button class="block h-12 w-12 rounded-full overflow-hidden focus:outline-none">
                <a class="flex  text-lg mt-2 ">Manage Users</a>
              </button> */}
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                style={{ margin: 2 }}
              >
                Manage Books
              </button>
              <div class="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/addbooksform">
                    <a class="flex  text-lg mt-2 ">Add Books</a>
                  </Link>
                </a>
                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/updatebooksform">
                    <a class="flex text-lg mt-2 ">Update Books</a>
                  </Link>
                </a>
                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/deletebooksform">
                    <a class="flex text-lg mt-2 ">Delete Books</a>
                  </Link>
                </a>

                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/listBooksNameForm">
                    <a class="flex text-lg mt-2 ">List Books Asc Desc</a>
                  </Link>
                </a>

                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/searchBooksByNameForm">
                    <a class="flex text-lg mt-2 ">Search Books By Name</a>
                  </Link>
                </a>

                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/booksListPagingForm">
                    <a class="flex text-lg mt-2 ">Books Pagination By Slice</a>
                  </Link>
                </a>

                <div class="py-2">
                  <hr></hr>
                </div>
                <a
                  href="#"
                  class="transition-colors duration-200 block px-4 py-0  text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                >
                  <Link href="/booksListPagingVer2Form">
                    <a class="flex text-lg mt-2 ">Books Pagination By Limit</a>
                  </Link>
                </a>
              </div>
            </div>
          </div>

          {/* ................................ */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
