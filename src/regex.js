export const REGEX_NAME = /^(?=.{3,32}$)[a-zA-Z]+(?:['_.\-\s][a-zA-Z]+)*$/;
export const REGEX_MAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
export const REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\-]{8,})$/;
export const REGEX_USERNAME = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;