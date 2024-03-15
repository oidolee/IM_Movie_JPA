import React, { useState, useEffect } from "react";
import ApiService from '../../../ApiService';
import { TextField, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


function AddCouponComponent() {



    this.state = {  // 2. 해당 변수에 입력한 값으로 변경된 상태
        ic_num: '',
        ic_name: '',
        ic_category: '',
        ic_sale: '',
        ic_useDate: '',
    }

    

    const history = useHistory();

    

    const c_email = 'abc';
    let a = 'abc';
    const [couponData, setCouponData] = useState({
        ic_num: '',
        ic_name: '',
        ic_category: '',
        ic_sale: '',
        ic_useDate: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCouponData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveCoupon = (e) => {
        e.preventDefault();
        // 필요한 로직 수행
        ApiService.addCoupon(couponData)
            .then(res => {
                console.log('입력 성공:', res.data);
                // 필요한 작업 수행
                if (res.data.resultCode == '200') {
                    alert("쿠폰 등록 성공");
                    history.push('/MyPage_consult_list'); // history.push()로 페이지를 이동합니다.
                } else {
                    alert("쿠폰 등록 실패");
                    history.push('/Consult'); // history.push()로 페이지를 이동합니다.
                }
            })
            .catch(err => {
                console.error('문의 등록 에러:', err);
            });

    }


    return (
        <div align="center"><br /><br />
            <Typography variant="h4"> Add Sample </Typography>
            <TextField
                required
                id="stanrard-required"
                variant="standard"
                label="name"
                type="text"
                name="name"
                value={this.state.name}
                placeholder='Input sample name'
                onChange={this.onChange}
            /><br />

            <TextField
                required
                id="stanrard-required"
                variant="standard"
                label="brand"
                type="text"
                name="brand"
                value={this.state.brand}
                placeholder='Input sample brand'
                onChange={this.onChange}
            /><br />

            <TextField
                required
                id="stanrard-required"
                variant="standard"
                label="madein"
                type="text"
                name="madein"
                value={this.state.madein}
                placeholder='Input sample madein'
                onChange={this.onChange}
            /><br />

            <TextField
                required
                id="stanrard-required"
                variant="standard"
                label="price"
                type="text"
                name="price"
                value={this.state.price}
                placeholder='Input sample price'
                onChange={this.onChange}
            /><br /><br />

            <Button variant="contained" color="primary" onClick={this.saveSample}> Save </Button>

        </div>


    )

}

export default AddCouponComponent;