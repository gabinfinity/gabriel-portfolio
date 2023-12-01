import { useEffect, useState } from 'react';
import GitHubStats from '../GitHubStats/GitHubStats';

interface RepoDataTypes {
    stargazers_count: number;
}

export default function ApiGithub() {
    const [userData, setUserData] = useState(null);
    const [totalStars, setTotalStars] = useState(null);

    useEffect(() => {
        const getApi = async () => {
            try {
                const userRes = await fetch('https://api.github.com/users/gabinfinity');
                
                if (!userRes.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await userRes.json();
                setUserData(userData);

                const reposRes = await fetch('https://api.github.com/users/gabinfinity/repos');
                
                if (!reposRes.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const reposData = await reposRes.json();

                const totalStars = reposData.reduce((total: number, repo: RepoDataTypes) => total + repo.stargazers_count, 0);
                setTotalStars(totalStars);
            } catch (error) {
                console.error(error);
            }
        };

        getApi();
    }, []);

    return (
        <>
            <GitHubStats userData={userData} totalStars={totalStars} />
        </>
    );
}
