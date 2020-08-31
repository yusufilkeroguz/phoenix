import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

function Card({ url = null, icon = null, title= null }) {
  const [ data, setData ] = useState({});

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.status.code === 200)
            return setData(res.payload)

          return setData([])
        })
        .catch(() => setData([]))
    }
  },[url])

  library.add(icon);

  return (
    <div className="card">
      {
        icon && (
          <div className="card__icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        )
      }
      <div>
        {
          title && (
            <div className="card__title">
              {title}
            </div>
          )
        }
        {
          data && (
            <div className="card__data">
              {data[Object.keys(data)[0]]}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Card;