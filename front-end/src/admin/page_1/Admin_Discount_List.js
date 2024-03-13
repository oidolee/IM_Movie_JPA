import React, { Component } from "react";
import {Table, TableHead, TableRow, TableCell, TableBody, Typography, Button} from "@mui/material"
import style from '../../styles/admin/page_1/Admin_Discount_List.css';

class Admin_Discount_List extends Component {
  render() {
    return (
      <div className={`Admin_Discount ${style.Admin_Discount}`}>
        <br />
        <br />
        <Typography variant="h5" className="Admin_Discount_List">
          할인 리스트
        </Typography>
        <br />
        <br />
        <Button variant="contained" color="primary" className="Add_btn" onClick={this.Admin_Discount_Add}>
          Discount_Add
        </Button>
        <br />
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Num</TableCell>
              <TableCell>Main_Title</TableCell>
              <TableCell>Sub_Title</TableCell>
              <TableCell>Main_Img</TableCell>
              <TableCell>Sub_Img</TableCell>
              <TableCell>Show</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {this.state.samples.map(
              (
                sample // 6.
              ) => (
                <TableRow key={sample.id}>
                  <TableCell component="th" scope="sample">
                    {sample.id}
                  </TableCell>
                  <TableCell>{sample.name}</TableCell>
                  <TableCell>{sample.brand}</TableCell>
                  <TableCell>{sample.madein}</TableCell>
                  <TableCell>{sample.price}</TableCell>
                  <TableCell onClick={() => this.editSample(sample.id)}>
                    <Create />
                  </TableCell>
                  <TableCell onClick={() => this.deleteSample(sample.id)}>
                    <Delete />
                  </TableCell>
                </TableRow>
              )
            )} */}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Admin_Discount_List;
