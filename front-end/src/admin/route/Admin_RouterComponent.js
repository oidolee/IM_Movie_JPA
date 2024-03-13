import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' // npm install react-router-dom@5

// admin
import Admin_Contents from '../main/Admin_Contents'

// page_1
import Test_1 from '../page_1/Test_1';
import Admin_Discount_List from '../page_1/Admin_Discount_List'




const Admin_RouterComponent = () => {

    return(
        <div>
            <BrowserRouter>
                    {/* admin */}
                    <Route>
                        <Route path="/admin" exact={true} component={Admin_Contents} />
                    </Route>

                    {/* admin */}
                    <Route>
                        <Route path="/admin/page_1/Admin_Discount_List" exact={true} component={Admin_Discount_List} />
                    </Route>

                    {/* page_2 */}
                    <Route>
                        <Route path="/admin/page_2/test_1" exact={true} component={Test_1} />
                    </Route>

            </BrowserRouter>
        </div>
    )
}

export default Admin_RouterComponent;