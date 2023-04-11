export default function simplifyTime(time: number){
    let simpleTime;
    
    if (time > 12)        simpleTime = time - 12 + 'PM'
    else if (time === 12) simpleTime = time + 'PM'
    else if (time === 0)  simpleTime = 12 + 'AM'
    else                  simpleTime = time + 'AM'
    return simpleTime
  }