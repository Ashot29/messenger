import { IThread } from "./../../../services/threads.service";
import { useSelector } from 'react-redux';
import { RootState } from '../../../stateManagement/reducers/rootReducer'
import { useEffect } from 'react';

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

  useEffect(() => {
    thread.members.find(id => id !== currentUser.id)
  }, [])

  return (
    <div key={thread.id} className="thread">
      {thread.id}
    </div>
  );
};

export default Thread;
