const stateDefault = {
    studentArray: [
        {
            id: 1,
            studentName: 'Nguyễn Văn A',
            phone: '0123456789',
            email: 'nguyenvan@gmail.com',
        },
        {
            id: 2,
            studentName: 'Nguyễn Văn B',
            phone: '0987654321',
            email: 'nguyenB@gmail.com',
        },
    ],
    studentAdd: {

    },
    studentEdit: {

    },
}

export const formReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            {
                state.studentArray = [...state.studentArray, action.payload]
                return { ...state };
            }
        case 'DELETE_STUDENT':
            {
                const newStudentArray = state.studentArray.filter((student) =>
                    student.id !== action.payload
                );
                state.studentArray = newStudentArray;
                return { ...state };
            }
        case 'EDIT_STUDENT':
            {
                state.studentEdit = action.payload;
                return { ...state };
            }

        default:
            return state;
    }
}