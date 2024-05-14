import React, { useState } from 'react'

const useOnline = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);
    
    const offline = window.addEventListener("offline", () => {
        setOnlineStatus(false)
    });
    const online = window.addEventListener("online", () => {
        setOnlineStatus(true)
    });
    
  return onlineStatus
}

export default useOnline