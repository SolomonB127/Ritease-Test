"use client";
import React from 'react';
import { useAnnotationState } from '../store/useAnnotationStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AnnotationBar = () => {
    const { currentTool, setCurrentTool, selectedColor, setColor } = useAnnotationState();
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg flex gap-4">
            <Button onClick={() => setCurrentTool('highlight')} className={`p-2 ${currentTool === 'highlight' ? 'bg-blue-200' : ''}`}>
                Highlight
            </Button>
            <Button onClick={() => setCurrentTool('underline')} className={`p-2 ${currentTool === 'underline' ? 'bg-blue-200' : ''}`}>
                Underline
            </Button>
            <Button onClick={() => setCurrentTool('comment')} className={`p-2 ${currentTool === 'comment' ? 'bg-blue-200' : ''}`}>
                Comment
            </Button>
            <Button onClick={() => setCurrentTool('signature')} className={`p-2 ${currentTool === 'signature' ? 'bg-blue-200' : ''}`}>
                Signature
            </Button>
            <Input type="color" value={selectedColor} onChange={(e) => setColor(e.target.value)} />
        </div>
    )
}