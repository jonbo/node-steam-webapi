Generated on Sun, 06 Apr 2014 01:04:23 GMT

* > 'key' is needed for most methods even if not specified*


* > 'version' is needed if you want to specify a lower one*


## getGameServersStatus(steamObj, cb)
version 1 {ICSGOServers_730}
####steamObj

-  {int} `gameid` : The game id

## getFantasyLeagueLeaderboard(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID to get the leaderboard of

-  {uint32} `count` : The number of teams to return

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

- (optional) {bool} `in_hall` : Restrict to only owners in the International hall

## getFantasyPlayerScore(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID for scoring purposes

-  {uint32} `playerAccountID` : Pro player account ID

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

## getFantasyTeamInfoOwnedBy(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `ownerAccountID` : The AccountID of the user to get the fantasy teams of

- (optional) {uint32} `fantasyLeagueID` : Filter by fantasy league ID

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

## getFantasyTopPlayers(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID to get the top players of

-  {uint32} `count` : The number of teams to return

- (optional) {uint32} `role` : The role of the players to return

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

## getNextFantasyEvent(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID

-  {uint32} `eventType` : 1=league lock, 2=league unlock

## getPlayerName(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `playerAccountID` : The AccountID of the owner of the pro player

## getStartEndTimesForDay(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyDay` : The day of the touranment

## getValidFantasyPlayersForRoles(steamObj, cb)
version 1 {IDOTA2Fantasy_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID

-  {uint32} `ownerAccountID` : The AccountID of the owner of the team

-  {uint32} `teamIndex` : Index of the owner's team in the fantasy league

## getFantasyLeagueLeaderboard(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID to get the leaderboard of

-  {uint32} `count` : The number of teams to return

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

- (optional) {bool} `in_hall` : Restrict to only owners in the International hall

## getFantasyPlayerScore(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID for scoring purposes

-  {uint32} `playerAccountID` : Pro player account ID

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

## getFantasyTeamInfoOwnedBy(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `ownerAccountID` : The AccountID of the user to get the fantasy teams of

- (optional) {uint32} `fantasyLeagueID` : Filter by fantasy league ID

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

## getFantasyTopPlayers(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID to get the top players of

-  {uint32} `count` : The number of teams to return

- (optional) {uint32} `role` : The role of the players to return

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

## getNextFantasyEvent(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID

-  {uint32} `eventType` : 1=league lock, 2=league unlock

## getPlayerName(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `playerAccountID` : The AccountID of the owner of the pro player

## getStartEndTimesForDay(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyDay` : The day of the touranment

## getValidFantasyPlayersForRoles(steamObj, cb)
version 1 {IDOTA2Fantasy_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID

-  {uint32} `ownerAccountID` : The AccountID of the owner of the team

-  {uint32} `teamIndex` : Index of the owner's team in the fantasy league

## getFantasyLeagueLeaderboard(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID to get the leaderboard of

-  {uint32} `count` : The number of teams to return

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

- (optional) {bool} `in_hall` : Restrict to only owners in the International hall

## getFantasyPlayerScore(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID for scoring purposes

-  {uint32} `playerAccountID` : Pro player account ID

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

## getFantasyTeamInfoOwnedBy(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `ownerAccountID` : The AccountID of the user to get the fantasy teams of

- (optional) {uint32} `fantasyLeagueID` : Filter by fantasy league ID

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

## getFantasyTopPlayers(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID to get the top players of

-  {uint32} `count` : The number of teams to return

- (optional) {uint32} `role` : The role of the players to return

- (optional) {uint32} `startTimeFilter` : Filter by earlist time

- (optional) {uint32} `endTimeFilter` : Filter by latest time

- (optional) {uint32} `matchIDFilter` : Limit the scores to a particular match ID

- (optional) {bool} `last_match` : Limit the scores to the last match played in a league

## getNextFantasyEvent(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID

-  {uint32} `eventType` : 1=league lock, 2=league unlock

## getPlayerName(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `playerAccountID` : The AccountID of the owner of the pro player

## getStartEndTimesForDay(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyDay` : The day of the touranment

## getValidFantasyPlayersForRoles(steamObj, cb)
version 1 {IDOTA2Fantasy_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint32} `fantasyLeagueID` : The Fantasy League ID

-  {uint32} `ownerAccountID` : The AccountID of the owner of the team

-  {uint32} `teamIndex` : Index of the owner's team in the fantasy league

## getLeagueListing(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

## getLiveLeagueGames(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

## getMatchDetails(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

-  {string} `match_id` : Match id

## getMatchHistory(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `hero_id` : The ID of the hero that must be in the matches being queried

- (optional) {uint32} `game_mode` : Which game mode to return matches for

- (optional) {uint32} `skill` : The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified

- (optional) {uint32} `date_min` : The UTC value of the first date to query (rounded to the nearest day)

- (optional) {uint32} `date_max` : The UTC value of the last date to query (rounded to the nearest day)

- (optional) {string} `min_players` : Minimum number of human players that must be in a match for it to be returned

- (optional) {string} `account_id` : An account ID to get matches from. This will fail if the user has their match history hidden

- (optional) {string} `league_id` : The league ID to return games from

- (optional) {string} `start_at_match_id` : The minimum match ID to start from

- (optional) {string} `matches_requested` : The number of requested matches to return

- (optional) {string} `tournament_games_only` : Whether or not tournament games should only be returned

## getMatchHistoryBySequenceNum(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint64} `start_at_match_seq_num` : 

- (optional) {uint32} `matches_requested` : 

## getScheduledLeagueGames(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `date_min` : 

- (optional) {uint32} `date_max` : 

## getTeamInfoByTeamID(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint64} `start_at_team_id` : 

- (optional) {uint32} `teams_requested` : 

## getTournamentPlayerStats(steamObj, cb)
version 1 {IDOTA2Match_205790}
####steamObj

-  {int} `gameid` : The game id

-  {string} `account_id` : 

- (optional) {string} `league_id` : 

- (optional) {string} `hero_id` : 

- (optional) {string} `time_frame` : 

- (optional) {string} `match_id` : 

## getLeagueListing(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

## getLiveLeagueGames(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

## getMatchDetails(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

-  {string} `match_id` : Match id

## getMatchHistory(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `hero_id` : The ID of the hero that must be in the matches being queried

- (optional) {uint32} `game_mode` : Which game mode to return matches for

- (optional) {uint32} `skill` : The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified

- (optional) {uint32} `date_min` : The UTC value of the first date to query (rounded to the nearest day)

- (optional) {uint32} `date_max` : The UTC value of the last date to query (rounded to the nearest day)

- (optional) {string} `min_players` : Minimum number of human players that must be in a match for it to be returned

- (optional) {string} `account_id` : An account ID to get matches from. This will fail if the user has their match history hidden

- (optional) {string} `league_id` : The league ID to return games from

- (optional) {string} `start_at_match_id` : The minimum match ID to start from

- (optional) {string} `matches_requested` : The number of requested matches to return

- (optional) {string} `tournament_games_only` : Whether or not tournament games should only be returned

## getMatchHistoryBySequenceNum(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint64} `start_at_match_seq_num` : 

- (optional) {uint32} `matches_requested` : 

## getScheduledLeagueGames(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `date_min` : 

- (optional) {uint32} `date_max` : 

## getTeamInfoByTeamID(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint64} `start_at_team_id` : 

- (optional) {uint32} `teams_requested` : 

## getTournamentPlayerStats(steamObj, cb)
version 1 {IDOTA2Match_247040}
####steamObj

-  {int} `gameid` : The game id

-  {string} `account_id` : 

- (optional) {string} `league_id` : 

- (optional) {string} `hero_id` : 

- (optional) {string} `time_frame` : 

- (optional) {string} `match_id` : 

## getLeagueListing(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

## getLiveLeagueGames(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

## getMatchDetails(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

-  {string} `match_id` : Match id

## getMatchHistory(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `hero_id` : The ID of the hero that must be in the matches being queried

- (optional) {uint32} `game_mode` : Which game mode to return matches for

- (optional) {uint32} `skill` : The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified

- (optional) {uint32} `date_min` : The UTC value of the first date to query (rounded to the nearest day)

- (optional) {uint32} `date_max` : The UTC value of the last date to query (rounded to the nearest day)

- (optional) {string} `min_players` : Minimum number of human players that must be in a match for it to be returned

- (optional) {string} `account_id` : An account ID to get matches from. This will fail if the user has their match history hidden

- (optional) {string} `league_id` : The league ID to return games from

- (optional) {string} `start_at_match_id` : The minimum match ID to start from

- (optional) {string} `matches_requested` : The number of requested matches to return

- (optional) {string} `tournament_games_only` : Whether or not tournament games should only be returned

## getMatchHistoryBySequenceNum(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint64} `start_at_match_seq_num` : 

- (optional) {uint32} `matches_requested` : 

## getScheduledLeagueGames(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `date_min` : 

- (optional) {uint32} `date_max` : 

## getTeamInfoByTeamID(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint64} `start_at_team_id` : 

- (optional) {uint32} `teams_requested` : 

## getTournamentPlayerStats(steamObj, cb)
version 1 {IDOTA2Match_570}
####steamObj

-  {int} `gameid` : The game id

-  {string} `account_id` : 

- (optional) {string} `league_id` : 

- (optional) {string} `hero_id` : 

- (optional) {string} `time_frame` : 

- (optional) {string} `match_id` : 

## getHeroes(steamObj, cb)
version 1 {IEconDOTA2_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to provide hero names in.

- (optional) {bool} `itemizedonly` : Return a list of itemized heroes only.

## getRarities(steamObj, cb)
version 1 {IEconDOTA2_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to provide rarity names in.

## getTournamentPrizePool(steamObj, cb)
version 1 {IEconDOTA2_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `leagueid` : The ID of the league to get the prize pool of

## getHeroes(steamObj, cb)
version 1 {IEconDOTA2_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to provide hero names in.

- (optional) {bool} `itemizedonly` : Return a list of itemized heroes only.

## getRarities(steamObj, cb)
version 1 {IEconDOTA2_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to provide rarity names in.

## getTournamentPrizePool(steamObj, cb)
version 1 {IEconDOTA2_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `leagueid` : The ID of the league to get the prize pool of

## getHeroes(steamObj, cb)
version 1 {IEconDOTA2_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to provide hero names in.

- (optional) {bool} `itemizedonly` : Return a list of itemized heroes only.

## getRarities(steamObj, cb)
version 1 {IEconDOTA2_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to provide rarity names in.

## getTournamentPrizePool(steamObj, cb)
version 1 {IEconDOTA2_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {uint32} `leagueid` : The ID of the league to get the prize pool of

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getSchemaURL(steamObj, cb)
version 1 {IEconItems_205790}
####steamObj

-  {int} `gameid` : The game id

## getStoreMetaData(steamObj, cb)
version 1 {IEconItems_205790}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to results in.

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_218620}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_221540}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_238460}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getSchemaURL(steamObj, cb)
version 1 {IEconItems_247040}
####steamObj

-  {int} `gameid` : The game id

## getStoreMetaData(steamObj, cb)
version 1 {IEconItems_247040}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to results in.

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_260}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_260}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_440}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_440}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getSchemaURL(steamObj, cb)
version 1 {IEconItems_440}
####steamObj

-  {int} `gameid` : The game id

## getStoreMetaData(steamObj, cb)
version 1 {IEconItems_440}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to results in.

## getStoreStatus(steamObj, cb)
version 1 {IEconItems_440}
####steamObj

-  {int} `gameid` : The game id

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getSchemaURL(steamObj, cb)
version 1 {IEconItems_570}
####steamObj

-  {int} `gameid` : The game id

## getStoreMetaData(steamObj, cb)
version 1 {IEconItems_570}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to results in.

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_620}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_620}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_730}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 2 {IEconItems_730}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getSchemaURL(steamObj, cb)
version 2 {IEconItems_730}
####steamObj

-  {int} `gameid` : The game id

## getStoreMetaData(steamObj, cb)
version 1 {IEconItems_730}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to results in.

## getPlayerItems(steamObj, cb)
version 1 {IEconItems_841}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

## getSchema(steamObj, cb)
version 1 {IEconItems_841}
####steamObj

-  {int} `gameid` : The game id

- (optional) {string} `language` : The language to return the names in. Defaults to returning string keys.

## getServerVersion(steamObj, cb)
version 1 {IGCVersion_205790}
####steamObj

-  {int} `gameid` : The game id

## getServerVersion(steamObj, cb)
version 1 {IGCVersion_247040}
####steamObj

-  {int} `gameid` : The game id

## getClientVersion(steamObj, cb)
version 1 {IGCVersion_440}
####steamObj

-  {int} `gameid` : The game id

## getServerVersion(steamObj, cb)
version 1 {IGCVersion_440}
####steamObj

-  {int} `gameid` : The game id

## getServerVersion(steamObj, cb)
version 1 {IGCVersion_570}
####steamObj

-  {int} `gameid` : The game id

## getServerVersion(steamObj, cb)
version 1 {IGCVersion_730}
####steamObj

-  {int} `gameid` : The game id

## getBucketizedData(steamObj, cb)
version 1 {IPortal2Leaderboards_620}
####steamObj

-  {int} `gameid` : The game id

-  {string} `leaderboardName` : The leaderboard name to fetch data for.

## getBucketizedData(steamObj, cb)
version 1 {IPortal2Leaderboards_841}
####steamObj

-  {int} `gameid` : The game id

-  {string} `leaderboardName` : The leaderboard name to fetch data for.

## getAppList(steamObj, cb)
version 1 {ISteamApps}
#### No steamObj params

## getAppList(steamObj, cb)
version 2 {ISteamApps}
#### No steamObj params

## getServersAtAddress(steamObj, cb)
version 1 {ISteamApps}
####steamObj

-  {string} `addr` : IP or IP:queryport to list

## upToDateCheck(steamObj, cb)
version 1 {ISteamApps}
####steamObj

-  {uint32} `appid` : AppID of game

-  {uint32} `version` : The installed version of the game

## getAssetClassInfo(steamObj, cb)
version 1 {ISteamEconomy}
####steamObj

-  {uint32} `appid` : Must be a steam economy app.

- (optional) {string} `language` : The user's local language

-  {uint32} `class_count` : Number of classes requested. Must be at least one.

-  {uint64} `classid0` : Class ID of the nth class.

- (optional) {uint64} `instanceid0` : Instance ID of the nth class.

## getAssetPrices(steamObj, cb)
version 1 {ISteamEconomy}
####steamObj

-  {uint32} `appid` : Must be a steam economy app.

- (optional) {string} `currency` : The currency to filter for

- (optional) {string} `language` : The user's local language

## getNewsForApp(steamObj, cb)
version 1 {ISteamNews}
####steamObj

-  {uint32} `appid` : AppID to retrieve news for

- (optional) {uint32} `maxlength` : Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit.

- (optional) {uint32} `enddate` : Retrieve posts earlier than this date (unix epoch timestamp)

- (optional) {uint32} `count` : # of posts to retrieve (default 20)

## getNewsForApp(steamObj, cb)
version 2 {ISteamNews}
####steamObj

-  {uint32} `appid` : AppID to retrieve news for

- (optional) {uint32} `maxlength` : Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit.

- (optional) {uint32} `enddate` : Retrieve posts earlier than this date (unix epoch timestamp)

- (optional) {uint32} `count` : # of posts to retrieve (default 20)

- (optional) {string} `feeds` : Comma-seperated list of feed names to return news for

## payPalPaymentsHubPaymentNotification(steamObj, cb)
version 1 {ISteamPayPalPaymentsHub}
#### No steamObj params

## getCollectionDetails(steamObj, cb)
version 1 {ISteamRemoteStorage}
####steamObj

-  {uint32} `collectioncount` : Number of collection being requested

-  {uint64} `publishedfileids[0]` : collection ids to get the details for

## getPublishedFileDetails(steamObj, cb)
version 1 {ISteamRemoteStorage}
####steamObj

-  {uint32} `itemcount` : Number of items being requested

-  {uint64} `publishedfileids[0]` : published file id to look up

## getUGCFileDetails(steamObj, cb)
version 1 {ISteamRemoteStorage}
####steamObj

- (optional) {uint64} `steamid` : If specified, only returns details if the file is owned by the SteamID specified

-  {uint64} `ugcid` : ID of UGC file to get info for

-  {uint32} `appid` : appID of product

## getFriendList(steamObj, cb)
version 1 {ISteamUser}
####steamObj

-  {string} `key` : access key

-  {uint64} `steamid` : SteamID of user

- (optional) {string} `relationship` : relationship type (ex: friend)

## getPlayerBans(steamObj, cb)
version 1 {ISteamUser}
####steamObj

-  {string} `key` : access key

-  {string} `steamids` : Comma-delimited list of SteamIDs

## getPlayerSummaries(steamObj, cb)
version 1 {ISteamUser}
####steamObj

-  {string} `key` : access key

-  {string} `steamids` : Comma-delimited list of SteamIDs

## getPlayerSummaries(steamObj, cb)
version 2 {ISteamUser}
####steamObj

-  {string} `key` : access key

-  {string} `steamids` : Comma-delimited list of SteamIDs (max: 100)

## getUserGroupList(steamObj, cb)
version 1 {ISteamUser}
####steamObj

-  {string} `key` : access key

-  {uint64} `steamid` : SteamID of user

## resolveVanityURL(steamObj, cb)
version 1 {ISteamUser}
####steamObj

-  {string} `key` : access key

-  {string} `vanityurl` : The vanity URL to get a SteamID for

- (optional) {int32} `url_type` : The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group

## authenticateUser(steamObj, cb)
version 1 {ISteamUserAuth}
####steamObj

-  {uint64} `steamid` : Should be the users steamid, unencrypted.

-  {rawbinary} `sessionkey` : Should be a 32 byte random blob of data, which is then encrypted with RSA using the Steam system's public key.  Randomness is important here for security.

-  {rawbinary} `encrypted_loginkey` : Should be the users hashed loginkey, AES encrypted with the sessionkey.

## authenticateUserTicket(steamObj, cb)
version 1 {ISteamUserAuth}
####steamObj

-  {string} `key` : access key

-  {uint32} `appid` : appid of game

-  {string} `ticket` : Ticket from GetAuthSessionTicket.

## getTokenDetails(steamObj, cb)
version 1 {ISteamUserOAuth}
####steamObj

-  {string} `access_token` : OAuth2 token for which to return details

## getGlobalAchievementPercentagesForApp(steamObj, cb)
version 1 {ISteamUserStats}
####steamObj

-  {uint64} `gameid` : GameID to retrieve the achievement percentages for

## getGlobalAchievementPercentagesForApp(steamObj, cb)
version 2 {ISteamUserStats}
####steamObj

-  {uint64} `gameid` : GameID to retrieve the achievement percentages for

## getGlobalStatsForGame(steamObj, cb)
version 1 {ISteamUserStats}
####steamObj

-  {uint32} `appid` : AppID that we're getting global stats for

-  {uint32} `count` : Number of stats get data for

-  {string} `name[0]` : Names of stat to get data for

- (optional) {uint32} `startdate` : Start date for daily totals (unix epoch timestamp)

- (optional) {uint32} `enddate` : End date for daily totals (unix epoch timestamp)

## getNumberOfCurrentPlayers(steamObj, cb)
version 1 {ISteamUserStats}
####steamObj

-  {uint32} `appid` : AppID that we're getting user count for

## getPlayerAchievements(steamObj, cb)
version 1 {ISteamUserStats}
####steamObj

-  {string} `key` : access key

-  {uint64} `steamid` : SteamID of user

-  {uint32} `appid` : AppID to get achievements for

- (optional) {string} `l` : Language to return strings for

## getSchemaForGame(steamObj, cb)
version 1 {ISteamUserStats}
####steamObj

-  {string} `key` : access key

-  {uint32} `appid` : appid of game

- (optional) {string} `l` : localized langauge to return (english, french, etc.)

## getSchemaForGame(steamObj, cb)
version 2 {ISteamUserStats}
####steamObj

-  {string} `key` : access key

-  {uint32} `appid` : appid of game

- (optional) {string} `l` : localized language to return (english, french, etc.)

## getUserStatsForGame(steamObj, cb)
version 1 {ISteamUserStats}
####steamObj

-  {string} `key` : access key

-  {uint64} `steamid` : SteamID of user

-  {uint32} `appid` : appid of game

## getUserStatsForGame(steamObj, cb)
version 2 {ISteamUserStats}
####steamObj

-  {string} `key` : access key

-  {uint64} `steamid` : SteamID of user

-  {uint32} `appid` : appid of game

## getServerInfo(steamObj, cb)
version 1 {ISteamWebAPIUtil}
#### No steamObj params

## getSupportedAPIList(steamObj, cb)
version 1 {ISteamWebAPIUtil}
####steamObj

- (optional) {string} `key` : access key

## pollStatus(steamObj, cb)
version 1 {ISteamWebUserPresenceOAuth}
####steamObj

-  {string} `steamid` : Steam ID of the user

-  {uint64} `umqid` : UMQ Session ID

-  {uint32} `message` : Message that was last known to the user

- (optional) {uint32} `pollid` : Caller-specific poll id

- (optional) {uint32} `sectimeout` : Long-poll timeout in seconds

- (optional) {uint32} `secidletime` : How many seconds is client considering itself idle, e.g. screen is off

- (optional) {uint32} `use_accountids` : Boolean, 0 (default): return steamid_from in output, 1: return accountid_from

## getGoldenWrenches(steamObj, cb)
version 2 {ITFItems_440}
####steamObj

-  {int} `gameid` : The game id

## getItemID(steamObj, cb)
version 1 {ITFPromos_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_205790}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_247040}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_260}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_260}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_440}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_440}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_570}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `promoid` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_620}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_620}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_730}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_730}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## getItemID(steamObj, cb)
version 1 {ITFPromos_841}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## grantItem(steamObj, cb)
version 1 {ITFPromos_841}
####steamObj

-  {int} `gameid` : The game id

-  {uint64} `steamid` : The Steam ID to fetch items for

-  {uint32} `PromoID` : The promo ID to grant an item for

## getAccountList(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

## createAccount(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

-  {uint32} `appid` : The app to use the account for

-  {string} `memo` : The memo to set on the new account

## setMemo(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The SteamID of the game server to set the memo on

-  {string} `memo` : The memo to set on the new account

## resetLoginToken(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The SteamID of the game server to reset the login token of

## getAccountPublicInfo(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The SteamID of the game server to get info on

## getServerSteamIDsByIP(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

-  {string} `server_ips` : 

## getServerIPsBySteamID(steamObj, cb)
version 1 {IGameServersService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `server_steamids` : 

## queryFiles(steamObj, cb)
version 1 {IPublishedFileService}
####steamObj

-  {string} `key` : Access key

-  {uint32} `query_type` : enumeration EPublishedFileQueryType in clientenums.h

-  {uint32} `page` : Current page

- (optional) {uint32} `numperpage` : (Optional) The number of results, per page to return.

-  {uint32} `creator_appid` : App that created the files

-  {uint32} `appid` : App that consumes the files

-  {string} `requiredtags` : Tags to match on. See match_all_tags parameter below

-  {string} `excludedtags` : (Optional) Tags that must NOT be present on a published file to satisfy the query.

- (optional) {bool} `match_all_tags` : If true, then items must have all the tags specified, otherwise they must have at least one of the tags.

-  {string} `required_flags` : Required flags that must be set on any returned items

-  {string} `omitted_flags` : Flags that must not be set on any returned items

-  {string} `search_text` : Text to match in the item's title or description

-  {uint32} `filetype` : EPublishedFileInfoMatchingFileType

-  {uint64} `child_publishedfileid` : Find all items that reference the given item.

-  {uint32} `days` : If query_type is k_PublishedFileQueryType_RankedByTrend, then this is the number of days to get votes for [1,7].

-  {bool} `include_recent_votes_only` : If query_type is k_PublishedFileQueryType_RankedByTrend, then limit result set just to items that have votes within the day range given

-  {bool} `totalonly` : (Optional) If true, only return the total number of files that satisfy this query.

-  {bool} `return_vote_data` : Return vote data

-  {bool} `return_tags` : Return tags in the file details

-  {bool} `return_kv_tags` : Return key-value tags in the file details

-  {bool} `return_previews` : Return preview image and video details in the file details

-  {bool} `return_children` : Return child item ids in the file details

-  {bool} `return_short_description` : Populate the short_description field instead of file_description

## getRecentlyPlayedGames(steamObj, cb)
version 1 {IPlayerService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The player we're asking about

-  {uint32} `count` : The number of games to return (0/unset: all)

## getOwnedGames(steamObj, cb)
version 1 {IPlayerService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The player we're asking about

-  {bool} `include_appinfo` : true if we want additional details (name, icon) about each game

-  {bool} `include_played_free_games` : Free games are excluded by default.  If this is set, free games the user has played will be returned.

-  {uint32} `appids_filter` : if set, restricts result set to the passed in apps

## getSteamLevel(steamObj, cb)
version 1 {IPlayerService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The player we're asking about

## getBadges(steamObj, cb)
version 1 {IPlayerService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The player we're asking about

## getCommunityBadgeProgress(steamObj, cb)
version 1 {IPlayerService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The player we're asking about

-  {int32} `badgeid` : The badge we're asking about

## isPlayingSharedGame(steamObj, cb)
version 1 {IPlayerService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `steamid` : The player we're asking about

-  {uint32} `appid_playing` : The game player is currently playing

## getTradeOffers(steamObj, cb)
version 1 {IEconService}
####steamObj

-  {string} `key` : Access key

-  {bool} `get_sent_offers` : Request the list of sent offers.

-  {bool} `get_received_offers` : Request the list of received offers.

-  {bool} `get_descriptions` : If set, the item display data for the items included in the returned trade offers will also be returned.

-  {string} `language` : The language to use when loading item display data.

-  {bool} `active_only` : Indicates we should only return offers which are still active, or offers that have changed in state since the time_historical_cutoff

-  {bool} `historical_only` : Indicates we should only return offers which are not active.

-  {uint32} `time_historical_cutoff` : When active_only is set, offers updated since this time will also be returned

## getTradeOffer(steamObj, cb)
version 1 {IEconService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `tradeofferid` : 

-  {string} `language` : 

## getTradeOffersSummary(steamObj, cb)
version 1 {IEconService}
####steamObj

-  {string} `key` : Access key

-  {uint32} `time_last_visit` : The time the user last visited.  If not passed, will use the time the user last visited the trade offer page.

## declineTradeOffer(steamObj, cb)
version 1 {IEconService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `tradeofferid` : 

## cancelTradeOffer(steamObj, cb)
version 1 {IEconService}
####steamObj

-  {string} `key` : Access key

-  {uint64} `tradeofferid` : 
