async function request(auth: string, query: string): Promise<Response> {
    return fetch("https://api.loquiz.com/v3/"+query, {
        method: 'GET',
        headers: {
            'accept':'application/json', 
            'Authorization':'ApiKey-v1 d64642249a14413ac83fdf40b57192b7be1bfb715a3e74519e279b3ee5eaf426',
        }
    })
}

async function get_teams(auth: string, game: string): Promise<Response> {
    return request(auth, 'results/'+ game + '/teams')
}

async function get_game_info(auth:string, game: string): Promise<Response> {
    return request(auth, 'games/'+game)    
}

export {
    get_teams,
    get_game_info,
}