/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { User as UserType} from '../types/User'

interface Props {
    userData: UserType
}

const User = (props: Props) => {

  return (
    <>
        <div className="text-center text-4xl">{props.userData.name}</div>
    </>
  )
}

export default User