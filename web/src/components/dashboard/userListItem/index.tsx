import Avatar from '@mui/material/Avatar';
import './index.css';
import { IUser } from './../../../services/users.service';


interface UserListItemProps {
    user: IUser
}

const UserListItem = ({user}: UserListItemProps) => {
    return (
        <li className='user-list-item'>
            <Avatar sx={{ width: 35, height: 35, fontSize: 25, backgroundColor: '#ae3fdd' }}>{user.email[0].toUpperCase()}</Avatar>
            <span className='user-username'>{user.email}</span>
        </li>
    )
}

export default UserListItem