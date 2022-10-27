import Head from 'next/head'


const Error = ({statusCode}) => {
  return (
    <div className=" bg-gray-900 p-10 rounded-xl shadow-xl  ">
        <Head>
            <title> {`Error ${statusCode}`} </title>
        </Head>
    <h1 className="text-slarosete-600 text-3xl font-black">
        Error{statusCode }
        {statusCode === 404 && ' | Page Is Not Found'}
        {statusCode === 405 && ' | internal server error'}
    </h1>
  </div>
  )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode}
}

export default Error