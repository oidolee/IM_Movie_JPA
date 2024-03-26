import React from 'react';
import style from '../../../styles/page_6/MyPage_res_module.css'
import Table from 'react-bootstrap/Table';



const MyPage_res_part = () => {
    return (
        <div className={`MyPage_resMoive ${style.MyPage_resMoive}`}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>상품</th>
                        <th>결제금액</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>티켓</td>
                        <td>2024-03-26</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>팝콘</td>
                        <td>2024-03-25</td>
                        <td>18,000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>티켓</td>
                        <td>2024-03-24</td>
                        <td>24,000</td>
                    </tr>

                    <tr>
                        <td colSpan={3}>총 금액 : </td>
                        <td>52,000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default MyPage_res_part;
