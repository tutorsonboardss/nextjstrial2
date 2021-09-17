const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24  bg-gray-300">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <br />
        <br /> © Copyright 2021 TutorsOnBoard.{" "}
        {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
      </a>
    </footer>
    // <nav>
    //     <div class="flex justify-center py-6 px-10">
    //         <div class="flex space-x-8">
    //             <Link href="/"><a class="flex text-lg mt-2">Contact Us</a></Link>

    //         </div>
    //     </div>
    //     <div class="text-center bg-white-300">

    //         <span class="text-blue-600 text-lg">© Copyright 2021 TutorsOnBoard.</span>
    //     </div>
    // </nav>
  );
};

export default Footer;
