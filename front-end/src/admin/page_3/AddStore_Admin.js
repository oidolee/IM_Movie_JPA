import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Typography, Button } from '@mui/material';


class AddSampleComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {  // 2. 해당 변수에 입력한 값으로 변경된 상태
            item_type: '',
            item_name: '',
            item_detail: '',
            item_price: '',
            item_sale_price: '',
            item_image: '',
            item_exp: ''
        }
    }

    onChange = (e) => {  // 1. 입력한 값으로 변경한다.
        this.setState({
            [e.target.item_name] : e.target.value  // 이건 어떻게 사용하는 거지???????
        });
    }

    saveSample = (e) => {
        e.preventDefault();

        let inputData = {   // 3. state값을 읽어온다.
            item_type: this.state.item_type,
            item_name: this.state.item_name,
            item_detail: this.state.item_detail,
            item_price: this.state.item_price,
            item_sale_price: this.state.item_sale_price,
            item_image: this.state.item_image,
            item_exp: this.state.item_exp
        }
        
        // 3. 등록처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
        ApiService.addSample(inputData)    // 스프링부트와의 통신기능 호출
            .then(res => {
                this.setState({                    
                })
                console.log('input 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push('/samples');  // RouterComponent.js - ListSampleComponent 호출
            })
            .catch(err => {
                console.log('addSample() 에러!! : ', err);
            });

    }

    render() {
        return(
            <div align="center"><br/><br/>
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
                    /><br/>    

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
                    /><br/>   

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
                    /><br/>   

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
                    /><br/><br/> 

                <Button variant="contained" color="primary" onClick={this.saveSample}> Save </Button>    
            
            </div>

           
        )
    }
}

export default AddSampleComponent;