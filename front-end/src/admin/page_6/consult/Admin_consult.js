import React, { Component } from "react";
import ApiService from "../../ApiService";
// npm install -f @mui/material
// npm install @emotion/react
// npm install @emotion/styled
// npm install -f @mui/icons-material@^5.11.16
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography} from '@mui/material'
import { Create, Delete } from '@mui/icons-material'; 

class ListSampleComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            samples: [],    // 5. 리스트 데이터
            message: null
        }
    }

    // 라이프 사이클 중 컴포넌트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링(데이터 로딩)
    componentDidMount(){ 
        this.reloadSampleList();    // 1.
    }

    // List
    reloadSampleList = () =>{
        ApiService.fetchSamples() // 2. 스프링 부트와의 통신기능 호출
        .then(res => {            // 4.
            this.setState({
                samples: res.data
            })
        })
        .catch(err => {
            console.log('reloadSampleList() Error!!', err);
        })
    }

    // insert
    addSample = () => {
        window.localStorage.removeItem("sampleID")  // SQL 에서 max + 1 자동증가 처리하므로
        // RouterConponent.js 의  <Route path="/add-sample" exact={true} component={AddSampleComponent} /> 호출
        this.props.history.push("/add-sample");
    }

    // update
    editSample = (ID) => {
        window.localStorage.setItem("sampleID", ID); // EditSampleComponent.js에서 getItem(),update 문에서 where절에 사용
        // RouterConponent.js 의  <Route path="/add-sample" exact={true} component={EditSampleComponent} /> 호출
        this.props.history.push("/edit-sample");
    }

    // delete
    deleteSample = (sampleID) =>{
        ApiService.deleteSample(sampleID)
            .then(res =>{
               this.setState({
                    samples: this.state.samples.filter(sample => sample.id !== sampleID)

               });
               console.log('delete 성공 : ', res.data); // 컨트롤러에서 전달함(resultCode, resultMsg)
            })
            .catch(err => {
                console.log('deleteSample() Error!!', err);
            })
        this.props.history.push("/samples");
    }
    render(){
        return(
            <div><br/><br/>
                <Typography variant="h4" style={style}>Sample List</Typography><br/><br/>
                <Button variant="contained" color="primary" onClick={this.addSample}>Add Sample</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> 아이디 </TableCell>
                            <TableCell> 제목 </TableCell>
                            <TableCell> 등록일 </TableCell>
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
                                
                                <TableCell onClick={() => this.editSample(sample.id)}>
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