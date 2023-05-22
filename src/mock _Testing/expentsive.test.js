
import { render, screen } from '@testing-library/react'
import Exepensive from './expentsive'
import { hello } from './utilis/utilis'

jest.mock('./utilis/utilis')

test('expensive content should diplay the result of the hello', () => {
    const expeted = 100
    hello.mockReturnValueOnce(expeted)

    render(<Exepensive />)

    const element = screen.getByTestId('expensivenode');
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(expeted)
})