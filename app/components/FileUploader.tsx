import {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
//import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const {getRootProps , getInputProps, isDragActive} = useDropzone({onDrop});

    return(
        <div className="gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="space-y-4 cursor-pointer">
                    <div>
                        <div className="">
                            <img src="/icons/info.svg" alt="upload" className="size-20"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default FileUploader