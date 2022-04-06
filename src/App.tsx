import { Component, createResource, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { get_teams, get_game_info } from './utils';

class GameInfo {
  name: string

  constructor(name: string){
    this.name = name
  }
}

class TeamInfo {
  name: string
  totalS: number
  color: string
  odometer: number
  duration: number

  constructor(json: any){
    this.name = json.name;
    this.totalS = parseInt(json.totalScore);
    this.color = json.color;
    this.odometer = parseFloat(json.odometer);
    this.duration = parseInt(json.finishTime) - parseInt(json.startTime);
  }

}

async function fetch_game(): Promise<GameInfo> {
  console.log("Fetching game info")
  let key = window.localStorage.getItem('auth_key');
  let game = window.localStorage.getItem('game');
  return get_game_info(key, game).then(
  resp => {
    if (resp.status != 200) {
      Error("Error in fetching game data");
    }
    return resp.json()
  }).then(json => {
    return new GameInfo(json.title)
  })
  
}

async function fetch_teams(): Promise<Array<TeamInfo>> {
  console.log("Fetching teams")
  let key = window.localStorage.getItem('auth_key');
  let game = window.localStorage.getItem('game');
  return get_teams(key, game).then(
    resp => {
      if (resp.status != 200){
        Error("Error in fetching teams")
      }
      return resp.json()
    }
  ).then(
    json => {
      let teams: Array<any> = json.items;
      let ret = teams.map(
        async (i) => new TeamInfo(i)
      );
      return Promise.all(ret)
    }
  )
}


const App: Component = () => {
  //const [teams_get, teams_set] = createSignal<Array<TeamInfo>>([]);

  const [game_get, {mutate, refetch: redo_game}] = createResource<GameInfo>(fetch_game);
  const [teams_get, {refetch: refetch_teams}] = createResource<Array<TeamInfo>>(fetch_teams);

  setInterval(() => redo_game(), 0.5*60*1000);
  setInterval(() => refetch_teams(), 1*1000);

  const styles_team = {
    1: {"background-color": '#e5e7e9'},
    0: {"background-color": '#d5dbdb'},
  }

  return (
    <div class='game_cont'><h1 class='game_name'>{game_get()?.name}</h1>
        <For each={teams_get()?.sort(
          (a: TeamInfo, b: TeamInfo) => {return b.totalS - a.totalS}
        )} fallback={<p>Loading teams ...</p>}>
          {(item: TeamInfo, index) => {
              return <div class='team_cont' style={styles_team[index() % 2]}> 
                  <div class='team_name' style={{"background-color": item.color}}>{item.name}</div>
                  <div class='team_odo'>Odometer: {item.odometer}</div>
                  <div class='team_tot'>Total score: {item.totalS}</div>
                  <div class='team_dur'>Game duration: {item.duration}</div>
                </div>
          }}
        </For>
    </div>
  );
};

export default App;
