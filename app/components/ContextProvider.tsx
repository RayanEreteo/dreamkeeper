"use client"
import { createContext, useState } from "react"

interface userInfoI{
  loggedIn: boolean
  username: string
}

export const userInfoContext = createContext<userInfoI>({username: "", loggedIn: false})

function ContextProvider({children}: any) {

  return (
    <userInfoContext.Provider value={{username: "", loggedIn: false}}>
        {children}
    </userInfoContext.Provider>
  )
}

export default ContextProvider