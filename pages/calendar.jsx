import InputDate from "../components/jshp/InputDate";
import { useState } from "react";

export default function CalendarPage(){
    const
    [date, setDate] = useState(new Date);
    return <>
        <h1>This is a Calendar from the react component!</h1>
        <InputDate startDate={date} result={res => setDate(res)} />   
    </>
}