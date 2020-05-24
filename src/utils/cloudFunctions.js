import { functionsRef } from '../firebase/firebase';

export const setAdminAccess = functionsRef.httpsCallable('setAdminAccess');

export const toggleOnline = functionsRef.httpsCallable('onUserStatusChanged');
