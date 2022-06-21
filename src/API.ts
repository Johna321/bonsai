/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type Question = {
  __typename: "Question",
  id: string,
  content: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  formQuestionsId?: string | null,
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

export type Form = {
  __typename: "Form",
  id: string,
  title: string,
  questions?: ModelQuestionConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  students?: string | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type UpdateFormInput = {
  id: string,
  title?: string | null,
};

export type DeleteFormInput = {
  id: string,
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
  } | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
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
    } | null >,
    nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
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
      students?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
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
  } | null,
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
  } | null,
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
  } | null,
};

export type OnCreateFormSubscriptionVariables = {
  owner?: string | null,
  students?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
  } | null,
};

export type OnUpdateFormSubscriptionVariables = {
  owner?: string | null,
  students?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
  } | null,
};

export type OnDeleteFormSubscriptionVariables = {
  owner?: string | null,
  students?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    students?: string | null,
  } | null,
};
