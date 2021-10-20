import { IThread } from "./../../../services/threads.service";
import { RootState } from "../../../stateManagement/reducers/rootReducer";
import { useSelector } from "react-redux";
import { IUser } from "./../../../services/users.service";
import './index.css'

interface ThreadProps {
  thread: IThread;
}

const Thread = ({ thread }: ThreadProps) => {
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

  return (
    <div key={thread.id} className="thread">
      <div className="thread-members-names">
        {threadMembers.map((threadMember: IUser) => {
          return <span className='thread-member-name' key={threadMember?.id}>{threadMember?.userName}</span>;
        })}
      </div>
    </div>
  );
};

export default Thread;
