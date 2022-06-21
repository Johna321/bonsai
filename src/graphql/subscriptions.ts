/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      content
      image
      createdAt
      updatedAt
      formQuestionsId
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      content
      image
      createdAt
      updatedAt
      formQuestionsId
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      content
      image
      createdAt
      updatedAt
      formQuestionsId
    }
  }
`;
export const onCreateForm = /* GraphQL */ `
  subscription OnCreateForm($owner: String, $students: String) {
    onCreateForm(owner: $owner, students: $students) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      students
    }
  }
`;
export const onUpdateForm = /* GraphQL */ `
  subscription OnUpdateForm($owner: String, $students: String) {
    onUpdateForm(owner: $owner, students: $students) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      students
    }
  }
`;
export const onDeleteForm = /* GraphQL */ `
  subscription OnDeleteForm($owner: String, $students: String) {
    onDeleteForm(owner: $owner, students: $students) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      students
    }
  }
`;
