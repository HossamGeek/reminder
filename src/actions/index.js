import { ADD_REMINDER } from '../types';

//action creator
export const Add_Reminder = (text,date)=>{
    const action = {
        type : ADD_REMINDER,
        text,
        date
    }
    console.log("add" , action);
    return action;
}
 