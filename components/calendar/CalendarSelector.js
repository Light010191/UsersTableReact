import { useState, useCallback } from 'react';
import Calendar from './Calendar';

export default function CalendarSelector({ startDate = (new Date), result = () => {} }) {
  const
    [date, setDate] = useState(startDate),
    setMyDay = useCallback(res => { setDate(res); result(res); }, [result]);
  return <Calendar date={date} setMyDay={setMyDay} />;
}