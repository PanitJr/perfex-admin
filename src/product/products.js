import React from 'react';
import { 
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton, DisabledInput, 
    LongTextInput, required,
    SimpleForm, TextInput, Filter,
    NumberField,SelectInput
    } from 'admin-on-rest';

    const ProductFilter = (props) => (
        <Filter {...props}>
            <TextInput label="ค้นหา" source="q" alwaysOn />
        </Filter>
    );

export const ProductList = (props) => (
<List title="ข้อมูลสินค้า" {...props} filters={<ProductFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่"/>
            <TextField source="name" label="ชื่อ"/>
            <TextField source="category" label="ประเภท"/>
            <TextField source="brand" label="ยี่ห้อ"/>
            <TextField source="amount" label="จำนวน"/>
            <TextField source="unit" label="หย่วย"/>
            <NumberField source="price" label="ราคา"/>
            <TextField source="lastUpdate" label="อัพเดทล่าสุด"/>
            <EditButton />
        </Datagrid>
    </List>
);

const ProductTitle = ({ record }) => {
    return <span>สิ้นค้า {record ? `"${record.name}"` : ''}</span>;
};

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ลำดับที่"/>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <SelectInput source="category" choices={[
                { id: 'BOTOX', name: 'BOTOX' },
                { id: 'FILLER', name: 'FILLER' },
                { id: 'OTHERS', name: 'OTHERS' },
                ]} validate={required} label="ประเภท"/>
            <TextInput source="brand" label="ยี่ห้อ"/>
            <NumberInput source="amount" validate={required} label="จำนวน"/>
            <NumberInput source="price" validate={required} label="ราคา"/>
            <TextInput source="unit" validate={required} label="หน่วย"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required} label="ชื่อ"/>
            <SelectInput source="category" choices={[
                { id: 'BOTOX', name: 'BOTOX' },
                { id: 'FILLER', name: 'FILLER' },
                { id: 'OTHERS', name: 'OTHERS' },
                ]} validate={required} label="ประเภท"/>
            <TextInput source="brand" label="ยี่ห้อ"/>
            <NumberInput source="amount" validate={required} label="จำนวน"/>
            <NumberInput source="price" validate={required} label="ราคา"/>
            <TextInput source="unit" validate={required} label="หน่วย"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);