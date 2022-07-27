const Foods = (props) => {
    const {name, image_url} = props
    console.log(image_url)
    return (
        <div className="menu-card">
            <div className="card-body">
                <div className="card-image">
                    <img src={image_url} alt={name} />
                </div>
            </div>
            <div className="card-title">{name}</div>
        </div>
    )
}

export default Foods