import React from 'react';
import {  
    List, Edit, Create, 
    Datagrid, NumberInput,
    TextField, EditButton, DisabledInput, 
    LongTextInput, required,
    SimpleForm, ReferenceInput,Filter,
    NumberField,SelectInput,ReferenceField
     } from 'admin-on-rest';

     const DoctorTimesheetFilter = (props) => (
        <Filter {...props}>
            <ReferenceInput label="แพทย์" source="doctorId" reference="doctors">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );

export const DoctorTimesheetList = (props) => (
    <List title="ข้อมูลการทำงานแพทย์" {...props} filters={<DoctorTimesheetFilter />}>
        <Datagrid>
            <TextField source="id" label="ลำดับที่"/>
            <ReferenceField label="แพทย์" source="doctorId" reference="doctors">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="checkIn" label="เวลาเข้างาน"/>
            <TextField source="checkOut" label="เวลาออกงาน"/>
            <NumberField label="ค่า Df." source="calculatedDt"/>
            <NumberField label="ค่าแรง" source="calculatedHour" />
            <NumberField source="additional" label="เบิกจ่าย"/>
            <NumberField source="total" label="รวม"/>
            <TextField source="info" label="ข้อมูลเพิ่มเติม"/>
            <TextField source="status" label="สถานะ"/>
            <EditButton />
        </Datagrid>
    </List>
);

const DoctorTimesheetTitle = ({ record }) => {
    return <span>ข้อมูลแพทย์ Timesheet{record ? `"${record.doctorId}"` : ''} </span>;
};

export const DoctorTimesheetEdit = (props) => (
    <Edit title={<DoctorTimesheetTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ลำดับที่"/>
            <SelectInput source="status" choices={[
                { id: 'CHECKIN', name: 'CHECKIN' },
                { id: 'CHECKOUT', name: 'CHECKOUT' }
                ]} validate={required} label="สะถานะ"/>
            <NumberInput source="additional" label="เบิกจ่าย"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Edit>
);

export const DoctorTimesheetCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Doctor" source="doctorId" reference="doctors" validate={required}>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <DisabledInput source="status" defaultValue="CHECKIN" label="สถานะ"/>
            <LongTextInput source="info" label="ข้อมูลเพิ่มเติม"/>
        </SimpleForm>
    </Create>
);