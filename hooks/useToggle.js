import { useState } from "react"

/**
 * @description Takes initialState and returns a array of a boolean and a function to toggle it. 
 * @param {boolean} initialState default to false
 * @returns ({boolean}, (() => void))[]
 */
export default function useToggle(initialState=false) {
    const [open, setOpen] = useState(initialState)

    const toggleOpen = () => setOpen(prev => !prev)

    return [open, toggleOpen]
}