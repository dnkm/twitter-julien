import React from 'react';

const Loading = () => {
    return (
        <div style={{
            padding: '20px',
            textAlign: 'center',
            fontSize: '30px'
        }}>
            <i className="fas fa-cog fa-spin"/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading;