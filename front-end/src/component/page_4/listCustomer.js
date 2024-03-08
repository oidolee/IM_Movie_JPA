import ApiService from '../../ApiService';

import {Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import React,{ Component } from 'react';

class listCustomer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            message: null
        }
    }

    // 라이프사이클 중 컴포넌트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링
    // 데이터 로딩 과정 
    componentDidMount() {
        this.customerList();    // 1.
    }

    // list
    customerList = () => {
        ApiService.listCustomer()
        .then(res => {
            this.setState({
                lists: res.data
            })
        })
        . catch(err => {
            console.log('listCustomer() Error', err);
        });
    }

    

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> No </TableCell>
                            <TableCell> email </TableCell>
                            <TableCell> name </TableCell>
                            <TableCell> password </TableCell>
                            <TableCell> hp </TableCell>
                            <TableCell> birthday </TableCell>
                            <TableCell> address </TableCell>
                            <TableCell> regdate </TableCell>
                            <TableCell> show </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.lists.map(list =>
                        <TableRow key={list.No}>
                            <TableCell component="th" scope="list"> {list.no} </TableCell>
                            <TableCell> {list.email} </TableCell>
                            <TableCell> {list.name} </TableCell>
                            <TableCell> {list.password} </TableCell>
                            <TableCell> {list.hp} </TableCell>
                            <TableCell> {list.birthday} </TableCell>
                            <TableCell> {list.address} </TableCell>
                            <TableCell> {list.regdate} </TableCell>
                            <TableCell> {list.show} </TableCell>
                        </TableRow>
                            )}
                    </TableBody>

                </Table>
                
                    
                
            </div>
        )
    }
}

export default listCustomer;