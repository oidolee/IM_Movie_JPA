import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Typography, Button, MenuItem } from '@mui/material';


class AddStore_Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {  // 2. 해당 변수에 입력한 값으로 변경된 상태
            itemType: '',
            itemName: '',
            itemDetail: '',
            itemPrice: '',
            itemSalePrice: '',
            itemImage: '',
            itemExp: ''
        }
    }

    onChange = (e) => {  // 1. 입력한 값으로 변경한다.
        this.setState({
            [e.target.name] : e.target.value  
        });
    }

    saveSample = (e) => {
        e.preventDefault();

        let inputData = {   // 3. state값을 읽어온다.
            itemType: this.state.itemType,
            itemName: this.state.itemName,
            itemDetail: this.state.itemDetail,
            itemPrice: this.state.itemPrice,
            itemSalePrice: this.state.itemSalePrice,
            itemImage: this.state.itemImage,
            itemExp: this.state.itemExp
        }
        
        // 3. 등록처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
        ApiService.AddStore_Admin(inputData)    // 스프링부트와의 통신기능 호출
            .then(res => {
                this.setState({                    
                })
                console.log('input 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push('ListStore_Admin');  // RouterComponent.js - ListSampleComponent 호출
            })
            .catch(err => {
                console.log('AddStore_Admin() 에러!! : ', err);
            });

    }

    render() {
        return(
            <div align="center"><br/><br/>
                <Typography variant="h4"> 스토어 상품 등록 </Typography>
                <TextField
                        required
                        select
                        id="standard-select-itemType"
                        variant="standard"
                        label="상품유형"
                        name="itemType"
                        value={this.state.itemType}
                        onChange={this.onChange}
                        style={{ width: '200px' }} 
                    >
                        <MenuItem value="베스트">베스트</MenuItem>
                        <MenuItem value="관람권">관람권</MenuItem>
                        <MenuItem value="스낵음료">스낵음료</MenuItem>
                    </TextField>
                    <br/>

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="상품명"
                        type="text"
                        name="itemName"
                        value={this.state.itemName}
                        placeholder='Input sample itemName'
                        onChange={this.onChange}
                    /><br/>   

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="구성품"
                        type="text"
                        name="itemDetail"
                        value={this.state.itemDetail}
                        placeholder='Input sample itemDetail'
                        onChange={this.onChange}
                    /><br/>   

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="소비자 가격"
                        type="text"
                        name="itemPrice"
                        value={this.state.itemPrice}
                        placeholder='Input sample itemPrice'
                        onChange={this.onChange}
                    /><br/>    

                    <TextField
                        required 
                        id="stanrard-required"
                        variant="standard"
                        label="할인 가격"
                        type="text"
                        name="itemSalePrice"
                        value={this.state.itemSalePrice}
                        placeholder='Input sample itemSalePrice'
                        onChange={this.onChange}
                    /><br/>   

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="이미지"
                        type="text"
                        name="itemImage"
                        value={this.state.itemImage}
                        placeholder='Input sample itemImage'
                        onChange={this.onChange}
                    /><br/>   

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="유효기간"
                        type="text"
                        name="itemExp"
                        value={this.state.itemExp}
                        placeholder='Input sample itemExp'
                        onChange={this.onChange}
                    /><br/><br/> 

                <Button variant="contained" color="primary" onClick={this.saveSample}> Save </Button>    
            
            </div>

           
        )
    }
}

export default AddStore_Admin;