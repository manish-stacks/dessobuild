class ApiResponse {
  constructor(status, message, data = null) {
    this.success = status < 400;
    this.message = message;
    this.data = data;
  }
}
module.exports = ApiResponse;
