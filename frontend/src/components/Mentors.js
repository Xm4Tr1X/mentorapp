import React, {useEffect, useState} from 'react';
import {Card, Row, Col, Table, Button, Drawer, Divider} from 'antd'
import {fetchMentors, deleteMentor, editMentor} from '../actions/mentors'
import MentorForm from './MentorForm'


export default function Mentors() {
    const initialFormState = {name: '', topic: '', id: 0};
    const [tasksDrawer, setTasksDrawer] = useState(false);
    const [mentorFormDrawer, setMentorFormDrawer] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "Topic", dataIndex: 'topic'},
        {
            title: "Actions", dataIndex: "_id", render: (id) => {
                return (
                    <React.Fragment>
                        <a key="edit" onClick={(e) => handleEdit(e, id)}> Edit </a>
                        <Divider type="vertical"/>
                        <a key="delete" onClick={(e) => handleDelete(e, id)}>Delete</a>
                        <Divider type="vertical"/>
                        <a key="view">Tasks</a>
                    </React.Fragment>
                )
            }
        }
    ];
    useEffect(() => {
        fetchMentors(setTableData).catch(e => console.log(e.message));
    }, []);

    const handleDelete = (e, id) => {
        e.preventDefault();
        deleteMentor(id).then(() => fetchMentors(setTableData));
    };
    const handleEdit = async (e, id) => {
        e.preventDefault();
        const data = await editMentor(id);
        console.log('Data =>', data);
        setFormData(data);
        setMentorFormDrawer(true);
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={24}>
                    <Card title="Mentor List">
                        <Button onClick={() => setMentorFormDrawer(true)}>Add new</Button>
                        <Table
                            rowKey="_id"
                            columns={columns}
                            dataSource={tableData}
                        />
                    </Card>
                </Col>
            </Row>
            <Drawer
                destroyOnClose={true}
                key="mentors" title="Mentor Form"
                visible={mentorFormDrawer}
                onClose={() => setMentorFormDrawer(false)}>
                <MentorForm initialFormState={initialFormState} formData={formData} setFormData={setFormData}
                            setMentorFormDrawer={setMentorFormDrawer} tableData={tableData}
                            setTableData={setTableData}/>
            </Drawer>
            <Drawer
                key="tasks" title="Tasks Form"
                visible={tasksDrawer}
                onClose={() => setTasksDrawer(false)}>

            </Drawer>
        </React.Fragment>
    );
}