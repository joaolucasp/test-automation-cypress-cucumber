export interface IApiStatusMessage {
  response: {
    reason: string;
    sessionId: string;
    success: boolean;
    token: string;
    userId: string;
  }
}
