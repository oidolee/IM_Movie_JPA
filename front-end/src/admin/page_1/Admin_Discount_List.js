import React, { Component } from "react";
import{ Table, TableCell, TableRow } from '@mui/material';

class Admin_Discount_List extends Component {
  render() {
    return (
      <div>
        <form action="#" method="post">
          <input type="hidden" name="dc_num" value={this.props.dc_num} />
          <Table>
            <TableRow>
              <TableCell
                width="20%"
                name="dc_num"
                value={this.props.dc_num}
              >
                {this.props.dc_num}
              </TableCell>

              <TableCell width="20%" name="dc_main_title">
                {this.props.dc_main_title}
              </TableCell>

              <TableCell width="20%" name="dc_sub_title">
                {this.props.dc_sub_title}
              </TableCell>

              <TableCell width="20%" name="dc_main_img">
                {this.props.dc_main_img}
              </TableCell>

              <TableCell width="20%" name="dc_sub_img">
                {this.props.dc_sub_img}
              </TableCell>

              <TableCell width="20%" name="dc_show">
                {this.props.dc_show}
              </TableCell>

              <TableCell width="10%" name="dc_regdate">
                <input
                  type="button"
                  class="btn"
                  value="수정"
                  onClick={this.displayUpdateClick}
                />
              </TableCell>

              <TableCell width="10%" name="dc_regdate">
                <input
                  type="button"
                  class="btn"
                  value="삭제"
                  onClick={this.displayDeleteClick}
                />
              </TableCell>
            </TableRow>
          </Table>
        </form>
      </div>
    );
  }
}

export default Admin_Discount_List;
