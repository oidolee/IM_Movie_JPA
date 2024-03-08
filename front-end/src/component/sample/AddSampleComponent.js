import React, { Component } from "react";
import { TextField, Typography,Button } from "@mui/material";
import ApiService from '../../ApiService';

class AddSampleComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            brand: '',
            madein: '',
            price: '',
            message: ''
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveSample = (e) => {
        e.preventDefault();

        let inputData = {
            name : this.state.name,
            brand : this.state.brand,
            madein : this.state.madein,
            price : this.state.price
        }
        ApiService.addSample(inputData)
            .then(res => {
                this.setState({

                })
                console.log('input 성공 : ' , res.data); // 컨트롤러에서 전달함 (resultCode, resultMsg)
                this.props.history.push('/samples') // RouterComponet.js - ListSampleComponet 호출 
            })
            .catch(err =>{
                console.log('addSample() 에러 !! ', err);
            })
    }

    render(){
        return(
            <div align="center"><br/><br/>
                <Typography variant="h4"> Add Sample</Typography>
                {/* input */}
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Input sample name"
                    onChange={this.onChange}
                 /><br/>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="brand"
                    type="text"
                    name="brand"
                    value={this.state.brand}
                    placeholder="Input sample brand"
                    onChange={this.onChange}
                 /><br/>
                 
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="madein"
                    type="text"
                    name="madein"
                    value={this.state.madein}
                    placeholder="Input sample madein"
                    onChange={this.onChange}
                 /><br/>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="price"
                    type="text"
                    name="price"
                    value={this.state.price}
                    placeholder="Input sample price"
                    onChange={this.onChange}
                 /><br/>


                <Button variant="contained" color="primary" onClick={this.saveSample}>
                    Save
                </Button>
            </div>

            
        )
    }
}
export default AddSampleComponent;