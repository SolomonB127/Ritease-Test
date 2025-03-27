"use client";
import React from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';

interface PdfViewerProps {
    file: string | File;
    onDocumentLoad: (numPages: number) => void;
}

const PdfViewer = ({ file, onDocumentLoad } : PdfViewerProps) => {
    const thumbnailPluginInstance = thumbnailPlugin();
    const { Thumbnails } = thumbnailPluginInstance;
    return (
        <div className="flex h-screen">
            <div className="w-32 overflow-auto">
                <Thumbnails />
            </div>
            <div className="flex-1">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={typeof file === 'string' ? file : URL.createObjectURL(file)}
                    defaultScale={SpecialZoomLevel.PageFit}
                    onDocumentLoad={(e) => onDocumentLoad(e.doc.numPages)}
                    plugins={[thumbnailPluginInstance]}
                />
                </Worker>
            </div>
        </div>
    )
}

export default PdfViewer