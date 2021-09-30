import React, { ReactElement } from 'react'
import Button from '../../components/customButton'
import Intro from '../../components/intro';
import Nav from '../../components/navigation';
import user from '../../user_details';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
 import usersDetailsType from '../../model/userModel';

  

interface Props {
    
}

function Homepage({}: Props): ReactElement {
    const {name} = useParams() as {name: string};
    const userDetails = user.find(e => e.name?.toLowerCase()===name) as usersDetailsType;
    return (
        <>
        <Nav {...userDetails}/>
        <Intro {...userDetails}/>
        </>
    )
}

export default Homepage;
