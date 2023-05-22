import axios from 'axios';

import Userdata from './userdata';

jest.mock('axios')

test('userdata should return the user data', async () => {
    const expectedResult = { id: 1, name: 'aymon' }

    axios.get.mockResolvedValueOnce({ data: expectedResult })

    const userdata = await Userdata(1)
    expect(userdata).toEqual(expectedResult)
})