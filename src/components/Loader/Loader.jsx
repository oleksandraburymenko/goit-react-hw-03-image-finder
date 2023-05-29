import React from 'react'
import ContentLoader from 'react-content-loader'


const Loader = props => (
    <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    dur={500}
    backgroundColor="transparent"
    {...props}
    >
        <circle/>
        <circle/>
        <circle/>
    </ContentLoader>
)

export default Loader