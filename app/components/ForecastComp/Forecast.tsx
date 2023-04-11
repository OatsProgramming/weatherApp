import { getWeatherDataContext } from "../SearchBar"
import Next24HrComp from "./Next24HrComp";
import Next5DComp from "./Next5DContainer";

// Decide if it should be a column or row design
export default function Forecast({ column }: { column?: boolean }) {
  const { next24Hr, next5D } = getWeatherDataContext()

  if (column){
    return (
      <div className="next5DaysComponent flex flexDirectionColumn gap">
        {next5D.map((dayMap) => (
          // Use datestring as key
          <Next5DComp key={dayMap[0]} weatherObj={dayMap} />
        ))}
      </div>
    )
  } 

  return (
      <div className='next24HrsComponent flex gap'>
        {/* Using index as key as the list doesnt mutate */}
        {next24Hr.map((forecastObj) => (
          <Next24HrComp key={forecastObj.dt} weatherObj={forecastObj} />
        ))}
      </div>

  )
}

