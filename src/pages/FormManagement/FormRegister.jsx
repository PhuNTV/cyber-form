import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from './Modal';
class FormRegister extends Component {
    state = {
        value: {
            id: '',
            studentName: '',
            phone: '',
            email: '',
        },
        error: {
            id: '',
            studentName: '',
            phone: '',
            email: '',
        },
        modal: {
            isOpen: false,
            message: '',
        }
    };
    handleOnchange = (event) => {
        const { id, name, value } = event.target;
        // console.log({ id, name, className, value });
        const newValue = { ...this.state.value };

        newValue[id] = value;

        const newError = { ...this.state.error };

        let messError = '';
        if (value === '') {
            messError = name + ' không được bỏ trống'
        }

        if (id === 'email') {
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

            if (regexEmail.test(value) === false) {

                messError = 'Email Không Hợp Lệ.';
            }
        }

        newError[id] = messError;
        this.setState(
            {
                value: newValue,
                error: newError,
            },
            () => {
                // console.log(this.state)
            });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        for (let keyValue in this.state.value) {
            if (this.state.value[keyValue] === '') {
                this.setState({
                    modal: {
                        isOpen: true,
                        message: 'Bạn nhập chưa đủ dữ liệu',
                    },
                });
                return;
            }
        };
        for (let keyError in this.state.error) {
            if (this.state.error[keyError] !== '') {
                this.setState({
                    modal: {
                        isOpen: true,
                        message: this.state.error[keyError],
                    },
                });
                return;
            }
        }
        console.log('[SUBMIT]', this.state.value)

        const action = {
            type: 'ADD_STUDENT',
            payload: this.state.value,
        };

        this.props.dispatch(action);
    }

    hanleCloseModal = () => {
        this.setState({
            modal: {
                isOpen: false,
                message: '',
            },
        });
    }


    render() {
        const { id, studentName, phone, email } = this.props.studentEdit;
        return (
            <form onSubmit={this.handleSubmit}>
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
                                    id='id'
                                    name='Mã sinh viên'
                                    onChange={this.handleOnchange}
                                    value={id}
                                />
                                <p className='text-danger'>{this.state.error.id}</p>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>Số Điện Thoại</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Nhập Số Điện Thoại'
                                    id='phone'
                                    name='Số điện thoại'
                                    onChange={this.handleOnchange}
                                    value={phone}
                                />
                                <p className='text-danger'>{this.state.error.phone}</p>
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
                                    name='Họ tên'
                                    onChange={this.handleOnchange}
                                    value={studentName}
                                />
                                <p className='text-danger'>{this.state.error.studentName}</p>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>Email</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Nhập Email'
                                    id='email'
                                    name='Email'
                                    onChange={this.handleOnchange}
                                    value={email}
                                />
                                <p className='text-danger'>{this.state.error.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2" style={{
                            padding: '0 2rem 1rem '
                        }}>
                            <button className='btn btn-success'>Thêm Sinh Viên</button>
                        </div>
                    </div>
                </div>
                {this.state.modal.isOpen && <Modal
                    hanleCloseModal={this.hanleCloseModal}
                    message={this.state.modal.message} />}

            </form>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        studentEdit: rootReducer.formReducer.studentEdit,
    }
}

export default connect(mapStateToProps)(FormRegister);
