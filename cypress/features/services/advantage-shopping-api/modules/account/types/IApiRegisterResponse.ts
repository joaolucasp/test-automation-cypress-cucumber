export interface IApiRegisterResponse {
  statusMessage: IApiStatusMessage;
}

export interface IApiStatusMessage {
  reason: string;
  sessionId: string;
  success: boolean;
  token: string;
  userId: string;
}