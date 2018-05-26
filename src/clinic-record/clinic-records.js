import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton, DisabledInput, 
    required,ReferenceField,AutocompleteInput,
    SimpleForm, ReferenceInput,
    NumberField,SelectInput,Filter
    } from 'admin-on-rest';

     const ClinicRecordFilter = (props) => (
        <Filter {...props}>
            <ReferenceInput label="ลูกค้า" source="customerId" reference="customers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="บริการ" source="clinicProductId" reference="clinic-products">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="พนักงาน" source="employeeId" reference="employees">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="แพทย์" source="doctorId" reference="doctors">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );

export const ClinicRecordList = (props) => (
    <List title="ข้อมูลการให้บริการ" {...props} filters={<ClinicRecordFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่" />
            <ReferenceField label="ลูกค้า" source="customerId" reference="customers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="บริการ" source="clinicProductId" reference="clinic-products">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="พนักงาน" source="employeeId" reference="employees">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="แพทย์" source="doctorId" reference="doctors">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="price" label="ราคา"/>
            <NumberField source="discount" label="ส่วนลด"/>
            <NumberField source="paid" label="จ่าย"/>
            <NumberField source="left" label="ค้างชำระ"/>
            <TextField source="lastUpdate" label="อัพเดทล่าสุด"/>
            <EditButton />
        </Datagrid>
    </List>
);

const ClinicRecordTitle = ({ record }) => {
    return <span>รายการให้บริการ {record ? `"${record.customerId} ${record.clinicProductId}"` : ''}</span>;
};

export const ClinicRecordEdit = (props) => (
    <Edit title={<ClinicRecordTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ราคา"/>
            <ReferenceInput label="Customer" source="customerId" reference="customers" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Clinic Product" source="clinicProductId" reference="clinic-products" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Staff" source="employeeId" reference="employees">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Doctor" source="doctorId" reference="doctors">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="price" validate={required} label="ราคา"/>
            <NumberInput source="discount" validate={required} label="ส่วนลด"/>
            <NumberInput source="paid" validate={required} label="ชำระแล้ว"/>
            <NumberInput source="left" validate={required} label="ค้างชำระ"/>
        </SimpleForm>
    </Edit>
);

export const ClinicRecordCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Customer" source="customerId" reference="customers" validate={required}>
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Clinic Product" source="clinicProductId" reference="clinic-products" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Staff" source="employeeId" reference="employees">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Doctor" source="doctorId" reference="doctors">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="price" validate={required} label="ราคา"/>
            <NumberInput source="discount" validate={required} label="ส่วนลด"/>
            <NumberInput source="paid" validate={required} label="ชำระแล้ว"/>
            <NumberInput source="left" validate={required} label="ค้างชำระ"/>
        </SimpleForm>
    </Create>
);