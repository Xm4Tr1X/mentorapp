import backend from '../Api'


export const fetchTasks = async (id) => {
    try {
        const response = await backend.get('/tasks/' + id);
        // setTableData(response.data);
        return response.data;
    } catch (e) {
        console.error('Error occurred fetching new data', e.message);
        return [];
    }
};

export const saveTasks = async (id, body) => {
    try {
        await backend.post('/tasks/' + id, body);
    } catch (e) {
        console.error(e.message);
    }
}