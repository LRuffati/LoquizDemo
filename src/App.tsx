import { Component, createRenderEffect, createResource, createSignal, For } from 'solid-js';

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
  //console.log("Fetching game info")
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
  //console.log("Fetching teams")
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

  const [sort_get, sort_set] = createSignal("Totals");

  let filter;

  setInterval(() => redo_game(), 0.5*60*1000);
  setInterval(() => refetch_teams(), 1*1000);

  const styles_team = {
    1: {"background-color": '#e5e7e9'},
    0: {"background-color": '#d5dbdb'},
  }

  const sorters = {
    "Totals": (a: TeamInfo, b: TeamInfo) => {return b.totalS - a.totalS},
    "Name": (a: TeamInfo, b: TeamInfo) => {
      if (a<b){
        return -1;
      } else if (a==b) {
        return 0;
      } else {
        return 1;
      }
    },
    "Odometer": (a: TeamInfo, b: TeamInfo) => {return b.odometer - a.odometer},
    "Time": (a: TeamInfo, b: TeamInfo) => {return b.duration - a.duration},
  }


  const [filter_val, set_filterv] = createSignal("");

  function model(el, value) {
    const [field, setField] = value();
    createRenderEffect(() => (el.value = field()));
    el.addEventListener("input", (e) => setField(e.target.value));
  }

  return (
    <div class='game_cont'>
      <h1 class='game_name'>{game_get()?.name}</h1>
      <p style={{"margin-left": "10%"}}>Sort <select value={sort_get()} onInput={v => sort_set(v.currentTarget.value)}>
        <option value="Totals">by total score</option>
        <option value="Name">by name</option>
        <option value="Odometer">by odometer</option>
        <option value="Time">by gametime</option>
      </select>
      <br/>
      Filter names: <input type="text" use:model={[filter_val, set_filterv]} />
      </p>
      <For each={teams_get()?.sort(sorters[sort_get()]).filter((v) => v.name.toLowerCase().includes(filter_val().toLowerCase()))} fallback={<p>Loading teams ...</p>}>
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
