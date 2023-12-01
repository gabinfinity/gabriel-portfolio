import { GitHubCardContent, GitHubCardStyle, GitHubStatItemContainer } from "./GitHubStats.styles";

interface StatItemProps {
    value: number | null;
    label: string;
}

interface GitHubStatsTypes {
    followers: number;
    public_repos: number;
    total_stars: number;
    total_forks: number;
}

interface GitHubStatsProps {
    userData: GitHubStatsTypes | null;
    totalStars: number | null;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
    <GitHubCardStyle>
        <GitHubCardContent>
            <h1>{value}</h1>
            <h3>{label}</h3>
        </GitHubCardContent>
    </GitHubCardStyle>
);

const GitHubStats: React.FC<GitHubStatsProps> = ({ userData, totalStars }) => (
    <>
        {userData && (
            <GitHubStatItemContainer>
                <StatItem value={userData.followers} label="Followers:" />
                <StatItem value={userData.public_repos} label="Repositories:" />
                <StatItem value={totalStars} label="Stars:" />
            </GitHubStatItemContainer>
        )}
    </>
);

export default GitHubStats;
