import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom' // npm install react-router-dom@5

// admin
import Admin_Contents from '../main/Admin_Contents'

// page_1
import Test_1 from '../page_1/Test_1';
import Admin_Discount_List from '../page_1/Admin_Discount_List'
import Admin_Discount_Add from '../page_1/Admin_Discount_Add'
import Admin_coupon from '../page_6/coupon/Admin_coupon'
import Admin_Discount_Edit from '../page_1/Admin_Discount_Edit'

// page_3
import ListStore_Admin from '../page_3/ListStore_Admin';
import AddStore_Admin from '../page_3/AddStore_Admin';
import EditStore_Admin from '../page_3/EditStore_Admin';

//page_5
import Admin_Update_Add from '../page_5/Admin_Update_Add';
import Admin_Update_Edit from '../page_5/Admin_Update_Edit';
import Admin_Update_List from '../page_5/Admin_Update_List';
import Admin_Now_Add from '../page_5/Admin_Now_Add';
import Admin_Now_Edit from '../page_5/Admin_Now_Edit';
import Admin_Now_List from '../page_5/Admin_Now_List';
import Admin_Next_Add from '../page_5/Admin_Next_Add';
import Admin_Next_Edit from '../page_5/Admin_Next_Edit';
import Admin_Next_List from '../page_5/Admin_Next_List';
import Admin_Arte_List from '../page_5/Admin_Arte_List';
import Admin_Arte_Add from '../page_5/Admin_Arte_Add';
import Admin_Arte_Edit from '../page_5/Admin_Arte_Edit';


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
                        <Route path="/admin/page_1/Admin_Discount_Edit" exact={true} component={Admin_Discount_Edit} />
                    </Route>

                    {/* page_2 */}
                    <Route>
                        <Route path="/admin/page_2/test_1" exact={true} component={Test_1} />
                    </Route>


                    {/* page_3 */}
                    <Route>
                        <Route path="/admin/page_3/ListStore_Admin" exact={true} component={ListStore_Admin} />
                        <Route path="/admin/page_3/AddStore_Admin" exact={true} component={AddStore_Admin} />
                        <Route path="/admin/page_3/EditStore_Admin" exact={true} component={EditStore_Admin} />
                    </Route>

                    {/* page_5 */}
                    <Route>
                    <Route path="/admin/page_5/Admin_Update_Add" exact={true} component={Admin_Update_Add} /> 
                    <Route path="/admin/page_5/Admin_Update_Edit/:movie_id" exact={true} component={Admin_Update_Edit} />
                    <Route path="/admin/page_5/Admin_Update_List" exact={true} component={Admin_Update_List} />
                    <Route path="/admin/page_5/Admin_Now_Add" exact={true} component={Admin_Now_Add} />
                    <Route path="/admin/page_5/Admin_Now_Edit/:now_id" exact={true} component={Admin_Now_Edit} />
                    <Route path="/admin/page_5/Admin_Now_List" exact={true} component={Admin_Now_List} />
                    <Route path="/admin/page_5/Admin_Next_Add" exact={true} component={Admin_Next_Add} />
                    <Route path="/admin/page_5/Admin_Next_Edit" exact={true} component={Admin_Next_Edit} />
                    <Route path="/admin/page_5/Admin_Next_List" exact={true} component={Admin_Next_List} />
                    <Route path="/admin/page_5/Admin_Arte_List" exact={true} component={Admin_Arte_List} />
                    <Route path="/admin/page_5/Admin_Arte_Add" exact={true} component={Admin_Arte_Add} />
                    <Route path="/admin/page_5/Admin_Arte_Edit" exact={true} component={Admin_Arte_Edit} />
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