
import { render } from '@testing-library/react'
import { AppProviders } from '../provider/appProvider'



const customRender = (ui, options) =>
    render(ui, { wrapper: AppProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }