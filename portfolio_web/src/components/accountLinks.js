import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AccountLinks({ gitClick, linkedInClick}) {

    return (
        <div className="linkIcons">
          <GitHubIcon className="linkIcon" onClick={gitClick} />
          <LinkedInIcon className="linkIcon" onClick={linkedInClick}/>
        </div>
    )
}

export default AccountLinks;