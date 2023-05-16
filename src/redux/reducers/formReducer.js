const stateDefault = {
    student: {
        studentId: "",
        studentName: "",
        phone: "",
        email: "",
    },
    studentList: [
        {
            studentId: '1',
            studentName: 'Nguyễn Văn A',
            phone: '0123456789',
            email: 'nguyenvan@gmail.com',
        },
        {
            studentId: '2',
            studentName: 'Nguyễn Văn B',
            phone: '0987654321',
            email: 'nguyenB@gmail.com',
        },
    ],
    validErr: {
        studentId: "",
        studentName: "",
        phone: "",
        email: "",
    },
    searchList: [],
    searchInp: "",
};


export const formReducer = (state = stateDefault, action) => {
    const checkValidCreate = () => {

        let { id, value, dataType } = action.payload;
        console.log(id, value);

        let inpStudent = { ...state.student };
        inpStudent[id] = value;
        state.student = inpStudent;

        let validError = { ...state.validErr };
        let errMess = "";
        if (value.trim() === "") {
            errMess = "Không để trống phần thông tin này!";
        }
        else if (dataType === "studentId") {
            if (state.studentList.find((stu) => stu.studentId === value)) {
                errMess = "Mã sinh viên đã tồn tại!";
            }
            let regexNumberId = /^[0-9]*$/;
            if (!regexNumberId.test(value)) {
                errMess = "Mã sinh viên phải là số!";
            }
        } else if (dataType === "studentName") {
            let regexName =
                /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;
            if (!regexName.test(value)) {
                errMess = "Tên sinh viên phải là chữ";
            }
        } else if (dataType === "phone") {
            let regexTel =
                /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
            if (!regexTel.test(value)) {
                errMess = "Số điện thoại không hợp lệ!";
            }
        } else if (dataType === "email") {
            let regexMail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!regexMail.test(value)) {
                errMess = "Email không hợp lệ!";
            }
        }

        validError[id] = errMess;
        state.validErr = validError;
    }
    const checkValidUpdate = () => {
        let { id, value, dataType } = action.payload;
        console.log(id, value);

        let inpStudent = { ...state.student };
        inpStudent[id] = value;
        state.student = inpStudent;

        let validError = { ...state.validErr };
        let errMess = "";
        if (value && value.trim() === "") {
            errMess = "Không để trống phần thông tin này!";
        }
        else if (dataType === "studentName") {
            let regexName =
                /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;
            if (!regexName.test(value)) {
                errMess = "Tên sinh viên phải là chữ";
            }
        } else if (dataType === "phone") {
            let regexTel =
                /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
            if (!regexTel.test(value)) {
                errMess = "Số điện thoại không hợp lệ!";
            }
        } else if (dataType === "email") {
            let regexMail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!regexMail.test(value)) {
                errMess = "Email không hợp lệ!";
            }
        }

        validError[id] = errMess;
        state.validErr = validError;
    }
    switch (action.type) {
        case "HANDLE_INPUT": {
            checkValidCreate();
            return { ...state };
        }

        case "HANDLE_CREATE": {
            state.studentList = [...state.studentList, state.student]
            alert("Thêm sinh viên thành công!");
            return { ...state };
        }

        case "HANDLE_DELETE": {
            let { studentId } = action.payload;
            let newStudentList = [...state.studentList];
            let indexStudent = newStudentList.findIndex(
                (stu) => stu.studentId === studentId
            );

            newStudentList.splice(indexStudent, 1);
            state.studentList = newStudentList;
            state.searchList =
                "";
            alert("Xóa sinh viên này thành công");
            return { ...state };
        }

        case "HANDLE_UPDATE_RENDER": {
            checkValidUpdate();
            let { student } = action.payload;
            state.student = student;
            console.log(state.student);
            return { ...state };
        }
        case "HANDLE_UPDATE_SUBMIT": {
            let updateStudentList = [...state.studentList];
            let studentIndex = updateStudentList.findIndex(
                (stu) => stu.studentId === state.student.studentId
            );

            updateStudentList[studentIndex] = state.student;
            state.studentList = updateStudentList;
            alert("Cập nhật thành công!");
            state.student = {
                studentId: "",
                studentName: "",
                email: "",
                phone: "",
            };
            return { ...state };
        }

        case "HANDLE_SEARCH": {
            let { value } = action.payload;
            state.searchInp = value;
            console.log("......", state.searchInp)

            let searchValue = value.trim().toLowerCase();
            const searchArr = state.studentList.map((stu) => ({ ...stu }));
            let searchResults = searchArr.filter(
                (stu) =>
                    (stu.studentName.toLocaleLowerCase().includes(searchValue)) ||
                    (stu.studentId.includes(searchValue)) ||
                    (stu.email.toLowerCase().includes(searchValue)) ||
                    (stu.phone.includes(searchValue))
            );
            state.searchList = searchResults;
            return { ...state };
        }

        default:
            return state;
    }
}