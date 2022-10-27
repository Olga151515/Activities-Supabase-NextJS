import Head from 'next/head'


const Error404 = () => {
  return (
    <div className=" dark:bg-gray-900 bg-gray-200  p-10 rounded-xl shadow-xl  ">
        <Head>
            <title> {`Error 404`} </title>
        </Head>
    <h1 className="text-slarosete-600 text-3xl font-black">
        404 | page is not found
    </h1>
  </div>
  )
}


export default Error404