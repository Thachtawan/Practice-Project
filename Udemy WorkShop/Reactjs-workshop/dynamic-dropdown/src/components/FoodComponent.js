const FoodComponent = ({item}) => {
    return (
        <div className="food-menu">
            <h2>{item.foodName}</h2>
            <img src={item.image_url} alt={item.foodName}/>
        </div>
    )
}

export default FoodComponent;