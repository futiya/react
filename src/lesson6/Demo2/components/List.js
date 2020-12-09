import { Item } from "./Item"

const List = ({ list, onRemoveItem = () => { } }) => {
    return list.map(item => (
        <Item
            key={item.objectID}
            item={item}
            onRemoveItem={()=>onRemoveItem(item)}
        />
    ))
}


export default List