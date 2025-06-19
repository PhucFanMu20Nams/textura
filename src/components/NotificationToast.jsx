import { useEffect, useState } from 'react'

function NotificationToast({ message }) {
  const [visible, setVisible] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2800)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`notification-toast ${visible ? 'show' : 'hide'}`}>
      <div className="notification-content">
        <span className="notification-icon">✓</span>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default NotificationToast