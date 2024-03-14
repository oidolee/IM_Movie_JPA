import React, { Component } from 'react';
import ApiService from '../../ApiService';
//npm install -f @mui/material
//npm install -f @emotion/react @emotion/styled

import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography} from '@mui/material'
import { Create, Delete } from '@mui/icons-material'; //npm install -f @mui/icons-material@^5.11.16

class ListStore_Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],    // 5. 리스트 데이터
            message: null
        }
    }

    // 라이프사이클 중 컴포턴트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링(데이트 로딩)
    // db에서 넘어온 데이터를 받아와서 this.reloadSampleList(); 호출한다.
    componentDidMount() {
        this.storeList();  //1.
    }

    // list 
    storeList = () => {
        ApiService.ListStore_Admin() // 2. 스프링부트와 통신기능 호출 >  3. ApiService.js 스프링부트의 데이터를 가지고 온다.
        .then(res => {              // 4.
            this.setState({
                lists: res.data // res 에 결과 데이타를 담아라
            })
        })
        .catch(err => {
            console.log('ListStore_Admin() Error!!', err);
        })
    }

    // insert
    AddStore_Admin = () => {
        window.localStorage.removeItem("sampleID"); // SQL에서 max + 1로 자동증가 처리하므로
        // RoutConponent.js의 <Route path="/add-sample" exact={true} component={AddSampleComponent} /> 호출
        this.props.history.push("../page_3/AddStore_Admin");
    }

    // update
    EditStore_Admin = (ID) =>  {
        window.localStorage.setItem("sampleID", ID);    
        this.props.history.push("/edit-sample");
    }

    // delete
    DeleteListStore_Admin = (sampleID) => {
        ApiService.DeleteListStore_Admin(sampleID)
            .then(res => {
                this.setState({
                    samples: this.state.samples.filter(sample => sample.id !== sampleID)
                });
                console.log('delete 성공', res.data); // 컨트롤러에서 전달함(resultCode, resultMsg)
            })
            .catch(err => {
                console.log('delete() Error!! : ', err);
            })
    }

    render() {
        console.log('Lists:', this.state.lists);

        return (
            <div><br/><br/>

                <Typography variant="h4" style={style}> STORE ITEM LIST </Typography><br/><br/>
                <Button variant="contained" color="primary" onClick={this.AddStore_Admin}> Add Sample </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> item_type </TableCell>
                            <TableCell> item_name </TableCell>
                            <TableCell> item_detail </TableCell>
                            <TableCell> item_price </TableCell>
                            <TableCell> item_sale_price </TableCell>
                            <TableCell> item_image </TableCell>
                            <TableCell> item_exp </TableCell>
                            <TableCell> Edit </TableCell>
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.lists.map(list => 
                            <TableRow key={list.item_code}>
                                <TableCell component="th" scope="lists"> {list.itemCode} </TableCell>
                                <TableCell> {list.itemName} </TableCell>
                                <TableCell> {list.itemDetail} </TableCell>
                                <TableCell> {list.itemPrice} </TableCell>
                                <TableCell> {list.itemSalePrice} </TableCell>
                                <TableCell> {list.itemImage} </TableCell>
                                <TableCell> {list.itemExp} </TableCell>
                                <TableCell onClick={() => this.EditStore_Admin(list.item_code)}>
                                    <Create />
                                </TableCell>
                                <TableCell onClick={() => this.DeleteListStore_Admin(list.item_code)}>
                                    <Delete />
                                </TableCell>
                            </TableRow>    
                        )}

                    </TableBody>
                </Table>

            </div>
        )
    }
}

const style={
    display: 'flex',
    justifyContent: 'center'
}

export default ListStore_Admin;