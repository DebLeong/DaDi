export const typeDefs = ["type User {\n  id: Int!\n  email: String\n  emailVerified: Boolean!\n  phoneNumber: String!\n  phoneNumberVerified: Boolean!\n  password: String\n  firstName: String!\n  lastName: String!\n  fullName: String\n  bio: String\n  age: Int\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n  isTalking: Boolean!\n  lastLong: Float\n  lastLong: Float\n  lastOrientation: Float\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  password: string | null;
  firstName: string;
  lastName: string;
  fullName: string | null;
  bio: string | null;
  age: number | null;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
  isTalking: boolean;
  lastLong: number | null;
  lastOrientation: number | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
