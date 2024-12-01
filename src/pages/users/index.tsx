import { Button } from '@mui/material'
import { ReactElement } from 'react'
import user from '../../user_details'
import './users.scss'

function Users(): ReactElement {
    // const userList = user.map(e=> e.name)
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            {user.map((each) => {
                const hrefVal = `./${each.name}`
                return (
                    <a href={hrefVal}>
                        <Button variant="outlined" className="m-3">
                            {each.name}
                        </Button>
                    </a>
                )
            })}
        </div>
    )
}

export default Users
