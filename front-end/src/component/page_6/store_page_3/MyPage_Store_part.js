import React, { Component } from 'react';
import style from '../../../styles/page_6/MyPage_res_module.css';
import ApiService from '../../../ApiService';
import Table from 'react-bootstrap/Table';

class MyPage_Store_part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],    // 리스트 데이터
            totalAmount: 0 // 총 결제 금액
        }
    }

    componentDidMount() {
        this.storeOrderDetailList();  // 데이터 로딩
    }

    storeOrderDetailList = () => {
        ApiService.ListStore_MyPage()
        .then(res => {
            this.setState({
                lists: res.data
            }, () => {
                this.calculateTotalAmount();
            });
        })
        .catch(err => {
            console.log('ListStore_MyPage() Error!!', err);
        });
    }

    // 총 결제 금액 계산
    calculateTotalAmount = () => {
        const totalAmount = this.state.lists.reduce((total, item) => {
            return total + item.totalPrice;
        }, 0);
        this.setState({ totalAmount });
    }

    // timestamp를 날짜 형식으로 변환하는 함수
    formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    render() {
        return (
            <div className={`MyPage_resMoive ${style.MyPage_resMoive}`}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>상품</th>
                            <th>결제금액</th>
                            <th>수량</th>
                            <th>총 결제금액</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lists.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.itemName}</td>
                                <td>{item.totalPrice / item.totalQuantity}원</td>
                                <th>{item.totalQuantity}</th>
                                <td>{item.totalPrice} 원</td>
                                <td>{this.formatDate(item.detailRegDate)}</td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td colSpan={5}>총 금액 : </td>
                            <td>{this.state.totalAmount} 원</td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MyPage_Store_part;
