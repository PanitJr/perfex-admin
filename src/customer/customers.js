import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, EditButton,
    TextField, DisabledInput, 
    LongTextInput, required,
    SimpleForm, TextInput, 
    SelectInput,DateInput,Filter
     } from 'admin-on-rest';

     const CustomerFilter = (props) => (
        <Filter {...props}>
            <TextInput label="ค้นหา" source="q" alwaysOn />
        </Filter>
    );

export const CustomerList = (props) => (
    <List title="ข้อมูลการทำงานแพทย์" {...props} filters={<CustomerFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่"/>
            <TextField source="name" label="ชื่อ"/>
            <TextField source="gender" label="เพศ"/>
            <TextField source="type" label="ระดับ"/>
            <TextField source="nationalId" label="ระหัสประจำตัวประชาชน"/>
            <TextField source="phone" label="โทรศัพท์"/>
            <TextField source="email" label="อีเมล"/>
            <TextField source="dateOfBirth" label="วัน-เดือน-ปี เกิด"/>
            <TextField source="joinDate" label="วันที่เข้ารับบริการ"/>
            <TextField source="lastUpdate" label="วันที่ใช้บริการล่าสุด"/>
            <TextField source="info" label="ข้อมูลเพิ่มเติม"/>
            <EditButton />
        </Datagrid>
    </List>
);

const CustomerTitle = ({ record }) => {
    return <span>ลูกค้า {record ? `"${record.name}"` : ''}</span>;
};

export const CustomerEdit = (props) => (
    <Edit title={<CustomerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ลำดับที่"/>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <SelectInput source="gender" choices={[
                { id: 'ชาย', name: 'ชาย' },
                { id: 'หญิง', name: 'หญิง' }
                ]} validate={required} label="เพศ"/>
            <SelectInput source="type" choices={[
                { id: 'NORMAL', name: 'NORMAL' },
                { id: 'PLATINUM', name: 'PLATINUM' }
                ]} validate={required} label="ระดับ"/>
            <TextInput source="nationalId" validate={required} label="ระหัสประจำตัวประชาชน"/>
            <TextInput source="phone" validate={required} label="โทรศัพท์"/>
            <TextInput source="email" label="อีเมล"/>
            <DateInput source="dateOfBirth" label="วัน-เดือน-ปี เกิด"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="name" validate={required} label="ชื่อ"/>
            <SelectInput source="gender" choices={[
                { id: 'ชาย', name: 'ชาย' },
                { id: 'หญิง', name: 'หญิง' }
                ]} validate={required} label="เพศ"/>
            <SelectInput source="type" choices={[
                { id: 'NORMAL', name: 'NORMAL' },
                { id: 'PLATINUM', name: 'PLATINUM' }
                ]} validate={required} label="ระดับ"/>
            <TextInput source="nationalId" validate={required} label="ระหัสประจำตัวประชาชน"/>
            <TextInput source="phone" validate={required} label="โทรศัพท์"/>
            <TextInput source="email" label="อีเมล"/>
            <DateInput source="dateOfBirth" label="วัน-เดือน-ปี เกิด"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);