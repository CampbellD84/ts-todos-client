import React, { useState, FC, FormEvent } from 'react'

type Props = {
    saveTodo: (e: FormEvent, formData: ITodo | any) => void
}

const AddTodo: FC<Props> = ({ saveTodo }) => {
    const [formData, setFormData] = useState<ITodo | {}>()

    const handleForm = (e: FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    return (
        <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={handleForm} id="name" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" onChange={handleForm} id="description" />
                </div>
            </div>
            <button disabled={formData === undefined ? true : false}>Add Todo</button>
        </form>
    )
}

export default AddTodo