/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
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
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        questions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getStudentClasses = /* GraphQL */ `
  query GetStudentClasses($id: ID!) {
    getStudentClasses(id: $id) {
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
export const listStudentClasses = /* GraphQL */ `
  query ListStudentClasses(
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentID
        classID
        student {
          id
          firstName
          lastName
          username
          email
          createdAt
          updatedAt
          owner
        }
        class {
          id
          name
          code
          createdAt
          updatedAt
          teacherClassesId
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
