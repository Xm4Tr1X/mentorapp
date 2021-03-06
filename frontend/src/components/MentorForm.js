import React from 'react'
import { Form, Input, Button } from 'antd';
import {addMentor, fetchMentors, updateMentor} from '../actions/mentors'

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const MentorForm = (props) => {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form
    const nameError = isFieldTouched('name') && getFieldError('name');
    const topicError = isFieldTouched('topic') && getFieldError('topic');

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.formData.id ===0 ?
                addMentor(values).then(() => fetchMentors(props.setTableData))
                : updateMentor(values, props.formData.id ).then(async () => {
                    props.setFormData(props.initialFormState);
                    await fetchMentors(props.setTableData);
                });
                props.setMentorFormDrawer(false);
            }
        });
    };
    return (
        <Form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input mentor\'s name!' }],
                    initialValue: props.formData.name
                })(
                    <Input
                        type="text"
                        placeholder="Mentor Name"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={topicError ? 'error' : ''} help={topicError || ''}>
                {getFieldDecorator('topic', {
                    rules: [{ required: true, message: 'Please enter topic!' }],
                    initialValue: props.formData.topic
                })(
                    <Input
                        type="text"
                        placeholder="Topic"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};


const WrappedForm = Form.create({ name: 'mentor-form' })(MentorForm);

export default function (props) {

    return <WrappedForm {...props} />
}