export type GameStatus = 'notStarted' | 'noResponse' | 'below' | 'greater' | 'win'

interface Props {
    secret?: number
    response?: number
    inputValue: number | ''
}

export default class Game {
    props: Props

    constructor(props: Props = {inputValue: ''}) {
        this.props = props
    }

    start() {
        return new Game({
            ...this.props,
            secret: Math.floor(Math.random() * 100 + 1)
        })
    }

    inProgress() {
        const status = this.status;
        return status === 'below' ||status === 'greater';
    }

    submitAnswer() {
        return new Game({
            ...this.props,
            inputValue: '',
            response: Number(this.props.inputValue)
        })
    }

    get status(): GameStatus {
        const {secret, response} = this.props
        if (!secret) {
            return 'notStarted'
        }

        if (!response) {
            return 'noResponse'
        }

        if (response === secret) {
            return 'win'
        } else if (response < secret) {
            return 'below'
        } else {
            return 'greater'
        }
    }

    hasResponse() {
        const status = this.status;
        return status !== 'noResponse' && status !== 'notStarted'
    }

    setInputValue(value: number | "") {
        return new Game({
            ...this.props,
            inputValue: value
        });
    }

    restart() {
        return new Game()
    }
}
