import { ADD_REMINDER } from '../../types';

//reducer
const reminders = (state = [] ,action)=>{
    let reminders = [];
    if(action.type === ADD_REMINDER)
    {
        reminders = [...state, {text:action.text,date:action.date,id:Math.random()}]
        console.log('from reducer',reminders);
        return reminders;
    }else{
        return state;
    }
}

export default reminders;