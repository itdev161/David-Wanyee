import express from 'express';
import { ppid } from 'process';
import connectDatabase from './config/db';
import {check, validationResult} from 'express-validator';

//intialize express application
connectDatabase();

//configure middleware
app.use(express.json({extended:false}));

//api endpoints
/**
* @route GET /
* @desc Test endpoint
*/

app.post(
    '/api/users',
        check('name','Please enter your name')
        .not()
        .isempty(),
        check('email', 'Please enter your email').isEmail(),
        check(
            'password','Please enter a passwordwith 6 or more characters'
            .isLength({ min:6 })
    ],
(req,res) => {
    const errors = validationResult(req);
    if(!errors) = isEmpty()){
        return res.status(422).json({errors:errors.array() });
    } else {
    return res.send(req.body);
    }
   }
 );
 
 /** 
  * @route POST api/users
  * @desc Registe User
 */

 //connect listener
 app.listen(3000, () => console.log('express server running on port 3000'));
 
