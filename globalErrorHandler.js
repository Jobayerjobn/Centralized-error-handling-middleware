export const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        status: err.status || 'Error',
        message: err.message || 'Internal server Error',

    });
};

