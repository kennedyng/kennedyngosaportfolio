import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

function EducationContent() {
    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom>
                Zambia Information And Communication Technology College-ZICTC
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom>
                Undergraduate, Software Engineering
            </Typography>
            <Typography variant="body2" component="h2" gutterBottom>
                2019 - 2022
            </Typography>
            <Divider />
            <Typography variant="h5" component="h2" gutterBottom>
                Kamulanga High Schooo
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom>
                Senior Secondary, General School Certificate
            </Typography>
            <Typography variant="body2" component="h2" gutterBottom>
                2011 - 2014
            </Typography>
        </>
    )
}

export default EducationContent
