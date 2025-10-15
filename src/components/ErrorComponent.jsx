import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4 text-red-500">
      {/* Glitchy 404 */}
      <h1 className="text-6xl font-bold mb-2 relative glitch">
        404
      </h1>
      <p className="text-xl text-white mb-6 animate-pulse">
        ⚠️ Page not found! Something's off...
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="text-red-500 border border-red-500 px-5 py-2 rounded-md hover:bg-red-500 hover:text-black transition"
      >
        ⬅ Go Back Home
      </Link>

      {/* Custom Glitch CSS */}
      <style>
        {`
          .glitch {
            position: relative;
            display: inline-block;
          }

          .glitch::before,
          .glitch::after {
            content: '404';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
          }

          .glitch::before {
            left: 2px;
            text-shadow: -2px 0 red;
            animation: glitch 1s infinite linear alternate-reverse;
          }

          .glitch::after {
            left: -2px;
            text-shadow: -2px 0 red;
            animation: glitch 1.2s infinite linear alternate-reverse;
          }

          @keyframes glitch {
            0% {
              clip: rect(10px, 9999px, 20px, 0);
            }
            20% {
              clip: rect(30px, 9999px, 40px, 0);
            }
            40% {
              clip: rect(5px, 9999px, 60px, 0);
            }
            60% {
              clip: rect(25px, 9999px, 45px, 0);
            }
            80% {
              clip: rect(15px, 9999px, 80px, 0);
            }
            100% {
              clip: rect(35px, 9999px, 70px, 0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default ErrorComponent
