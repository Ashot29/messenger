import { IThread } from "./../../../services/threads.service";
import { RootState } from "../../../stateManagement/reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "./../../../services/users.service";
import { socket } from "..";
import "./index.css";
import { setThreadAsCurrent } from './../../../stateManagement/actions/actionCreators/currentThreadActionCreator';

interface ThreadProps {
  thread: IThread;
}

const Thread = ({ thread }: ThreadProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => {
    return {
      userName: state.auth.userName,
      email: state.auth.email,
      id: state.auth.id,
    };
  });
  const threadMembers = useSelector((state: RootState) => {
    const threadMembersarray: IUser[] = [];
    thread.members.forEach((id: string) => {
      if (id !== currentUser.id) {
        let user = state.usersState.users.find(
          (user: IUser) => user?.id === id
        );
        threadMembersarray.push(user);
      }
    });
    return threadMembersarray;
  });

  const enterThread = (threadId: string) => {
    if (!threadId) return;
    dispatch(setThreadAsCurrent(thread))
    socket.emit("enter_thread", threadId);
  };

  return (
    <div key={thread.id} className="thread" onClick={() => enterThread(thread.id)}>
      <div className="thread-members-names">
        {threadMembers.map((threadMember: IUser) => {
          return (
            <span className="thread-member-name" key={threadMember.id}>
              {threadMember?.userName}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Thread;
