import React from 'react';
import { jsonServerRestClient, Admin, Resource,Delete } from 'admin-on-rest';

import { ProductList,ProductEdit,ProductCreate } from './product/products';
import { ClinicProductList,ClinicProductEdit,ClinicProductCreate } from './clinic-product/clinic-products';
import { DoctorList,DoctorEdit,DoctorCreate } from './doctor/doctors';
import { DoctorTimesheetList,DoctorTimesheetEdit,DoctorTimesheetCreate } from './doctor-timesheet/doctor-timesheets';
import { EmployeeList,EmployeeEdit,EmployeeCreate } from './employee/employees';
import { EmployeeTimesheetList,EmployeeTimesheetEdit,EmployeeTimesheetCreate } from './employee-timesheet/employee-timesheets';
import { ClinicRecordList,ClinicRecordEdit,ClinicRecordCreate } from './clinic-record/clinic-records';
import { CustomerList,CustomerEdit,CustomerCreate } from './customer/customers';
import AssessmentIcon from 'material-ui/svg-icons/action/assessment';
import BookIcon from 'material-ui/svg-icons/action/book';
import ExtensionIcon from 'material-ui/svg-icons/action/extension';
import StoreIcon from 'material-ui/svg-icons/action/store';
import DoctorIcon from 'material-ui/svg-icons/action/perm-identity';
import FaceIcon from 'material-ui/svg-icons/action/face';
import GroupIcon from 'material-ui/svg-icons/social/group';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {orange500, orange700, darkBlack } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette:{
        primary1Color: orange500,
        primary2Color: orange700,
        textColor: darkBlack
    }
    });

const App = () => (
    <Admin theme={muiTheme} title="PERFEX" restClient={jsonServerRestClient('http://localhost:8080')}>
        <Resource options={{label:'รายการให้บริการ'}} name="clinic-records" list={ClinicRecordList} edit={ClinicRecordEdit} create={ClinicRecordCreate} remove={Delete} icon={AssessmentIcon}/>
        <Resource options={{label:'ลูกค้า'}} name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} remove={Delete} icon={FaceIcon}/>
        <Resource options={{label:'เวลาเข้างานแพทย์'}} name="doctor-timesheets" list={DoctorTimesheetList} edit={DoctorTimesheetEdit} create={DoctorTimesheetCreate} remove={Delete} icon={BookIcon}/>
        <Resource options={{label:'เวลาเข้างานพนักงาน'}} name="employee-timesheets" list={EmployeeTimesheetList} edit={EmployeeTimesheetEdit} create={EmployeeTimesheetCreate} remove={Delete} icon={BookIcon}/>
        <Resource options={{label:'บริการ'}} name="clinic-products" list={ClinicProductList} edit={ClinicProductEdit} create={ClinicProductCreate} remove={Delete} icon={StoreIcon}/>
        <Resource options={{label:'สินค้า'}} name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} remove={Delete} icon={ExtensionIcon}/>
        <Resource options={{label:'แพทย์'}} name="doctors" list={DoctorList} edit={DoctorEdit} create={DoctorCreate} remove={Delete} icon={DoctorIcon}/>
        <Resource options={{label:'พนักงาน'}} name="employees" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} remove={Delete} icon={GroupIcon}/>
    </Admin>
);



export default App;