export interface IApiLoginResponse {
  statusMessage: {
    success: boolean;
    userId: number;
    reason: string;
    token: string;
    sessionId: string;
  }
};