import React, { Component } from "react";
import { TextField, Typography, Button } from "@mui/material";
import ApiService from '../../ApiService';

class EditSampleComponent extends Component {
    constructor(props){
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

    componentDidMount(){
        this.loadSample(); // Fixed typo here
    }

    //1. 수정전 1건 조회 후 값 뿌려줌
    loadSample = () => { // Defined loadSample method within the class
        ApiService.fetchSampleByID(window.localStorage.getItem("sampleID"))
            .then(res=>{
                let sample = res.data;
                this.setState({
                    id : sample.id, // Assuming sample has an 'id' property
                    name: sample.name,
                    brand: sample.brand,
                    madein: sample.madein,
                    price: sample.price,
                    message: sample.message,
                })
            })
            .catch(err => {
                console.log("loadSample() Error!! ", err);
            })
    }

    //2. 화면에서 입력한 값을 수정 
    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // 3.수정쿼리(화면에서 입력한 값 -> setState() -> inputData)
    editSample =(e)=> {
        e.preventDefault();

        let inputData = {
            id: this.state.id,
            name : this.state.name,
            brand : this.state.brand,
            madein : this.state.madein,
            price : this.state.price,
        }

        ApiService.editSample(inputData)
            .then(res=>{
                this.setState({})
                console.log("edit 성공", res.data);
                this.props.history.push("/samples");
            })
            .catch(err=>{
                console.log("editSample() err" + err);
            })
    }

    render() {
        return (
            <div align="center"><br /><br />
                <Typography variant="h4"> Edit Sample</Typography>
                {/* Edit */}
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="id"
                    type="text"
                    name="id"
                    value={this.state.id}                 
                /><br />

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Edit sample name"
                    onChange={this.onChange}
                /><br />

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="brand"
                    type="text"
                    name="brand"
                    value={this.state.brand}
                    placeholder="Edit sample brand"
                    onChange={this.onChange}
                /><br />

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="madein"
                    type="text"
                    name="madein"
                    value={this.state.madein}
                    placeholder="Edit sample madein"
                    onChange={this.onChange}
                /><br />

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="price"
                    type="text"
                    name="price"
                    value={this.state.price}
                    placeholder="Edit sample price"
                    onChange={this.onChange}
                /><br />


                <Button variant="contained" color="primary" onClick={this.editSample}>
                    Edit
                </Button>
            </div>
        )
    }
}
export default EditSampleComponent;
