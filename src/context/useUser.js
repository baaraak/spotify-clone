import { useFirebase } from './firebase.context';

function useUser(params) {
  const context = useFirebase();
  if (context === undefined) {
    throw new Error(`useFirebase must be used within a FirebaseContext`);
  }
  return context;
}

export default useUser;
