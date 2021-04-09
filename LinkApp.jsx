
import React from 'react'
import {Switch, Route} from 'react-router-dom';

import './LinkApp.css';
import LinkAppH from './LinkAppH';
import Name from './Name';
import Address from './Address';

export const LinkApp = () => {
    return (
        <>
         <Switch>
             <Route path='/' exact component={LinkAppH} />
             <Route path='/name' exact component={Name} />
             <Route path='/address' exact component={Address}/>
         </Switch>
            
        </>
    )
}
