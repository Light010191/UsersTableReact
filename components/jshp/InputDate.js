import { useState } from 'react';
import CalendarSelector from './CalendarSelector';


export default function InputDate({ startDate, result }) {
  const
    [date, setDate] = useState(new Date(startDate || Date.now())),
    [openDialog, setOpen] = useState(false);

  return <>
    <div className="Date">
        <span>{+date.getDate() + '/ '}</span>
        <span>{+(date.getMonth() + 1) + '/ '}</span>
        <span>{date.getFullYear()}</span>
        <button className="btn btn-primary" onClick={e=>{setOpen(!openDialog)}}>+</button>    
    </div>
    
    {openDialog?
        <CalendarSelector result={res => { setOpen(false); setDate(res); result(res); }} startDate={date} />
      : <div className='calendar is not visibilities'></div>}
  </>;
}
