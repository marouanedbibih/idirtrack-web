

export interface MetaData {
  currentPage: number;
  totalPages: number;
  totalElements?: number;
  size: number;
}

export enum MessageType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
  INIT = "INIT",
  INFO = "INFO",
}

export interface BasicResponse {
  data(data: any): unknown;
  content?: any;
  message?: string;
  messageObject?: { [key: string]: string | null };
  messageType: MessageType;
  redirectUrl?: string;
  status?: string;
  metaData?: MetaData;

  // Errors
  error?: any;
  errorsList?: ErrorInterface[] | null;
}

export interface MessageInterface {
  message?: string;
  messagesObject?: { [key: string]: string | null } | null;
  messageType: MessageType;
}

// export { MetaData, MessageType, BasicResponse };


export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
}

// Errors Interface
export interface ErrorInterface {
  key: string;
  message: string;
}


export interface Response {
  content?: any;
  message?: string;
  messagesList?: { [key: string]: string | null };
  messageType: MessageType;
  redirectUrl?: string;
  status?: string;
  metaData?: MetaData;

  // Errors
  error?: any;
  errorsList?: ErrorInterface[] | null;
}