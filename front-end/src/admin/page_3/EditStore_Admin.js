
import React, { Component } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import ApiService from '../../ApiService';

class EditStore_Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {  // 2. 해당 변수에 입력한 값으로 변경된 상태
            itemCode: '',
            itemType: '',
            itemName: '',
            itemDetail: '',
            itemPrice: '',
            itemSalePrice: '',
            itemImage: '',
            itemExp: ''
        }
    }

    componentDidMount() {
        this.loadStore();
    }


    loadStore = () => {
        ApiService.fetchStoreByID(window.localStorage.getItem("sampleID")) 
        .then(res => {        
        let sotreEdit = res.data;
        this.setState({
            itemCode: sotreEdit.itemCode,
            itemType: sotreEdit.itemType,
            itemName: sotreEdit.itemName,
            itemDetail: sotreEdit.itemDetail,
            itemPrice: sotreEdit.itemPrice,
            itemSalePrice: sotreEdit.itemSalePrice,
            itemImage: sotreEdit.itemImage,
            itemExp: sotreEdit.itemExp
        })
    })

    .catch(err => {
        console.log('loadSample() Error!!', err);
    })
}       

    onChange = (e) => {  // 1. 입력한 값으로 변경한다.
        this.setState({
            [e.target.name] : e.target.value 
        });
    }

    EditStore_Admin = (e) => {
        e.preventDefault();

        let inputData = {   // 3. state값을 읽어온다.
            itemCode: this.state.itemCode,
            itemType: this.state.itemType,
            itemName: this.state.itemName,
            itemDetail: this.state.itemDetail,
            itemPrice: this.state.itemPrice,
            itemSalePrice: this.state.itemSalePrice,
            itemImage: this.state.itemImage,
            itemExp: this.state.itemExp
        }


        // 3. 수정처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
        ApiService.EditStore_Admin(inputData)    // 스프링부트와의 통신기능 호출
            .then(res => {
                this.setState({                    
                })
                console.log('input 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push('ListStore_Admin');  // RouterComponent.js - ListSampleComponent 호출
            })
            .catch(err => {
                console.log('EditStore_Admin() 에러!! : ', err);
            });

    }

    render() {
        return(
            <div align="center"><br/><br/>
                <Typography variant="h4"> 스토어 상품 수정 </Typography>
                
                     <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="상품코드"
                        type="text"
                        name="itemCode"
                        value={this.state.itemCode}

                    /><br/>   

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="상품유형"
                        type="text"
                        name="itemType"
                        value={this.state.itemType}
                        placeholder='Input sample itemType'
                        onChange={this.onChange}
                    /><br/>   

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

                <Button variant="contained" color="primary" onClick={this.EditStore_Admin}> Save </Button>    
            
            </div>

           
        )
    }
}

export default EditStore_Admin;