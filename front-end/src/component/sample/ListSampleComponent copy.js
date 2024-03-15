import React, { useEffect, useState } from "react";
import ApiService from "../../ApiService";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from '@mui/material';
import { Create, Delete } from '@mui/icons-material';

const ListSampleComponent = () => {
    const [samples, setSamples] = useState([]);

    useEffect(() => {
        reloadSampleList();
    }, []);

    const reloadSampleList = () => {
        ApiService.fetchSamples()
            .then(res => {
                console.log(res);
                setSamples(res.data);
            })
            .catch(err => {
                console.log('reloadSampleList() Error!!', err);
            })
    };

    const addSample = () => {
        window.localStorage.removeItem("sampleID");
        // 호출하랏! <Route path="/add-sample" exact={true} component={AddSampleComponent} /> 
        // this.props.history.push("/add-sample");
    }

    const editSample = (ID) => {
        window.localStorage.setItem("sampleID", ID);
        // EditSampleComponent.js 에서 getItem() 사용 위해 
        // <Route path="/edit-sample" exact={true} component={EditSampleComponent} />
        // this.props.history.push("/edit-sample");
    }

    const deleteSample = (sampleID) => {
        ApiService.deleteSample(sampleID)
            .then(res => {
                setSamples(samples.filter(sample => sample.id !== sampleID));
                console.log("delete 성공 : ", res.data); // 칸트롤러에서 resultCode, resultMap 전달
            })
            .catch(err => {
                console.log("err : " + err);
            })
    }

    return (
        <div>
            <br /><br />
            <Typography variant="h4" style={style}>Sample List</Typography>
            <Button onClick={addSample}>Add sample</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sample ID</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>MadIn</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {samples.map(sample =>
                        <TableRow key={sample.id}>
                            <TableCell>{sample.id}</TableCell>
                            <TableCell>{sample.name}</TableCell>
                            <TableCell>{sample.brand}</TableCell>
                            <TableCell>{sample.madein}</TableCell>
                            <TableCell>{sample.price}</TableCell>
                            <TableCell onClick={() => editSample(sample.id)}>
                                <Create />
                            </TableCell>
                            <TableCell onClick={() => deleteSample(sample.id)}>
                                <Delete />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default ListSampleComponent;
