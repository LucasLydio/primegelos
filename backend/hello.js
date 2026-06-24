class Hello {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }

    info() {
        return `message: ${this.message} , status: ${this.status}.`;
    }
}

export default Hello();