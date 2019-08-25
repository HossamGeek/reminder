import React ,{useState} from 'react';
import {connect} from 'react-redux';
import { Add_Reminder } from '../actions';
const App = (props)=>{
    console.log(props);
    const [reminders,setReminders] = useState({
        text:"",
        date:new Date()
    });
    const onChange =(event)=>{
        setReminders({...reminders,[event.target.name]:[event.target.value]})
    }

    return(
       <div>
        <img src=''/>
        <div className="reminder-title">
            <h2>What should you do?</h2>
        </div>
        <input className="form-control" name="text" type="text"
            onChange={onChange}
        placeholder="Enter what u think ..?!" value={reminders.text}/>
        <input className="form-control" 
        onChange={onChange}

        name="date" type="datetime-local" value={reminders.date} />
        <button className="btn btn-primary btn-block" onClick={()=> props.Add_Reminder(reminders.text,reminders.date)}> Add Reminder</button>
        <button className="btn btn-danger btn-block" > Clear</button>
       </div>
    )
}


// const mapDispatchToProps = (dispatch)=>{
//     return {
//         Add_Reminder: ()=> dispatch(Add_Reminder())
//     }
// }

const mapStateToProps = (state)=>{
    return {
        reminders : state
    }
}
export default connect(mapStateToProps,{Add_Reminder})(App);