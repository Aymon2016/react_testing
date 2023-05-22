const List = ({ data = [] }) => {

    return (
        <div>
            <h3>List Items</h3>
            <ul data-testid='testid'>
                {data.map((item) => (
                    <li data-testid='testitem' key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default List;