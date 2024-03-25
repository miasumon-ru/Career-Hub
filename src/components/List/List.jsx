

const List = ({categoryList}) => {

    const {logo, title, description} = categoryList
    const listStyle = {
        border : '1px solid black',
        padding : '25px',
        background:' linear-gradient(90.00deg, rgba(126, 144, 254, 0.05),rgba(152, 115, 255, 0.05) 100%)'
        
    }
    return (
        <div className="space-y-4" style={listStyle}>

            <img src={logo} alt="" />
            <h3 className="font-bold text-2xl"> {title} </h3>
            <p> {description} </p>
           
        </div>
    );
};

export default List;