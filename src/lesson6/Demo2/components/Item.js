import { useState } from "react"

export const InputLable = ({searchRender}) => {
     
    return (
        <div>
            <label >{"My hacker Stories"}</label>
            <input type="text"  
            onChange={searchRender}
            />
        </div>
    )
}
export const Item = ({ item, onRemoveItem }) => {
    return <div>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span> {item.num_comments}</span>
        <span>{item.points}</span>
        <span>
            <button type="button" onClick={onRemoveItem}>
                Dismiss
            </button>
        </span>
    </div>
}
