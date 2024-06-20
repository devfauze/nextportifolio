import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export const getGitHubRepos = async (username: string): Promise<Repository[]> => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repos: Repository[] = response.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
    }));
    return repos;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};