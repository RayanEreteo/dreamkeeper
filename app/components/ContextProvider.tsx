"use client"
import { createContext, useState } from "react"

interface userInfoI{
  username: string
}

export const userInfoContext = createContext<userInfoI>({username: ""})

function ContextProvider({children}: any) {

  return (
    <userInfoContext.Provider value={{username: ""}}>
        {children}
    </userInfoContext.Provider>
  )
}

export default ContextProvider