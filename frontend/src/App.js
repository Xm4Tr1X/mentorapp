import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Mentors from './components/Mentors';


const { Header, Content } = Layout;


function App() {
  return (
    <Layout>
      <Header>Mentors</Header>
      <Content><Mentors /></Content>
    </Layout>
  );
}

export default App;
