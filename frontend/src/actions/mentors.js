import backend from '../Api'

export const fetchMentors = async (setTableData) => {
    try {
        const response = await backend.get('/mentors');
        setTableData(response.data);
    } catch (e) {
        console.error('Error occurred fetching new data', e.message);
    }
};

export const addMentor = async ({name, topic}) => {
    try {
        await backend.post('/mentors', {
            name,
            topic
        })
    } catch (e) {
        console.error(e.message);
    }
}

export const deleteMentor = async (id) => {
    try {
        await backend.delete('/mentors/' + id);
    } catch (e) {
        console.error('Error occurred' + e.message);
    }
}

export const editMentor = async (id) => {
    try {
        const response = await backend.get('/mentors/' + id);
        return {id: response.data._id, name: response.data.name, topic: response.data.topic};
    } catch (e) {
        console.error('Error occurred' + e.message);
    }
};

export const updateMentor = async ({name, topic}, id) => {
    try {
        const response = await backend.put('/mentors/' + id, {name, topic});
        return response.data;
    } catch (e) {
        console.error('Error occurred =>', e.message());
    }
};