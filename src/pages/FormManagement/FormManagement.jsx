import React, { Component } from 'react';
import FormRegister from './FormRegister';
import TableStudent from './TableStudent';
import Search from './Search';
import { connect } from 'react-redux';
class FormManagement extends Component {

    render() {

        return (
            <div className='container'>

                <FormRegister />
                <Search />
                <TableStudent />
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => ({})

export default connect(mapStateToProps)(FormManagement);
