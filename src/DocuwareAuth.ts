import { Oauth2OperationHandlerAuth } from "@trayio/cdk-dsl/connector/operation/OperationHandler";


export type UserAuth = {
  access_token: string,
  "#dw_org": string,
}

export type AppAuth = {
  client_id: string
  client_secret: string
  account_id: string
}

// export type DocuwareAuth = TokenOperationHandlerAuth<UserAuth, AppAuth>; // No Authentication
export type DocuwareAuth = Oauth2OperationHandlerAuth<UserAuth, AppAuth>;
