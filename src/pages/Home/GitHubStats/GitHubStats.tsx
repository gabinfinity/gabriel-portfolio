import Grid from '@mui/material/Grid';
import { GitHubCardContent, GitHubCardStyle } from "./GitHubStats.styles";

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
    <>
        <GitHubCardStyle>
            <GitHubCardContent>
                <h1>{value}</h1>
                <h3>{label}</h3>
            </GitHubCardContent>
        </GitHubCardStyle>
    </>
);

const GitHubStats: React.FC<GitHubStatsProps> = ({ userData, totalStars }) => (
    <>
        {userData && (
            <Grid container spacing={5}>
                <Grid item xs={100} md={4}>
                    <StatItem value={userData.followers} label="Followers:" />
                </Grid>
                <Grid item xs={100} md={4}>
                    <StatItem value={userData.public_repos} label="Repositories:" />
                </Grid>
                <Grid item xs={100} md={4}>
                    <StatItem value={totalStars} label="Stars:" />
                </Grid>
            </Grid>
        )}
    </>
);

export default GitHubStats;
