import React, { Component } from 'react';
import FormRegister from './FormRegister';
import TableStudent from './TableStudent';
class FormManagement extends Component {
    render() {
        return (
            <div className='container'>
                <FormRegister />
                <TableStudent />
            </div>
        );
    }
}

export default FormManagement;
