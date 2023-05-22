

import { hello } from './utilis/utilis'

const Exepensive = () => {

    const result = hello()
    return <div data-testid='expensivenode'>{result}</div>

}

export default Exepensive