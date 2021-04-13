const getPhotosList = (callback) => ({
    type: 'API',
    payload: {
        baseURL: 'https://picsum.photos/v2/list',
        url: '',
        method: 'GET',
        afterSuccess: (data) => callback(data)
    }
})

export const generalActions = {
    getPhotosList
};