import React, { useState } from "react"
import { useDispatch } from "react-redux"

const ToDo = ({ item }) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch({ type: "done", id: e.target.id, done: e.target.checked })
    }
    return (
        <>
            <li className={item.done ? "crossOut" : ''}><input type="checkbox" id={item.id} checked={item.done} onChange={handleChange} />
                {item.name}
            </li>
        </>
    )
}

export default ToDo