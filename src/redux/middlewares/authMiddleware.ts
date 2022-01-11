import { Middleware } from '@reduxjs/toolkit';

const authMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
};

export default authMiddleware;
