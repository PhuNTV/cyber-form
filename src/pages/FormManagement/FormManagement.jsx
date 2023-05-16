import React, { Component } from 'react';
import FormRegister from './FormRegister';
import TableStudent from './TableStudent';
import Search from './Search';
import { connect } from 'react-redux';
class FormManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddStudentButton: true
        };
    }

    handleEditButtonClick = () => {
        this.setState({ showAddStudentButton: false });
    };
    render() {
        const { showAddStudentButton } = this.state;
        return (
            <div className='container'>

                <FormRegister showAddStudentButton={showAddStudentButton} />
                <Search />
                <TableStudent onEdit={this.handleEditButtonClick} />
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => ({})

export default connect(mapStateToProps)(FormManagement);
