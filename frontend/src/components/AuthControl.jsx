import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../conf/common';
import { toast } from 'react-toastify';

export default function AuthControl(Component) {
    return function AuthenticatedComponent(props) {
        const navigate = useNavigate();

        useEffect(() => {
            if (!isLoggedIn()) {
                toast.error('You are not logged in!', { toastId: 'success1',})
                navigate('/auth');
            }
        }, [navigate]);


        return <Component {...props} />;
    };
}