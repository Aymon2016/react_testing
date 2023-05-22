import axios from "axios"

const Userdata = async (userid) => {

    const response = await axios.get(`https://myapi.com/users/${userid}`)

    return response.data
}

export default Userdata