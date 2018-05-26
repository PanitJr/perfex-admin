import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton, DisabledInput, 
    LongTextInput, required,ReferenceField,
    SimpleForm, ReferenceInput,
    NumberField,SelectInput,Filter
     } from 'admin-on-rest';

     const EmployeeTimesheetFilter = (props) => (
        <Filter {...props}>
            <ReferenceInput label="พนักงาน" source="employeeId" reference="employees">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );

export const EmployeeTimesheetList = (props) => (
    <List title="ข้อมูลการทำงานพนักงาน" {...props} filters={<EmployeeTimesheetFilter />}>
        <Datagrid>
            <TextField source="id" label="ค้นหา"/>
            <ReferenceField label="พนักงาน" source="employeeId" reference="employees">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="checkIn" label="เวลาเข้างาน"/>
            <TextField source="checkOut" label="เวลาออกงาน"/>
            <NumberField source="calculatedHour" label="ค่าแรง"/>
            <NumberField source="additional" label="เบิกจ่าย"/>
            <NumberField source="total" label="รวม"/>
            <TextField source="info" label="ข้อมูลเพิ่มเติม"/>
            <TextField source="status" label="สถานะ"/>
            <EditButton />
        </Datagrid>
    </List>
);

const EmployeeTimesheetTitle = ({ record }) => {
    return <span>ข้อมูลพนักงาน Timesheet{record ? `"${record.employeeId}"` : ''} </span>;
};

export const EmployeeTimesheetEdit = (props) => (
    <Edit title={<EmployeeTimesheetTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ลำดับที่"/>
            <SelectInput source="status" choices={[
                { id: 'CHECKIN', name: 'CHECKIN' },
                { id: 'CHECKOUT', name: 'CHECKOUT' }
                ]} validate={required} label="สถานะ"/>
            <NumberInput source="additional" label="เบิกจ่าย"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const EmployeeTimesheetCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="พนักงาน" source="employeeId" reference="employees" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DisabledInput source="status" defaultValue="CHECKIN" label="สถานะ"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);