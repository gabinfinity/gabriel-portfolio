import { useEffect, useState } from 'react';

interface RepoDataTypes {
    stargazers_count: number;
}

interface ApiGithubState {
    userData: null; // Substitua "any" pelo tipo correto para os dados do usuário
    totalStars: number | null;
}

export default function ApiGithub() {
    const [apiData, setApiData] = useState<ApiGithubState>({
        userData: null,
        totalStars: null,
    });

    useEffect(() => {
        const getApi = async () => {
            try {
                const userRes = await fetch('https://api.github.com/users/gabinfinity');

                if (!userRes.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await userRes.json();

                const reposRes = await fetch('https://api.github.com/users/gabinfinity/repos');

                if (!reposRes.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const reposData = await reposRes.json();

                const totalStars = reposData.reduce((total: number, repo: RepoDataTypes) => total + repo.stargazers_count, 0);

                setApiData({
                    userData,
                    totalStars,
                });
            } catch (error) {
                console.error(error);
            }
        };

        getApi();
    }, []);

    return apiData;
}