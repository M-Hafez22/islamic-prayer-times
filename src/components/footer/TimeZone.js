import React, {useContext} from 'react'
import {FetchedDataContext} from '../contexts/FetchedDataContext'

function TimeZone() {
  const [loaded, data] = useContext(FetchedDataContext);

  return  <h4>{loaded && data.meta.timezone}</h4>
}

export default TimeZone;
