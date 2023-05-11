import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"

const Form = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({ name: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "addItem", item: { id: uuid(), name: data.name, done: false } })
        setData({ name: '' })
    }

    return (
        <>
            <h3>Words to Learn</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">New word:</label>
                <input type="text" name="name" onChange={handleChange} value={data.name} />
                <section>
                    <button className="add" id="addItemBtn">Add New Word</button>
                </section>
            </form>
        </>
    )
}

export default Form