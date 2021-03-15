import React, { useState, useEffect } from 'react'
import styles from './Timer.module.scss'
import { DateTime } from 'luxon';

const Timer = () => {

  const [timeLeftStr, setTimeLeft] = useState("");
  const [isTimerRunout, setIsTimerRunout] = useState(false);

  const getTimeDifference = () => {
    // 1. Get current date for comparison with upcoming friday
    const now = DateTime.now();
    // 2. Get the upcoming friday
    const upcomingFriday = 
     (now.weekday <= 5 || (now.weekday == 5 && now.hour > 17)) ?
    DateTime.local().startOf('week').plus({days: 4, hours: 17})
    : DateTime.local().startOf('week').plus({days: 11, hours: 17});
    // 3. Do the comparison to get the remaining time
    const diff = upcomingFriday.diff(now, ["days", "hours", "minutes", "seconds", "milliseconds"])
    return diff.values
  } 

  useEffect(() => {
    let myInterval = setInterval(()=>{
      const diff = getTimeDifference();
      let{days, hours, minutes, seconds} = diff;
      if (minutes === 0 && seconds === 0) {
        setIsTimerRunout(true);
      } else {
        setIsTimerRunout(false);
      }
      setTimeLeft(` ${days} Days ${hours}h ${minutes}min ${seconds}sec`)
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  }, []);
  
  return (
    <div className={styles.Timer}>
      { isTimerRunout? null
            : <h2>{timeLeftStr} <span>until orders close</span></h2> 
        }
    </div>
  )
}

export default Timer;
