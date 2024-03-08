import React from 'react';
import DaumPostcode from 'react-daum-postcode';

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: '',
            addr1: '',
            addr2: ''
        };
    }

    handleAddressComplete = (data) => {
        let fullAddr = "";
        let extraAddr = "";

        if (data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
        } else {
            fullAddr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }

            fullAddr += (fullAddr !== '' ? '(' + extraAddr + ')' : '');
        }

        this.setState({
            zipcode: data.zonecode,
            addr1: fullAddr,
            addr2: ''
        });
    };

    render() {
        return (
            <div>
                <form action="" name="form1">
                    <input type="text" name="zipcode" maxLength="5" value={this.state.zipcode} readOnly />
                    <input type="button" value="우편번호검색" id="search_addr" onClick={this.handleDaumPostcode} /> <br />
                    <input type="text" name="addr1" value={this.state.addr1} readOnly />
                    <input type="text" name="addr2" value={this.state.addr2} onChange={(e) => this.setState({ addr2: e.target.value })} />
                </form>
                <DaumPostcode
                    onComplete={this.handleAddressComplete}
                    autoClose
                    animation
                />
            </div>
        );
    }
}

export default AddressForm;