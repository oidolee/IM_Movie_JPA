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
import style from "../../../styles/admin/page_6/Admin_coupon_List.css";
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
      .then(res => {

        const list = res.data.map(list => ({
          ...list,
          ic_startDate: formatDate(list.ic_startDate),
          ic_regDate: formatDate(list.ic_regDate),
          ic_endDate: formatDate(list.ic_endDate)
        }));
        setLists(list);
      })
      .catch((err) => {
        console.log("couponList Error", err);
      });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 두 자리 숫자로 만들기 위해 padStart 사용
    const day = String(date.getDate()).padStart(2, '0'); // 두 자리 숫자로 만들기 위해 padStart 사용
    return `${year}-${month}-${day}`;
  };


  // 등록
  const CouponAdd = () => {

    history.push("/admin/page_6/coupon/Admin_coupon_Add");
  };

  // 수정
  const selectCoupon = (ic_name) => {
    history.push(`/admin/page_6/coupon/Admin_coupon_Edit/${ic_name}`);
  };

  // 삭제
  const deleteCoupon = (ic_num) => {

    const result = window.confirm('삭제 하시겠습니까?');

    if (result) {
      // 확인을 클릭했을 때의 동작
      ApiService.deleteCoupon(ic_num)
        .then((res) => {
          setLists(lists.filter((list) => list.ic_num !== ic_num));
          console.log("deleteCoupon 성공 : ", res.data);
          alert("삭제 되었습니다.")
        })
        .catch((err) => {
          console.log("deleteCoupon 실패 : ", err);
        });
        
    } else {
      // 취소를 클릭했을 때의 동작
      console.log('사용자가 취소를 클릭했습니다.');
    }


  };

  return (
    <div className={`Admin_Arte_List ${style.Admin_coupon_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="couponList">
        쿠폰 리스트
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={CouponAdd}
      >
        쿠폰 추가
      </Button>
      <br />
      <br />
      <Table className="Coupon_List_Content">
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
              <TableCell>{list.ic_startDate} ~ {list.ic_endDate}</TableCell>
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
