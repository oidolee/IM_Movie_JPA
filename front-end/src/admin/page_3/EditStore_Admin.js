
import React, { Component } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import ApiService from '../../ApiService';

class EditStore_Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            brand: '',
            madein: '',
            price: '',
            message: ''
        }
    }

    componentDidMount() {
        this.loadSample();
    }

    // 1. 수정전에 1건 select해서 state 호출한 후 그값을 화면에 뿌린다.
    loadSample = () => {
        ApiService.fetchSampleByID(window.localStorage.getItem("sampleID"))
        .then(res => {
            let sample = res.data;
            this.setState({
                id: sample.id,
                name: sample.name,
                brand: sample.brand,
                madein: sample.madein,
                price: sample.price
            })
        })

        .catch(err => {
            console.log('loadSample() Error!!', err);
        })
    }

    // 2. 화면에서 수정한 값을 state 변경
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

     // 3.수정처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
     editSample = (e) => {
        e.preventDefault();

        let inputData = {
            id: this.state.id,
            name: this.state.name,
            brand: this.state.brand,
            madein: this.state.madein,
            price: this.state.price,
        }

        ApiService.editSample(inputData)
            .then(res => {
                this.setState({

                })
                console.log('update 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push('/samples');  // RouterComponent.js - ListSampleComponent 호출           
            })
            .catch(err => {
                console.log('editSample() 에러!! : ', err);
            });

    } 

    render() {
        return (
            <div align="center"><br/><br/>
                <Typography variant="h4"> Edit Sample </Typography>
                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="id"
                        type="text"
                        name="id"
                        value={this.state.id}
                    /><br/>    

                    <TextField
                        required
                        id="stanrard-required"
                        variant="standard"
                        label="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder='Edit sample name'
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
                        placeholder='Edit sample brand'
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
                        placeholder='Edit sample madein'
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
                        placeholder='Edit sample price'
                        onChange={this.onChange}
                    /><br/><br/> 

                <Button variant="contained" color="primary" onClick={this.editSample}> Edit </Button>    
            
            </div>

        )
    }
}

export default EditStore_Admin;