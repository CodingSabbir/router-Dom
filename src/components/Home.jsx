
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = (props) => {
    console.log(props)
    const {name,email,id}=props.saveData

    // let history=useHistory()
    // const handleClick=(userID)=>{
    //     history.push(`/user/${userID}`)
    // }

    
    return (
        <>
            <div className="border-2 border-[#A0E9FF] p-3 my-4 rounded-md">
                <h1 className="text-[20px] font-semibold">Name : {name}</h1>
                <p className="text-[16px] font-mono text-gray-500">Email : {email}</p>
                <p><Link to={`/user/${id}`}> Show Detailes User Info {id}</Link></p>
                {/* <button onClick={()=> handleClick(id)}>Click Me</button> */}
            </div>
        </>
    );
};

export default Home;