import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const[text,setText] = useState('')
    const[day,setDay] = useState('')
    const[reminder,setReminder] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Task name' value={text} onChange={(e) =>setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Day & Time' value={day} onChange={(e) =>setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder} 
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
