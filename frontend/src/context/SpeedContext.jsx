import { createContext, useState } from "react";

export const SpeedContext = createContext();

export default function SpeedProvider({ children }) {

    const [download, setDownload] = useState(0);
    const [upload, setUpload] = useState(0);
    const [ping, setPing] = useState(0);
    const [jitter, setJitter] = useState(0);

    return (
        <SpeedContext.Provider
            value={{
                download,
                upload,
                ping,
                jitter,
                setDownload,
                setUpload,
                setPing,
                setJitter
            }}
        >
            {children}
        </SpeedContext.Provider>
    );
}