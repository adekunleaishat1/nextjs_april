"use client"

type error = {
    error: Error
}

const Error = ({error}:error) => {
    if(error)  console.log(error);
    
    return ( 
        <div>
            {/* {error.message} */}
            <h2 className="text-center text-red">Something went wrong!</h2>
        </div>
     );
}
 
export default Error;