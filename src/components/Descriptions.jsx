import React from 'react'
import './descriptions.css'
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa"
import { BiHappy } from "react-icons/bi"
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md"

const Descriptions = ({ weather, units }) => {
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/s' : 'mile/h'

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "Min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "Max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "Pressure",
      data: weather.pressure,
      unit: "hPa"
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: weather.humidity,
      unit: "%"
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit
    },
  ]

  return (
    <div className='section section__descriptions'>
      {cards.map(({ id, icon, title, data, unit }) => (

        <div key={id} className='card'>
          <div className='description__card-icon'>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  )
}

export default Descriptions
