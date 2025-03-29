import React, { useState, useEffect } from 'react';
import './CursorTracker.css';

export default function CursorTracker({ showLabel }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = e => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`
            }}
        >
            {showLabel && <span>View Project</span>}
        </div>
    );
}
