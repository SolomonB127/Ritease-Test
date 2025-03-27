"use client";
import React from 'react';
import { useDropzone } from "react-dropzone";
import { useAnnotationState } from '../store/useAnnotationStore';

const FileUpload = () => {
    const setPdfFile = useAnnotationState((state) => state.setPdfFile);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'application/pdf' : [ '.pdf' ] },
        multiple: false,
        onDrop: (files) => files[0] && setPdfFile(files[0]),
    });


    return (
        <div {...getRootProps()} className='p-8 border-2 border-dashed rounded-lg text-center cursor-pointer'>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop PDF File here...</p>
            ) : (
                <p>Drag & drop PDF File, or click to select</p>
            )
        }
        </div>
    )
}

export default FileUpload