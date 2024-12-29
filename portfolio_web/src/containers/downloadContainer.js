import React from "react";
import Download from "../components/download";

function DownloadContainer() {
    // this function holds the logic for my download button
    const clickHandler = () => {
        window.open('/Resume_2024.pdf', '_blank');
    };

    return (
        <Download onClick={clickHandler}/>
    )

}

export default DownloadContainer;