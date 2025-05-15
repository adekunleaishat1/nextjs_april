const Oneuser = async({params}:{params:{userid:string}}) => {
    // console.log(await params);
    const {userid} = await params
    
    return (  
        <div>
            oneuser {userid}
        </div>
    );
}
 
export default Oneuser;