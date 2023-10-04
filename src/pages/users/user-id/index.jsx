import { useParams } from "react-router-dom";
  

const UserId = () => {
    let { id } = useParams();
  
    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold">User details</h1>
      </section>
    );
  };
  
  export default UserId;