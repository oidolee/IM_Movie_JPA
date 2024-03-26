import ApiService from '../../ApiService';
import { IconButton } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';

import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { Component } from 'react';

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
            .catch(err => {
                console.log('listCustomer() Error', err);
            });
    }



    resignUp = (userId, userNo, userState) => {

        let inputData = {
            no: userNo,
            id: userId,
            state: userState
        }
        console.log("inputData : " + inputData);
        console.log(" 사용자 ID:", userId);
        console.log(" 사용자 PK:", userNo);
        console.log(" 사용자 상태:", userState);

        // 수정처리 
        ApiService.updateCustomer(inputData)
            .then(res => {
                this.setState({});
                console.log('input 성공 : ', res.data);

                if (res.data.resultCode == 200) {
                    alert("탈퇴 복구 성공");
                    this.props.history.push('/admin/listCustomer');
                } else {
                    alert("회원정보 수정 실패");
                    this.props.history.push('/admin/listCustomer');
                }
            })
            .catch(err => {
                console.log('updateCustomer() 에러 ', err);
            });
    }



    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> type </TableCell>
                            <TableCell> id </TableCell>
                            <TableCell> name </TableCell>
                            <TableCell> hp </TableCell>
                            <TableCell> birthday </TableCell>
                            <TableCell> address </TableCell>
                            <TableCell> regdate </TableCell>
                            <TableCell> state </TableCell>
                            <TableCell> 권한 </TableCell>

                            <TableCell>탈퇴 복구</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.lists.map(list =>
                            <TableRow key={list.No}>
                                <TableCell> {list.type} </TableCell>
                                <TableCell component="th" scope="row"> {list.id} </TableCell>
                                <TableCell> {list.name} </TableCell>
                                <TableCell> {list.hp} </TableCell>
                                <TableCell> {new Date(list.birthday).toLocaleDateString()} </TableCell>
                                <TableCell> {list.address} </TableCell>
                                <TableCell> {new Date(list.regdate).toLocaleDateString()} </TableCell>
                                <TableCell> {list.state} </TableCell>
                                <TableCell> {list.role} </TableCell>
                                {/* 탈퇴 복구 버튼 */}
                                <TableCell>
                                    {list.state === 'n' && (  // state 값이 'n'인 경우에만 버튼을 보여줍니다.
                                        <IconButton onClick={() => this.resignUp(list.id, list.no, list.state)}>
                                            <RestoreIcon />
                                        </IconButton>
                                    )}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>

                </Table>



            </div>
        )
    }
}

export default listCustomer;