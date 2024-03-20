import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import style from "../../../styles/admin/page_5/Admin_Arte_List.css";
import ApiService from "../../../ApiService";
import { Create, Delete } from "@mui/icons-material";

function Admin_coupon_List({ history }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    couponList();
  }, []);

  // 목록
  const couponList = () => {
    ApiService.fetchCoupon()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("couponList Error", err);
      });
  };

  // 등록
  const ArteAdd = () => {
    window.localStorage.removeItem("arte_id");
    history.push("/admin/page_5/Admin_Arte_Add");
  };

  // 수정
  const selectCoupon = (ic_num) => {
    window.localStorage.setItem("ic_num", ic_num);
    history.push("/admin/page_6/coupon/Admin_coupon_Edit");
  };

  // 삭제
  const deleteCoupon = (ic_num) => {
    ApiService.deleteArte(ic_num)
      .then((res) => {
        setLists(lists.filter((list) => list.ic_num !== ic_num));
        console.log("deleteArte 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("deleteArte 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Arte_List ${style.Admin_Arte_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="ArteList">
        쿠폰 리스트
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={ArteAdd}
      >
        쿠폰 추가
      </Button>
      <br />
      <br />
      <Table className="Arte_List_Content">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>쿠폰코드</TableCell>
            <TableCell>쿠폰 이름</TableCell>
            <TableCell>카테고리</TableCell>
            <TableCell>쿠폰 포인트</TableCell>
            <TableCell>유효기간</TableCell>
            <TableCell>등록일</TableCell>

            <TableCell>수정</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.ic_num}>
              <TableCell component="th" scope="list">
                {list.ic_num}
              </TableCell>
              <TableCell>{list.ic_code}</TableCell>
              <TableCell>{list.ic_name}</TableCell>
              <TableCell>{list.ic_category}</TableCell>
              <TableCell>{list.ic_point}</TableCell>
              <TableCell>{list.ic_useDate}</TableCell>
              <TableCell>{list.ic_regDate}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectCoupon(list.ic_num)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => deleteCoupon(list.ic_num)}
              >
                <Delete />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin_coupon_List;
