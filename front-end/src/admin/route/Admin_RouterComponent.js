import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom' // npm install react-router-dom@5

// admin
import Admin_Contents from '../main/Admin_Contents'

// page_1
import Test_1 from '../page_1/Test_1';
import Admin_Discount_List from '../page_1/Admin_Discount_List'
import Admin_Discount_Add from '../page_1/Admin_Discount_Add'
import Admin_coupon from '../page_6/coupon/Admin_coupon'

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

                    {/* page_1 */}
                    <Route>
                        <Route path="/admin/page_1/Admin_Discount_List" exact={true} component={Admin_Discount_List} />
                        <Route path="/admin/page_1/Admin_Discount_Add" exact={true} component={Admin_Discount_Add} />
                    </Route>

                    {/* page_2 */}
                    <Route>
                        <Route path="/admin/page_2/test_1" exact={true} component={Test_1} />
                    </Route>

                    {/* page_3 */}
                    <Route>
                        <Route path="/admin/page_3/ListStore_Admin" exact={true} component={ListStore_Admin} />
                    </Route>

                    {/* page_6 */}
                    <Route>
                        <Route path="/admin/page_6/Admin_coupon" exact={true} component={Admin_coupon} />
                    </Route>

            </BrowserRouter>
        </div>
    )
}

export default Admin_RouterComponent;