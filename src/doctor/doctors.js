import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton,
    LongTextInput, required,
    SimpleForm, TextInput, 
    NumberField,DisabledInput,Filter
     } from 'admin-on-rest';

     const DoctorFilter = (props) => (
        <Filter {...props}>
            <TextInput label="ค้นหา" source="q" alwaysOn />
        </Filter>
    );

export const DoctorList = (props) => (
    <List title="ข้อมูลแพทย์" {...props} filters={<DoctorFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่"/>
            <TextField source="name" label="ชื่อ"/>
            <NumberField source="hourRate" label="อัตราค่าแรง"/>
            <NumberField source="dtRate" label="อัตราค่า Df."/>
            <TextField source="phone" label="โทรสัพท์"/>
            <TextField source="email" label="อีเมล"/>
            <TextField source="info" label="ข้อมูลเพิ่มเติม"/>
            <EditButton />
        </Datagrid>
    </List>
);

const DoctorTitle = ({ record }) => {
    return <span>ข้อมูลแพทย์ {record ? `"${record.name}"` : ''}</span>;
};

export const DoctorEdit = (props) => (
    <Edit title={<DoctorTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ค้นหา"/>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <NumberInput source="hourRate" validate={required} label="อัตราค่าแรง"/>
            <NumberInput source="dtRate" validate={required} label="อัตราค่า Df."/>
            <TextInput source="phone" label="โทรสัพท์"/>
            <TextInput source="email" label="อีเมล"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const DoctorCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <NumberInput source="hourRate" validate={required} label="อัตราค่าแรง"/>
            <NumberInput source="dtRate" validate={required} label="อัตราค่า Df."/>
            <TextInput source="phone" label="โทรสัพท์"/>
            <TextInput source="email" label="อีเมล"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);