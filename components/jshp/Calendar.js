export default function Calendar({date, setMyDay}) {
  
    let tempDate=new Date();
    tempDate.setDate(1);
  const   
             
        firstDayOfWeek = tempDate.getDay()-1,       
        daysInMonth = new Date(date.getFullYear(),date.getMonth()+1,0),
        lastDay=daysInMonth.getDate(),
        month = date.toLocaleString('default', { month: 'long' });;

    return <><table id="test" >
        <caption>{month}</caption>
        <tbody onClick={evt => {
        const day = evt.target.closest('td').textContent;
        if (day && setMyDay) {
          const
            d = new Date(date.setDate(+day));
            setMyDay(d);
        }
      }}>
        <tr>
          <th>пн</th>    
          <th>вт</th> 
          <th>ср</th> 
          <th>чт</th> 
          <th>пт</th> 
          <th>сб</th> 
          <th>вс</th>  
        </tr>         
        <Month  firstDayOfWeek={firstDayOfWeek} lastDay={lastDay} selected={date.getDate()}/>  
        </tbody> 
    </table> </>     
};



function Week({ startDay, lastDay, selected }) {
  return <tr>
    {[...Array(7)].map((_, index) => +startDay + index).map(day =>
      <td key={day} className={+selected === day ? "selected" : ''}>
        {day >=1 && day <= lastDay && day}
      </td>)}
  </tr>;
}

function Month({ firstDayOfWeek, lastDay, selected}) {
  const
    result = [];
  for (let weekStart = 1 - firstDayOfWeek; weekStart <= +lastDay; weekStart += 7) {
    result.push(<Week key={weekStart} startDay={weekStart} {...{ lastDay, selected }} />);
  }
  return <>{result}</>;
}

