import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './index.css'

createRoot(document.getElementById('root')).render(<App />)
