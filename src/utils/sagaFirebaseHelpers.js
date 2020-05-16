import { firestoreRef } from '../firebase/firebase';

export class FireSaga {
  static setToCollection(pathCollection, docId, data, isMerge) {
    return firestoreRef
      .collection(pathCollection)
      .doc(docId)
      .set(data, { merge: isMerge });
  }

  static getCollection(pathCollection, docId) {
    return firestoreRef
      .collection(pathCollection)
      .doc(docId)
      .get();
  }
}
