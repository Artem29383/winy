import { functionsRef } from '../firebase/firebase';

export const setAdminAccess = functionsRef.httpsCallable('setAdminAccess');
