import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom' // npm install react-router-dom@5

// admin
import Admin_Contents from '../main/Admin_Contents'

// page_1
import Test_1 from '../page_1/Test_1';
import Admin_Discount_List from '../page_1/Admin_Discount_List'
import Admin_Discount_Add from '../page_1/Admin_Discount_Add'
import Admin_coupon from '../page_6/coupon/Admin_coupon_Add'
import Admin_Discount_Edit from '../page_1/Admin_Discount_Edit'

//page_2
import Admin_Parking from '../page_2/Admin_Parking';

// page_3
import ListStore_Admin from '../page_3/ListStore_Admin';
import AddStore_Admin from '../page_3/AddStore_Admin';
import EditStore_Admin from '../page_3/EditStore_Admin';

// page_4
import listCustomer from '../page_4/listCustomer';

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
import Admin_Notice_List from '../page_5/Admin_Notice_List';
import Admin_Notice_Add from '../page_5/Admin_Notice_Add';
import Admin_Notice_Edit from '../page_5/Admin_Notice_Edit';
import Admin_GroupForm_List from '../page_5/Admin_GroupForm_List';
import Admin_GroupForm_Answer from '../page_5/Admin_GroupForm_Answer';


// page_6
import Admin_consult from '../page_6/consult/Admin_consult';
import Admin_counsult_detail_answer from '../page_6/consult/Admin_counsult_detail_answer';
import Admin_coupon_Add from '../page_6/coupon/Admin_coupon_Add';
import Admin_coupon_List from '../page_6/coupon/Admin_coupon_List';
import Admin_coupon_Edit from '../page_6/coupon/Admin_coupon_Edit';

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
                        <Route path="/admin/page_2/parking" exact={true} component={Admin_Parking} />
                    </Route>


                    {/* page_3 */}
                    <Route>
                        <Route path="/admin/page_3/ListStore_Admin" exact={true} component={ListStore_Admin} />
                        <Route path="/admin/page_3/AddStore_Admin" exact={true} component={AddStore_Admin} />
                        <Route path="/admin/page_3/EditStore_Admin" exact={true} component={EditStore_Admin} />
                    </Route>

                    {/* page_4 */}
                    <Route>
                        <Route path="/admin/listCustomer" exact={true} component={listCustomer} />
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
                    <Route path="/admin/page_5/Admin_Next_Edit/:next_id" exact={true} component={Admin_Next_Edit} />
                    <Route path="/admin/page_5/Admin_Next_List" exact={true} component={Admin_Next_List} />
                    <Route path="/admin/page_5/Admin_Arte_List" exact={true} component={Admin_Arte_List} />
                    <Route path="/admin/page_5/Admin_Arte_Add" exact={true} component={Admin_Arte_Add} />
                    <Route path="/admin/page_5/Admin_Arte_Edit" exact={true} component={Admin_Arte_Edit} />
                    <Route path="/admin/page_5/Admin_Notice_List" exact={true} component={Admin_Notice_List} />
                    <Route path="/admin/page_5/Admin_Notice_Add" exact={true} component={Admin_Notice_Add} />
                    <Route path="/admin/page_5/Admin_Notice_Edit/:notice_num" exact={true} component={Admin_Notice_Edit} />
                    <Route path="/admin/page_5/Admin_GroupForm_List" exact={true} component={Admin_GroupForm_List} />
                    <Route path="/admin/page_5/Admin_GroupForm_Answer/:group_id" exact={true} component={Admin_GroupForm_Answer} />
                </Route>



                    {/* page_6 */}
                    <Route>
                        <Route path="/admin/page_6/Admin_coupon" exact={true} component={Admin_coupon} />
                        <Route path="/admin/page_6/consult/Admin_consult" exact={true} component={Admin_consult} />
                        <Route path="/admin/page_6/consult/Admin_counsult_detail_answer/:one_id" exact={true} component={Admin_counsult_detail_answer} />
                        <Route path="/admin/page_6/coupon/Admin_coupon_Add" exact={true} component={Admin_coupon_Add} />
                        <Route path="/admin/page_6/coupon/Admin_coupon_List" exact={true} component={Admin_coupon_List} />
                        <Route path="/admin/page_6/coupon/Admin_coupon_Edit/:ic_num" exact={true} component={Admin_coupon_Edit} />
                    </Route>



            </BrowserRouter>
        </div>
    )
}

export default Admin_RouterComponent;