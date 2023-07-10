import React from 'react';

const LoadingScreen = () => {
  return (
    <div
    className='bg5'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 40,
      }}
    >
      <div
        style={{
          border: '30px solid #141414',
          borderTop: '30px solid #e9e41d',
          borderRadius: '50%',
          width: '300px',
          height: '300px',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <style>
        {`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
