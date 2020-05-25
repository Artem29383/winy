import { firestoreRef, storage, storageRef } from '../firebase/firebase';

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

  static removeDoc(pathCollection, docId) {
    return firestoreRef
      .collection(pathCollection)
      .doc(docId)
      .delete();
  }

  static removeImagesFromDoc(pathCollection) {
    return storage.ref(pathCollection).delete();
  }

  static getFullCollection(pathCollection) {
    return firestoreRef.collection(pathCollection).get();
  }

  static getAllImages(pathCollection) {
    return storageRef.child(pathCollection).listAll();
  }
}
