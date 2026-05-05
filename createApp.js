import express from 'express';
import AppError from './customErrorHandler.js';
import { globalErrorHandler } from './globalErrorHandler.js';

const app = express();
app.use(express.json());

const dataBase = [
    {name: 'Jobayer', email:'jobayerjoban0048@gmail.com', id: 1},
    {name: 'Joban', email: 'joban0@gmail.com', id: 2},
    {name: 'Karim', email: 'karim@gmail.com', id: 3},
    {name: 'Jobber', email: 'jobber@gmail.com', id: 4}
];

app.get('/api/v1/users', (req, res, next) => {
    if(dataBase.length === 0){
        return next(new AppError('User not found', 404));

    };
    res.status(200).json({
        success: true,
        data: dataBase,
        
    })

});

/*
app.get('*', (req, res, next) => {
    next(new AppError(`${req.originalUrl}`, 404));
});
*/

app.use(globalErrorHandler);



export default app;



