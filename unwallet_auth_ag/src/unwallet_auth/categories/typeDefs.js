export const userTypeDef = `
  type User {
      id: Int!
      username: String!
      email: String!
      roles: [String]!
  }
  type Message {
    message: String
}
  type UserToken {
    id: Int
    username: String
    email: String
    roles: [String]
    accessToken: String
    tokenType: String
}
  input UserInput {
      username: String!
      email: String!
      password: String!
      role: [String]!
  }
  input UserLogin {
    username: String!
    password: String!
}`;

export const userQueries = `
      loginnUser: String!
  `;

export const userMutations = `
    createUser(user: UserInput!): Message!
    loginUser(user: UserLogin!): UserToken!
`;
