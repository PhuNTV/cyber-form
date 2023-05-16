import React, { Component } from 'react';
import { connect } from 'react-redux'
class TableStudent extends Component {
    renderStudentInfo = () => {
        let { studentInfo, searchList, searchInp } = this.props;
        if (!searchList.length) {
            if (searchInp !== "") {
                return (
                    <tr className="text-center">
                        <td colSpan={5}>Không có kết quả phù hợp!</td>
                    </tr>
                );
            }
            console.log("dssv", studentInfo);
            return studentInfo.map((student, index) => {
                return (
                    <tr key={index}>
                        <td>{student.studentId}</td>
                        <td>{student.studentName}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button
                                className="btn btn-danger mx-2"
                                onClick={() => {
                                    const action = {
                                        type: "HANDLE_DELETE",
                                        payload: {
                                            student: student,
                                            studentId: student.studentId,
                                        },
                                    };
                                    this.props.dispatch(action);
                                }}
                            >
                                Xóa
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    document.getElementById("studentId").disabled = true;
                                    document.getElementById("create_btn").style.display = "none";
                                    document.getElementById("update_btn").style.display = "block";

                                    const action = {
                                        type: "HANDLE_UPDATE_RENDER",
                                        payload: {
                                            student: student,
                                            studentId: student.studentId,
                                        },
                                    };
                                    this.props.dispatch(action);
                                    this.setState({ isUpdating: true });
                                }}
                            >
                                Sửa
                            </button>
                        </td>
                    </tr>
                );
            });
        } else {
            console.log("searchlist", searchList);
            return searchList.map((student, index) => {
                return (
                    <tr key={index}>
                        <td>{student.studentId}</td>
                        <td>{student.studentId}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button
                                className="btn btn-danger mx-2"
                                onClick={() => {
                                    const action = {
                                        type: "HANDLE_DELETE",
                                        payload: {
                                            student: student,
                                            studentId: student.studentId,
                                        },
                                    };
                                    this.props.dispatch(action);
                                }}
                            >
                                Xóa
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    document.getElementById("studentId").disabled = true;
                                    document.getElementById("create_btn").style.display = "none";
                                    document.getElementById("update_btn").style.display = "block";
                                    const action = {
                                        type: "HANDLE_UPDATE_RENDER",
                                        payload: {
                                            student: student,
                                            studentId: student.studentId,
                                        },
                                    };
                                    this.props.dispatch(action);
                                }}
                            >
                                Sửa
                            </button>
                        </td>
                    </tr>
                );
            });
        }
    };

    render() {
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
                    {this.renderStudentInfo()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (rootReducer) => ({
    studentInfo: rootReducer.formReducer.studentList,
    searchList: rootReducer.formReducer.searchList,
    searchInp: rootReducer.formReducer.searchInp,
});
export default connect(mapStateToProps)(TableStudent);
