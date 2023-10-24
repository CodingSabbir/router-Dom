

const Home = (props) => {
    console.log(props)
    const {name,email}=props.saveData
    return (
        <>
            <div className="border-2 border-[#A0E9FF] p-3 my-4 rounded-md">
                <h1 className="text-[20px] font-semibold">Name : {name}</h1>
                <p className="text-[16px] font-mono text-gray-500">Email : {email}</p>
            </div>
        </>
    );
};

export default Home;