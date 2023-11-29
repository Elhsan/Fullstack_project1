import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../conf/common';

export default function AuthControl(Component) {
    return function AuthenticatedComponent(props) {
        const navigate = useNavigate();

        useEffect(() => {
            if (!isLoggedIn()) {
                navigate('/auth');
            }
        }, [navigate]);


        return <Component {...props} />;
    };
}