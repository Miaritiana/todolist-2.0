import React, { useState } from 'react';

function Kanban() {
    const [value, setValue ] = useState<string>("")
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [todoList, setTodoList] = useState<string[]>([])
    const [doneList, setDoneList] = useState<string[]>([])
    return (
        <>
            <div className='event-participant-form'>
                <div className='container-login'>
                    <h4>TODO</h4>
                    <div className='input-div'>
                        <input 
                            type="text" 
                            value = {value} 
                            onChange ={
                                (e) => {
                                    setValue(e.target.value);
                                }
                            }
                            onKeyPress = {
                                (e) => {
                                    if(e.key === "Enter" && value !== "") {
                                        setIsChecked(false)
                                        setTodoList(todoList.concat(value))
                                        setValue("")
                                    }
                                }
                            }
                        />
                    </div>
                    <div>
                        {todoList.map(function(list:string){
                            return(
                                <div className='checkbox'>
                                    <input 
                                        type="checkbox" 
                                        className='checkbox-input' 
                                        checked={isChecked} 
                                        value={list} 
                                        onClick = {
                                            (e) => {
                                                setIsChecked(true)
                                                setDoneList(doneList.concat(list))
                                                todoList.splice(todoList.indexOf(list),1)
                                                setTodoList(todoList)
                                                setIsChecked(false)
                                            }
                                        }
                                        name={list}
                                    />
                                    <span className='checkbox-label'>{list}</span><br/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='container-login'>
                    <h4>DONE</h4>
                    <div className='done-div'></div>
                    <div>
                        {doneList.map(function(done:string){
                            return(
                                <div className='list-done'>
                                    <span>{done}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
  );
}

export default Kanban;