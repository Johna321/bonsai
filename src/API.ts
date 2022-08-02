/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFormInput = {
  id?: string | null,
  title: string,
};

export type ModelFormConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelFormConditionInput | null > | null,
  or?: Array< ModelFormConditionInput | null > | null,
  not?: ModelFormConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Form = {
  __typename: "Form",
  id: string,
  title: string,
  questions?: ModelQuestionConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  content: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  formQuestionsId?: string | null,
  owner?: string | null,
};

export type UpdateFormInput = {
  id: string,
  title?: string | null,
};

export type DeleteFormInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  formQuestionsId?: string | null,
};

export type ModelQuestionConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
  formQuestionsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateQuestionInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  formQuestionsId?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
};

export type ModelStudentConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  classes?: ModelStudentClassesConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStudentClassesConnection = {
  __typename: "ModelStudentClassesConnection",
  items:  Array<StudentClasses | null >,
  nextToken?: string | null,
};

export type StudentClasses = {
  __typename: "StudentClasses",
  id: string,
  studentID: string,
  classID: string,
  student: Student,
  class: Class,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  code: string,
  posts?: ModelPostConnection | null,
  students?: ModelStudentClassesConnection | null,
  createdAt: string,
  updatedAt: string,
  teacherClassesId?: string | null,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  classPostsId?: string | null,
  owner?: string | null,
};

export type UpdateStudentInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  username?: string | null,
  email?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateTeacherInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
};

export type ModelTeacherConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  classes?: ModelClassConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type UpdateTeacherInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  username?: string | null,
  email?: string | null,
};

export type DeleteTeacherInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  code: string,
  teacherClassesId?: string | null,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  teacherClassesId?: ModelIDInput | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  teacherClassesId?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  image?: string | null,
  classPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  classPostsId?: ModelIDInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  classPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateStudentClassesInput = {
  id?: string | null,
  studentID: string,
  classID: string,
};

export type ModelStudentClassesConditionInput = {
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelStudentClassesConditionInput | null > | null,
  or?: Array< ModelStudentClassesConditionInput | null > | null,
  not?: ModelStudentClassesConditionInput | null,
};

export type UpdateStudentClassesInput = {
  id: string,
  studentID?: string | null,
  classID?: string | null,
};

export type DeleteStudentClassesInput = {
  id: string,
};

export type ModelFormFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelFormFilterInput | null > | null,
  or?: Array< ModelFormFilterInput | null > | null,
  not?: ModelFormFilterInput | null,
};

export type ModelFormConnection = {
  __typename: "ModelFormConnection",
  items:  Array<Form | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
  formQuestionsId?: ModelIDInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items:  Array<Teacher | null >,
  nextToken?: string | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
  teacherClassesId?: ModelIDInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  classPostsId?: ModelIDInput | null,
};

export type ModelStudentClassesFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelStudentClassesFilterInput | null > | null,
  or?: Array< ModelStudentClassesFilterInput | null > | null,
  not?: ModelStudentClassesFilterInput | null,
};

export type CreateFormMutationVariables = {
  input: CreateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type CreateFormMutation = {
  createForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFormMutationVariables = {
  input: UpdateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type UpdateFormMutation = {
  updateForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFormMutationVariables = {
  input: DeleteFormInput,
  condition?: ModelFormConditionInput | null,
};

export type DeleteFormMutation = {
  deleteForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStudentClassesMutationVariables = {
  input: CreateStudentClassesInput,
  condition?: ModelStudentClassesConditionInput | null,
};

export type CreateStudentClassesMutation = {
  createStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentClassesMutationVariables = {
  input: UpdateStudentClassesInput,
  condition?: ModelStudentClassesConditionInput | null,
};

export type UpdateStudentClassesMutation = {
  updateStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentClassesMutationVariables = {
  input: DeleteStudentClassesInput,
  condition?: ModelStudentClassesConditionInput | null,
};

export type DeleteStudentClassesMutation = {
  deleteStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetFormQueryVariables = {
  id: string,
};

export type GetFormQuery = {
  getForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFormsQueryVariables = {
  filter?: ModelFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormsQuery = {
  listForms?:  {
    __typename: "ModelFormConnection",
    items:  Array< {
      __typename: "Form",
      id: string,
      title: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      content: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      formQuestionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      classPostsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentClassesQueryVariables = {
  id: string,
};

export type GetStudentClassesQuery = {
  getStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentClassesQueryVariables = {
  filter?: ModelStudentClassesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentClassesQuery = {
  listStudentClasses?:  {
    __typename: "ModelStudentClassesConnection",
    items:  Array< {
      __typename: "StudentClasses",
      id: string,
      studentID: string,
      classID: string,
      student:  {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFormSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFormSubscription = {
  onCreateForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFormSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFormSubscription = {
  onUpdateForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFormSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFormSubscription = {
  onDeleteForm?:  {
    __typename: "Form",
    id: string,
    title: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        formQuestionsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    formQuestionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTeacherSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTeacherSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTeacherSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        createdAt: string,
        updatedAt: string,
        teacherClassesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentClassesConnection",
      items:  Array< {
        __typename: "StudentClasses",
        id: string,
        studentID: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teacherClassesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    classPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStudentClassesSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStudentClassesSubscription = {
  onCreateStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentClassesSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStudentClassesSubscription = {
  onUpdateStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentClassesSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStudentClassesSubscription = {
  onDeleteStudentClasses?:  {
    __typename: "StudentClasses",
    id: string,
    studentID: string,
    classID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      classes?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelStudentClassesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teacherClassesId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
