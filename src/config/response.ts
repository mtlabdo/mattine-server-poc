import { json } from "body-parser";

export default function (data: any, err: any) {
  if (err) {
    return new result(500, false);
  } else return new result(200, true, data);
}

class result {
  message?: object;
  code: number = 0;
  success: boolean = false;

  constructor(code: number, success: boolean, message?: object) {
    this.message = message;
    this.code = code;
    this.success = success;
  }
}
