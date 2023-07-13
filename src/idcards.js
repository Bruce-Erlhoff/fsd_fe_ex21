import Idcard from "./idcard";
import completedata from "./data.json";

const Idcards = () => {

    // console.log(completedata);
    return ( 
        <div>
            {
                completedata.data.map( (elem) => {
                    return <Idcard name={elem.name} state={elem.des} age={elem.age} id={elem.id}/>
                })

            }
            {/* <Idcard/> */}
        </div>
     );
}
 
export default Idcards;