import React, { ReactElement } from 'react'
import Button from '../../components/customButton'
import Intro from '../../components/intro';
import Nav from '../../components/navigation';


interface Props {
    
}

function Homepage({}: Props): ReactElement {
    return (
        <>
        <Nav />
        <Intro />
        </>
    )
}

export default Homepage;
