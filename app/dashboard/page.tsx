import React from 'react'
import { ConnectDB } from '@/utils/db'
const Dashbaord = async () => {

  await ConnectDB()
  return (
    <div>page</div>
  )
}

export default Dashbaord