import Game from "./Game";

type Action = { type: 'start' }
    | { type: 'restart' }
    | { type: 'submitAnswer' }
    | { type: 'setInputValue', value: number | '' }

export function GameReducer(game: Game, action: Action): Game {
    switch (action.type) {
        case "start":
            return game.start()
        case "submitAnswer":
            return game.submitAnswer()
        case "setInputValue":
            return game.setInputValue(action.value)
        case "restart":
            return game.restart()
        default:
            return game
    }
}
