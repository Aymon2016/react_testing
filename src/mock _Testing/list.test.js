import { render, screen } from '@testing-library/react'

import List from './list'



describe('list component with data props', () => {

    it('should test list header', () => {

        const data = ['one', 'tow']
        render(<List data={data} />)

        const ul = screen.getByTestId('testid');
        expect(ul).toBeInTheDocument();
        const listitems = screen.queryAllByTestId('testitem')
        expect(listitems).toHaveLength(2)

    })

})