class Error{

    _status;
    _message;
    _errorList;

    constructor(status, message, errorList){
        this._status = status;
        this._message = message;
        this._errorList = errorList;
    }

}


module.exports = Error;