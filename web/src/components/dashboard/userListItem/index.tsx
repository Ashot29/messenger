import Avatar from '@mui/material/Avatar';
import './index.css';
import { IUser } from './../../../services/users.service';


interface UserListItemProps {
    user: IUser
}

const UserListItem = ({user}: UserListItemProps) => {
    return (
        <li className='user-list-item'>
            <Avatar sx={{ width: 40, height: 40, fontSize: 30, backgroundColor: '#ae3fdd' }}>{user.userName[0]}</Avatar>
            <span className='user-username'>{user.userName}</span>
        </li>
    )
}

export default UserListItem