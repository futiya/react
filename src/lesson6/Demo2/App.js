import React, { useState, useEffect, useReducer, useCallback } from 'react'
import axios from "axios"

import { InputLable } from './components/Item'
import List from "./components/List"

const API_URL = "https://hn.algolia.com/api/v1/search?query="

const storiesReducer = (state, action) => {
    switch (action.type) {
        case 'STORIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload

            }
        case 'STORIES_FETCH_FAIL':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'STORIES_REMOVE':
            return{
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        default:


    }
}

const App = () => {
    const [searchItem, setSearchItem] = useState('React')
    // const [objectID, setObjectID] = useState('React')
    const [stories, dispatch] = useReducer(
        storiesReducer,
        { data: [], isLoading: true, isError: false }
    )
    const [url, setUrl] = useState(`${API_URL}${searchItem}`)
    const list = [
        {
            title: "yyyy",
            url: "www.baidu.com",
            author: "test",
            num_comments: 5,
            points: 3
        }
    ]

    const handleFetchStories = useCallback(
        () => {
            dispatch({ type: "STORIES_FETCH_INIT" })
            axios
                .get(url)
                .then(res => {
                    console.log("URL"+url)
                    console.log(res.data)
                    dispatch(
                        {
                            type: "STORIES_FETCH_SUCCESS",
                            payload: res.data.hits
                        }
                    )
                })
                .catch(() => {
                    dispatch({ type: "STORIES_FETCH_FAIL" })
                })
        },
        [url],
    )
    useEffect(() => {
        handleFetchStories()
    }, [handleFetchStories])

    const handleSearchSubmit = e => {
        e.preventDefault();
        alert( searchItem);
        console.log(`${API_URL}${searchItem}`)
        setUrl(`${API_URL}${searchItem}`)
    }
    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
            <h1>My Hacker News</h1>
          <InputLable id="search"   searchRender={(e)=>{setSearchItem(e.target.value)}}>
                <strong> Search:</strong>
            </InputLable>

              <button>
                Submit
            </button>
            </form>
            {stories.isLoading ? <p>loading...</p> : <List list={stories.data} onRemoveItem={(item) => dispatch({ type: "STORIES_REMOVE" ,payload:  stories.data.filter(i=>i.objectID!==item.objectID)})}></List>}
           
        </div>
    )
}

export default App