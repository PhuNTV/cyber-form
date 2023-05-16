import React, { Component } from 'react';
import { connect } from 'react-redux'
class FormRegister extends Component {
    getInfo = (e) => {
        let { id, value } = e.target;
        let dataType = e.target.getAttribute("data-type");
        const action = {
            type: "HANDLE_INPUT",
            payload: {
                id: id,
                value: value,
                dataType: dataType,
            },
        };
        this.props.dispatch(action);

    };


    createStudent = (e) => {
        e.preventDefault();
        const action = {
            type: "HANDLE_CREATE",
        };
        this.props.dispatch(action);
    };
    updateSubmit = (e) => {
        e.preventDefault();
        let { id, value, student } = this.props;
        let dataType = e.target.getAttribute("data-type");
        const action = {
            type: "HANDLE_UPDATE_SUBMIT",
            payload: {
                id: id,
                value: value,
                dataType: dataType,
                student: student,
                studentId: student.studentId,
            },
        };
        this.props.dispatch(action);
        document.getElementById("studentId").disabled = false;
        document.getElementById("update_btn").style.display = "none";
        document.getElementById("create_btn").style.display = "block"
    };

    render() {
        let { err, student } = this.props;
        return (
            <form onSubmit={this.createStudent}>
                <div className='card '>
                    <h2 className='card-header text-white bg-dark'>Thông Tin Sinh Viên</h2>
                    <div className="row">
                        <div className="col-6" style={{
                            padding: '1rem 2rem'
                        }}>
                            <div className='mt-3'>
                                <label className='form-label'>Mã SV</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Nhập Mã Sinh Viên'
                                    id='studentId'
                                    data-type='studentId'
                                    onChange={this.getInfo}
                                    value={student.studentId}
                                />
                                <span className="text-danger" style={{ fontSize: 14 }}>
                                    {err.studentId}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>Số Điện Thoại</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Nhập Số Điện Thoại'
                                    id='phone'
                                    data-type='phone'
                                    onChange={this.getInfo}
                                    value={student.phone}
                                />
                                <span className="text-danger" style={{ fontSize: 14 }}>
                                    {err.phone}
                                </span>
                            </div>

                        </div>
                        <div className="col-6" style={{
                            padding: '1rem 2rem'
                        }}>

                            <div className='mt-3'>
                                <label className='form-label' >Họ Tên</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Nhập Họ Tên'
                                    id='studentName'
                                    data-type='studentName'
                                    onChange={this.getInfo}
                                    value={student.studentName}
                                />
                                <span className="text-danger" style={{ fontSize: 14 }}>
                                    {err.studentName}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>Email</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Nhập Email'
                                    id='email'
                                    data-type='email'
                                    onChange={this.getInfo}
                                    value={student.email}
                                />
                                <span className="text-danger" style={{ fontSize: 14 }}>
                                    {err.email}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2" style={{
                            padding: '0 2rem 1rem '
                        }}>
                            <button
                                id='create_btn'
                                onClick={this.createStudent}
                                className='btn btn-success'>Thêm Sinh Viên</button>
                            <button
                                id='update_btn'
                                className='btn btn-success'
                                onClick={this.updateSubmit}
                                style={{ display: 'none' }}
                            >Cập Nhập</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        err: rootReducer.formReducer.validErr,
        student: rootReducer.formReducer.student,
    }
}

export default connect(mapStateToProps)(FormRegister);
