import Avatar from "@mui/material/Avatar";
import { IUser } from "./../../../services/users.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../stateManagement/reducers/rootReducer";
import { IThread } from "./../../../services/threads.service";
import { useDispatch } from "react-redux";
import { addThread } from "../../../stateManagement/actions/actionCreators/userThreadsActionCreator";
import "./index.css";

interface UserListItemProps {
  user: IUser;
}

function checkUserIdInThreads(arr: IThread[], id: string | undefined) {
  if (!id) return;
  let threadExists = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].members.includes(id)) {
      threadExists = true;
    }
  }
  return threadExists;
}

const UserListItem = ({ user }: UserListItemProps) => {
  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.userThreads.threads);
  const currentUserId = useSelector((state: RootState) => state.auth.id);

  function addNewThread(id1: string | undefined, id2: string | undefined) {
    if (!id1 || !id2) return;
    const threadData = {
      messages: [],
      members: [id1, id2],
    };
    dispatch(addThread(threadData));
  }

  function handleUserClick() {
    if (!checkUserIdInThreads(threads, user.id)) {
      addNewThread(currentUserId, user.id);
    } else {
      console.log(212121212);
      
      // join room
    }
  }

  return (
    <li
      className="user-list-item"
      onClick={handleUserClick}
    >
      <Avatar
        sx={{ width: 35, height: 35, fontSize: 25, backgroundColor: "#ae3fdd" }}
      >
        {user.email[0].toUpperCase()}
      </Avatar>
      <span className="user-username">{user.email}</span>
    </li>
  );
};

export default UserListItem;
