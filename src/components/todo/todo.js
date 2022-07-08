import React, { useEffect, useState } from 'react'
import './style.css'
// get the local data back
const getlocalData = () => {
    const lists = localStorage.getItem("mytodoList")
    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return [];
    }
}

const Todo = () => {
    const [inputdata, setInputData] = useState("")
    const [items, setItems] = useState(getlocalData())
    const [isEditItem, setEditItem] = useState("")
    const [toggleButton, setToggleButton] = useState(false)
    //    add the items function
    const addItems = () => {
        if (!inputdata) {
            alert('plz fill the data');
        }
        else if (inputdata && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: inputdata }
                    } else {
                        return curElem;
                    }
                })
            )
            setInputData([])
            setEditItem("")
            setToggleButton(false);
        }
        else {
            // if you delete the item then you must have unque key
            const mynewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata
            }
            setItems([...items, mynewInputData])
            setInputData("");
        }
    };
    // Edit the item
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index
        })
        setInputData(item_todo_edited.name)
        setEditItem(index)
        setToggleButton(true);
    }


    // How to delete the item
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItem)
    }
    // Remove All the elements
    const removeAll = () => {
        setItems([])
    }
    // Local storage save data
    useEffect(() => {
        localStorage.setItem("mytodoList", JSON.stringify(items));
    }, [items])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" value={inputdata} onChange={(event) => setInputData(event.target.value)} id="" placeholder='✍ Add Items' className='from-control' />

                        {
                            toggleButton ? (<i className="far fa-edit  add-btn" onClick={addItems}></i>) : (<i className="fa fa-plus  add-btn" onClick={addItems}></i>)
                        }
                    </div>
                    {/* show ALl Items */}
                    <div className="showItems">
                        {
                            items.map((curElem) => {
                                return (
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">

                                            <i className="far fa-edit  add-btn" onClick={() => editItem(curElem.id)}></i>
                                            <i className="far fa-trash-alt  add-btn" onClick={() => deleteItem(curElem.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="showItem">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
