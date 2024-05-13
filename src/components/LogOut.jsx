import React from 'react'
import { auth } from '../firebase'

const style = {
    button: `bg-red-800 px-4 py-2 hover:bg-red-700`
}

const LogOut = () => {

    const signOut = () => {
        signOut(auth)
    }

    return (
        <button onClick={() => auth.signOut()} className={style.button}>
            Log Out
        </button>
    )
}

export default LogOut
