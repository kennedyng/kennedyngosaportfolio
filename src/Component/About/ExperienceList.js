import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function ExperienceList() {
    return (
        <React.Fragment>
                <Typography variant="h5" component="h2" gutterBottom>
                    Intern software engineer
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://devxpart.com/">
                        OSIL - Full-time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    Nov 2021 - Jan 2022 -   3 month
                </Typography>
            <Divider />
              
           
        </React.Fragment>
    )
}

export default ExperienceList
