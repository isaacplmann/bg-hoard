export type AuthResponse = AuthSuccessResponse | AuthFailureResponse;
export interface AuthSuccessResponse {
  success: true;
  name: string;
}
export interface AuthFailureResponse {
  success: false;
}

// change made

export function doAuth(): AuthResponse {
  return { success: true, name: 'Cheddar' };
}
