/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
      id
      title
      questions {
        items {
          id
          content
          image
          createdAt
          updatedAt
          formQuestionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
      id
      title
      questions {
        items {
          id
          content
          image
          createdAt
          updatedAt
          formQuestionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
      id
      title
      questions {
        items {
          id
          content
          image
          createdAt
          updatedAt
          formQuestionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      content
      image
      createdAt
      updatedAt
      formQuestionsId
      owner
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      content
      image
      createdAt
      updatedAt
      formQuestionsId
      owner
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      content
      image
      createdAt
      updatedAt
      formQuestionsId
      owner
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      username
      email
      classes {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      username
      email
      classes {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      username
      email
      classes {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      firstName
      lastName
      username
      email
      classes {
        items {
          id
          name
          code
          createdAt
          updatedAt
          teacherClassesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      firstName
      lastName
      username
      email
      classes {
        items {
          id
          name
          code
          createdAt
          updatedAt
          teacherClassesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      firstName
      lastName
      username
      email
      classes {
        items {
          id
          name
          code
          createdAt
          updatedAt
          teacherClassesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      code
      posts {
        items {
          id
          title
          content
          image
          createdAt
          updatedAt
          classPostsId
          owner
        }
        nextToken
      }
      students {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      teacherClassesId
      owner
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      name
      code
      posts {
        items {
          id
          title
          content
          image
          createdAt
          updatedAt
          classPostsId
          owner
        }
        nextToken
      }
      students {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      teacherClassesId
      owner
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      name
      code
      posts {
        items {
          id
          title
          content
          image
          createdAt
          updatedAt
          classPostsId
          owner
        }
        nextToken
      }
      students {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      teacherClassesId
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      image
      createdAt
      updatedAt
      classPostsId
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      image
      createdAt
      updatedAt
      classPostsId
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      image
      createdAt
      updatedAt
      classPostsId
      owner
    }
  }
`;
export const createStudentClasses = /* GraphQL */ `
  mutation CreateStudentClasses(
    $input: CreateStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    createStudentClasses(input: $input, condition: $condition) {
      id
      studentID
      classID
      student {
        id
        firstName
        lastName
        username
        email
        classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      class {
        id
        name
        code
        posts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        teacherClassesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateStudentClasses = /* GraphQL */ `
  mutation UpdateStudentClasses(
    $input: UpdateStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    updateStudentClasses(input: $input, condition: $condition) {
      id
      studentID
      classID
      student {
        id
        firstName
        lastName
        username
        email
        classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      class {
        id
        name
        code
        posts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        teacherClassesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteStudentClasses = /* GraphQL */ `
  mutation DeleteStudentClasses(
    $input: DeleteStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    deleteStudentClasses(input: $input, condition: $condition) {
      id
      studentID
      classID
      student {
        id
        firstName
        lastName
        username
        email
        classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      class {
        id
        name
        code
        posts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        teacherClassesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
