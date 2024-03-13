import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' // npm install react-router-dom@5

// admin
import Admin_Contents from '../main/Admin_Contents'

// page_1
import Test_1 from '../page_1/Test_1';

// page_3
import ListStore_Admin from '../page_3/ListStore_Admin';


const Admin_RouterComponent = () => {

    return(
        <div>
            <BrowserRouter>
                    {/* admin */}
                    <Route>
                        <Route path="/admin" exact={true} component={Admin_Contents} />
                    </Route>

                    {/* page_2 */}
                    <Route>
                        <Route path="/admin/page_2/test_1" exact={true} component={Test_1} />
                    </Route>

                    {/* page_3 */}
                    <Route>
                        <Route path="/admin/page_3/ListStore_Admin" exact={true} component={ListStore_Admin} />
                    </Route>

            </BrowserRouter>
        </div>
    )
}

export default Admin_RouterComponent;