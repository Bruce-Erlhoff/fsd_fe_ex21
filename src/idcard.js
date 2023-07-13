const Idcard = (props) => {
    return ( 
        <div>
            <div class="card w-25 bg-info text-light float-start mx-2 my-2">
                <div class="card-header bg-danger"><h6 class="text-start ">ID: {props.id}</h6><h2>Name: {props.name}</h2></div>
                    <div class="card-body bg-white text-primary">
                        <h4 class="card-title"><h4> State: {props.state}</h4></h4>
                        <p class="card-text">Age: {props.age}</p>
                    </div>
                <div class="card-footer bg-primary">
                    <button class="btn btn-light bg-light"> More...</button>
                </div>
            </div>
        </div>
     );
}
 
export default Idcard ;

