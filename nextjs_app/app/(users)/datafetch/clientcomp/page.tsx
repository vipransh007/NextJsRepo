"use client"

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const DatafetchClient = () => {
    const [userInfo, setUserInfo] = useState(null);
    const searchParams = useSearchParams();
    const username = searchParams.get("name");
    
    useEffect(() => {
        const revealUserGender = async () => {
            if (username) {
                const res = await fetch(`https://api.genderize.io/?name=${username}`);
                const userData = await res.json();
                setUserInfo(userData); 
            }           
        };

        revealUserGender();
    }, [username]);

    return (
        <div>
            {userInfo && (
                <div>
                    <p>name = {userInfo.name}</p>
                    <p>gender = {userInfo.gender}</p>
                    <p>count = {userInfo.count}</p>
                </div>
            )}
        </div>
  );
};

export default DatafetchClient;