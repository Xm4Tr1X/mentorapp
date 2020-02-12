import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Table, Button, Drawer, Divider } from 'antd'
import { fetchMentors, deleteMentor, editMentor } from '../actions/mentors'
import MentorForm from './MentorForm'


export default function Mentors() {
    const [tasksDrawer, setTasksDrawer] = useState(false);
    const [mentorFormDrawer, setMentorFormDrawer] = useState(false);
    const [tableData, setTableData] = useState([]);
    const columns = [
        { title: "Name", dataIndex: "name" },
        { title: "Topic", dataIndex: 'topic' },
        {
            title: "Actions", dataIndex: "_id", render: (id, record) => {
                return (
                    <React.Fragment>
                        <a key="edit" onClick={(e) => handleAction(e, id, editMentor)}> Edit </a>
                        <Divider type="vertical" />
                        <a key="delete" onClick={(e) => handleAction(e, id, deleteMentor)}>Delete</a>
                        <Divider type="vertical" />
                        <a key="view">Tasks</a>
                    </React.Fragment>
                )
            }
        }
    ];
    useEffect(() => {
        fetchMentors(setTableData);
    }, []);

    const handleAction = (e, id, action) => {
        e.preventDefault();
        action(id).then(() => fetchMentors(setTableData));
    }
    return (
        <React.Fragment>
            <Row>
                <Col lg={24}></Col>
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
                <MentorForm setMentorFormDrawer={setMentorFormDrawer} tableData={tableData} setTableData={setTableData} />
            </Drawer>
            <Drawer
                key="tasks" title="Tasks Form"
                visible={tasksDrawer}
                onClose={() => setTasksDrawer(false)}>

            </Drawer>
        </React.Fragment>
    );
}