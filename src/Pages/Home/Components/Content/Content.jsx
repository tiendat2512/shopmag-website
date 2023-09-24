import { Typography } from '@mui/material'
import React from 'react'

export default function Content() {
    return (
        <div className='content'>
            <Typography sx={{
                color: {
                    xs: "yellow", 
                    sm: "green",
                    md: "red",
                    lg: "black"
                }
            }} variant='h1'>this is Content</Typography>
        </div>
    )
}
