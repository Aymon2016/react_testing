import { render, screen } from '@testing-library/react'
import { MuiMode } from './muiModel'
import { AppProviders } from '../provider/appProvider'

describe('MuiMode', () => {
    test('renders text correctly', () => {
        render(<MuiMode />, {
            wrapper: AppProviders,
        })
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })


})

