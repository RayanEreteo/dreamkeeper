"use client"
import { createContext, useState } from "react"

export const userInfoContext = createContext({})

function ContextProvider({children}: any) {

  return (
    <userInfoContext.Provider value={{}}>
        {children}
    </userInfoContext.Provider>
  )
}

export default ContextProvider