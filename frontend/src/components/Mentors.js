import React, {useEffect, useState} from 'react';
import { Card, Row, Col, Table, Button } from 'antd'

export default function Mentors() {
    const columns = [
        { title: "Name", dataIndex: "name" },
        { title: "Topic", dataIndex: 'topic' },
        {
            title: "Action", dataIndex: "_id", render: (id, record) => {
                return (
                    <React.Fragment>
                        <Button key="delete">Delete</Button>
                        <Button key="view">Tasks</Button>
                    </React.Fragment>
                )
            }
        }
    ];

    return (
        <Row>
            <Col lg={24}>
                <Card title="Mentor List">
                    <Table
                        rowKey="_id"
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}