import React from "react";
import AccountLinks from "../components/accountLinks";

function AccountLinksContainer() {
    const gitClick = () => {
        window.open('https://github.com/WillMarceau', '_blank');
    }

    const linkedInClick = () => {
        window.open('https://www.linkedin.com/in/will-marceau-7056b132a/', '_blank');
    }


    return (
        <AccountLinks gitClick={gitClick} linkedInClick={linkedInClick}/>
    )
}

export default AccountLinksContainer;