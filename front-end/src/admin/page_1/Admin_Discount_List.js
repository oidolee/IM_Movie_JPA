import React, { Component } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import style from "../../styles/admin/page_1/Admin_Discount_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";

class Admin_Discount_List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      message: null,
    };
  }

  componentDidMount() {
    this.discountList();
  }

  // 목록
  discountList = () => {
    ApiService.listDiscount()
      .then((res) => {
        this.setState({
          lists: res.data,
        });
      })
      .catch((err) => {
        console.log("listDiscount Error", err);
      });
  };

  // 등록
  discountAdd = () => {
    window.localStorage.removeItem("dc_num");
    this.props.history.push("/admin/page_1/Admin_Discount_Add");
  };

  // 수정
  selectDiscount = (dcNum) => {
    window.localStorage.setItem("dc_num", dcNum);
    this.props.history.push("/admin/page_1/Admin_Discount_Edit");
  };

  // 삭제
  deleteDiscount = (dc_num) => {
    ApiService.deleteDiscount(dc_num)
      .then((res) => {
        this.setState({
          lists: this.state.lists.filter((list) => list.dc_num !== dc_num),
        });
        console.log("deleteDiscount 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("deleteDiscount 실패 : ", err);
      });
  };

  render() {
    return (
      <div className={`Admin_Discount_List ${style.Admin_Discount_List}`}>
        <br />
        <br />
        <Typography variant="h5" className="discountList">
          할인 안내
        </Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          className="Add_btn"
          onClick={this.discountAdd}
        >
          등록
        </Button>
        <br />
        <br />
        <Table className="Discount_List_Content">
          <TableHead>
            <TableRow>
              <TableCell>할인안내</TableCell>
              <TableCell>대제목</TableCell>
              <TableCell>소제목</TableCell>
              <TableCell>내용</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>출력여부</TableCell>
              <TableCell>등록일</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.lists.map((list) => (
              <TableRow key={list.dc_num}>
                <TableCell component="th" scope="list">
                  {list.dc_num}
                </TableCell>
                <TableCell>{list.dc_main_title}</TableCell>
                <TableCell>{list.dc_sub_title}</TableCell>
                <TableCell>{list.dc_content}</TableCell>
                <TableCell>{list.dc_main_img}</TableCell>
                <TableCell>{list.dc_show}</TableCell>
                <TableCell>{list.dc_sysdate}</TableCell>
                <TableCell
                  className="selectBtn"
                  onClick={() => this.selectDiscount(list.dc_num)}
                >
                  <Create />
                </TableCell>
                <TableCell
                  className="deleteBtn"
                  onClick={() => this.deleteDiscount(list.dc_num)}
                >
                  <Delete />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Admin_Discount_List;
