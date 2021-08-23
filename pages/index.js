import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <section class="h-screen space-y-10 max-w-7xl mx-auto mt-20">
      <h1 class="text-center text-7xl font-mono font-bold">TutorsOnBoard</h1>
      <h1 class="text-center text-6xl font-mono font-bold ">
        Connecting Tutors & Learners
      </h1>
      <p class="text-gray-700 treaking-wider text-center max-w-md mx-auto text-xl">
        Want help with Math, Science,.. (or) anything under the sun tutors are
        available to help you
      </p>

      <div class="flex justify-center space-x-8">
        <Link href="">
          <button class="px-8 py-4 bg-black text-white rounded-xl">
            Try for free
          </button>
        </Link>
        <div class="flex mt-4">
          <span class="text-black text-lg font-bold">
            {" "}
            &#9658; See how it works
          </span>
        </div>
      </div>
    </section>

    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    //     <h1 className="text-6xl font-bold">
    //       Welcome to{" "}
    //       <a className="text-blue-600" href="https://nextjs.org">
    //         Next.js!
    //       </a>
    //     </h1>

    //     <p className="mt-3 text-2xl">
    //       Get started by editing{" "}
    //       <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
    //         pages/index.js
    //       </code>
    //     </p>

    //     <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    //       <a
    //         href="https://nextjs.org/docs"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Find in-depth information about Next.js features and API.
    //         </p>
    //       </a>

    //       <a
    //         href="https://nextjs.org/learn"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Learn &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Learn about Next.js in an interactive course with quizzes!
    //         </p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Examples &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Discover and deploy boilerplate example Next.js projects.
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className="flex items-center justify-center w-full h-24 border-t">
    //     <a
    //       className="flex items-center justify-center"
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
    //     </a>
    //   </footer>
    // </div>
  );
}
