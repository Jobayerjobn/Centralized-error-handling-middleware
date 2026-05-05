class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
       // this.status = `${statusCode}`.startsWith('4')? 'fail' : 'Error';
        this.status = statusCode >= 400 &&  statusCode < 500 ? 'fail' : 'Error';
        
        Error.captureStackTrace(this, this.constructor);

    };
};


export default AppError;
