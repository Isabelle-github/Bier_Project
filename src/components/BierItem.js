import BierDetail from "./BierDetail";
const BierItem = (props) => {
    console.log(props)
    return (
        <div className='displayItems'>
            {props.bierdata.length > 0 ? (
                props.bierdata.map(item => {
                    return (
                        <div key={item._id} className="bier-item">
                            <img src={item.image_url} alt='bierImg'></img>
                            <div>
                                <h3>{item.name}</h3>
                                <h4>{item.tagline}</h4>
                                <p>{item.contributed_by}</p>
                                <a href='#'>Details</a>
                            </div>
                        </div>
                    )
                }
                )
            ) : <h1>fetching data ...</h1>}
        </div>
    );
}

export default BierItem;
