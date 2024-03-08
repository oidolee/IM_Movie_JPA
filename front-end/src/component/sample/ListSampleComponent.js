import React, { Component } from "react";
import ApiService from "../../ApiService";

// npm install -f @mui/material
// npm install @emotion/react
// npm install @emotion/styled
// npm install @emotion/react

// npm install @emotion/react npm install @emotion/styled npm install @emotion/react
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography} from '@mui/material';
import {Create, Delete} from '@mui/icons-material'; // npm install -f @mui/icons-material@^5.11.16

class ListSampleComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            samples: [],    // 5.
            message: null
        }
    }

    // 라이프 사이클 중 컴포넌트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링
    componentDidMount(){
        this.reloadSampleList();    // 1.
    }

// sql      (리액트)         (스프링부트)  
// select : axios.get()    = > @GetMapping    
// insert : axios.post()   = > @PostMapping   
// update : axios.put()    = > @PutMapping    
// delete : axios.delete() = > @DeleteMapping 

    //list 조회
    reloadSampleList = () =>{
        ApiService.fetchSamples() // 2.
        .then(res => {            // 4.
            console.log(res);
            this.setState({
                samples: res.data
            })
        })
        .catch(err => {
            console.log('reloadSampleList() Error!!', err);
        })
    }



    //insert
    addSample = () => {
        window.localStorage.removeItem("sampleID"); // SQL MAX+1 자동증가 처리하므로
        //호출하랏! <Route path="/add-sample" exact={true} component={AddSampleComponent} /> 
        this.props.history.push("/add-sample");
    }

    //update
    editsSample = (ID) => {
        window.localStorage.setItem("sampleID",ID); // update 문 where절 사용
        //EditSampleComponent.js 에서 getItem() 사용 위해 
        //<Route path="/edit-sample" exact={true} component={EditSampleComponent} />
        this.props.history.push("/edit-sample");
    }

    //delete
    deleteSample = (sampleID) => {
        
        ApiService.deleteSample(sampleID)
            .then(res=> {
                this.setState({
                    samples : this.state.samples.filter(sample => sample.id !== sampleID)
                })
                console.log("delete 성공 : ", res.data); //칸트롤러에서 resultCode, resultMap 전달
            })
            .catch(err => {
                console.log("err : " + err);
            })

    }

    render(){
        return(
            <div><br/><br/>

                
                <Typography variant="h4" style={style}>Sample List</Typography>
                <Button onClick={this.addSample} >Add sample</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Sample ID </TableCell>
                            <TableCell> name </TableCell>
                            <TableCell> Brand </TableCell>
                            <TableCell> MadIn </TableCell>
                            <TableCell> Price </TableCell>
                            <TableCell> Edit </TableCell>
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.samples.map(sample => 
                            <TableRow key={sample.id}>
                                <TableCell component="th" scope="sample">
                                    {sample.id}
                                </TableCell>
                                <TableCell>{sample.name}</TableCell>
                                <TableCell>{sample.brand}</TableCell>
                                <TableCell>{sample.madein}</TableCell>
                                <TableCell>{sample.price}</TableCell>

                                <TableCell onClick={() => this.editsSample(sample.id)}>
                                   <Create />
                                </TableCell>
                                <TableCell onClick={() => this.deleteSample(sample.id)}>
                                    <Delete />    
                                </TableCell>
                            </TableRow>
                            
                            )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const style={
    display: 'flex',
    justifyContent: 'center'
}
export default ListSampleComponent;


// # REST API
// 1. API 연동의 기본 

// axios를 사용해서 GET(SELECT), PUT(EDIT), POST(INSERT), DELETE(DELETE) 등의 메서드로 API 요청을 할 수 있다.

// REST API 를 사용 할 때에는 하고 싶은 작업에 따라 다른 메서드로 요청을 할 수 있는데 메서드들은 다음 의미를 가지고 있습니다.

// GET: 데이터 조회
// POST: 데이터 등록
// PUT: 데이터 수정
// DELETE: 데이터 제거
