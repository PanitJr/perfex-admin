import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton,
    LongTextInput, required,
    SimpleForm, TextInput, SelectInput,
    NumberField,DisabledInput,Filter
     } from 'admin-on-rest';

     const ClinicProductFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
        </Filter>
    );

export const ClinicProductList = (props) => (
    <List title="ข้อมูลบริการ" {...props} filters={<ClinicProductFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่"/>
            <TextField source="name" label="ชื่อ"/>
            <NumberField source="price" label="ราคา"/>
            <TextField source="status" label="สถานะ"/>
            <TextField source="info" label="ข้อมูลเพิ่มเติม"/>
            <EditButton />
        </Datagrid>
    </List>
);

const ClinicProductTitle = ({ record }) => {
    return <span>บริการ {record ? `"${record.name}"` : ''}</span>;
};

export const ClinicProductEdit = (props) => (
    <Edit title={<ClinicProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ลำดับที่"/>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <NumberInput source="price" validate={required} label="ราคา"/>
            <SelectInput source="status" choices={[
                { id: 'AVAILABLE', name: 'AVAILABLE' },
                { id: 'RUNNING LOW', name: 'RUNNING LOW' }
                ]} validate={required} label="สถานะ"/>
            <LongTextInput source="relatedProducts" validate={required} label="สินค้าที่เกี่ยวข้อง"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const ClinicProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <NumberInput source="price" validate={required} label="ราคา"/>
            <SelectInput source="status" choices={[
                { id: 'AVAILABLE', name: 'AVAILABLE' },
                { id: 'RUNNING LOW', name: 'RUNNING LOW' }
                ]} validate={required} label="สถานะ"/>
            <LongTextInput source="relatedProducts" validate={required} defaultValue="[{&quot;product_id&quot;:2,&quot;amount&quot;:1}]" label="สินค้าที่เกี่ยวข้อง"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);