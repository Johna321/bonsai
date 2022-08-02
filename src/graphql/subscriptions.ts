/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateForm = /* GraphQL */ `
  subscription OnCreateForm($owner: String) {
    onCreateForm(owner: $owner) {
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
export const onUpdateForm = /* GraphQL */ `
  subscription OnUpdateForm($owner: String) {
    onUpdateForm(owner: $owner) {
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
export const onDeleteForm = /* GraphQL */ `
  subscription OnDeleteForm($owner: String) {
    onDeleteForm(owner: $owner) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String) {
    onCreateQuestion(owner: $owner) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String) {
    onUpdateQuestion(owner: $owner) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String) {
    onDeleteQuestion(owner: $owner) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($owner: String) {
    onCreateStudent(owner: $owner) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($owner: String) {
    onUpdateStudent(owner: $owner) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($owner: String) {
    onDeleteStudent(owner: $owner) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($owner: String) {
    onCreateTeacher(owner: $owner) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($owner: String) {
    onUpdateTeacher(owner: $owner) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($owner: String) {
    onDeleteTeacher(owner: $owner) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($owner: String) {
    onCreateClass(owner: $owner) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($owner: String) {
    onUpdateClass(owner: $owner) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($owner: String) {
    onDeleteClass(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateStudentClasses = /* GraphQL */ `
  subscription OnCreateStudentClasses($owner: String) {
    onCreateStudentClasses(owner: $owner) {
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
export const onUpdateStudentClasses = /* GraphQL */ `
  subscription OnUpdateStudentClasses($owner: String) {
    onUpdateStudentClasses(owner: $owner) {
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
export const onDeleteStudentClasses = /* GraphQL */ `
  subscription OnDeleteStudentClasses($owner: String) {
    onDeleteStudentClasses(owner: $owner) {
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
