import React, { useEffect } from 'react';
import { useGetFootballMatchesQuery } from '../api/footballApi';

const FootballMatchList = () => {
  const { data, error, isLoading, refetch } = useGetFootballMatchesQuery(2);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Football Matches</h2>
      <ul>
        {data.map((match) => (
          <li key={match.id}>
            {match.home_team} vs {match.away_team}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballMatchList;
