import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton, 
    LongTextInput, required,
    SimpleForm, TextInput, 
    NumberField,DisabledInput,Filter
     } from 'admin-on-rest';

    const EmployeeFilter = (props) => (
        <Filter {...props}>
            <TextInput label="ค้นหา" source="q" alwaysOn />
        </Filter>
    );
    
export const EmployeeList = (props) => (
    <List title="ข้อมูลพนักงาน" {...props} filters={<EmployeeFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่"/>
            <TextField source="name" label="ชื่อ"/>
            <NumberField source="hourRate" label="อัตราจ้าง"/>
            <TextField source="phone" label="เบอร์โทร"/>
            <TextField source="email" label="อีเมล"/>
            <TextField source="info" label="ข้อมูลเพิ่มเติม"/>
            <EditButton />
        </Datagrid>
    </List>
);

const EmployeeTitle = ({ record }) => {
    return <span>พนักงาน {record ? `"${record.name}"` : ''}</span>;
};

export const EmployeeEdit = (props) => (
    <Edit title={<EmployeeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ลำดับที่"/>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <NumberInput source="hourRate" validate={required} label="อัตราจ้าง"/>
            <TextInput source="phone" label="เบอร์โทร"/>
            <TextInput source="email" label="อีเมล"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const EmployeeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="name" validate={required} label="ชื่อ"/>
            <NumberInput source="hourRate" validate={required} label="อัตราจ้าง"/>
            <TextInput source="phone" label="เบอร์โทร"/>
            <TextInput source="email" label="อีเมล"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);