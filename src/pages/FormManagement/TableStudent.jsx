import React, { Component } from 'react';
import { connect } from 'react-redux'
class TableStudent extends Component {
    handleEditStudent = (student) => {
        this.props.dispatch({
            type: 'EDIT_STUDENT',
            payload: student,
        });
    }
    render() {
        console.log(this.props)
        return (
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.studentArray.map((student) => {
                        console.log(student)
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button
                                        className='btn btn-primary mx-2'
                                        onClick={() => { this.handleEditStudent(student) }}
                                    >Sửa</button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {
                                            const action = {
                                                type: 'DELETE_STUDENT',
                                                payload: student.id,
                                            };

                                            this.props.dispatch(action);
                                        }}
                                    >Xóa</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    console.log(rootReducer);
    return {
        studentArray: rootReducer.formReducer.studentArray,
    }
}

export default connect(mapStateToProps)(TableStudent);
