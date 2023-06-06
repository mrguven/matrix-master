const express = require('express');
const {userSchema,Comment} = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');