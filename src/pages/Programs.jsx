import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { CardEntities } from '../components'
import { Header } from '../components';

const Programs = () => {
    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return ( 
        <div className = "m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:" >
            <Header category = "Página" title = "Programas de Formación" />
            <CardEntities />
        </div>
    )
}

export default Programs