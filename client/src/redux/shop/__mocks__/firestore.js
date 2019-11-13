export const mockPayload = ({
  data: 'test data',
});

export const mockPayloadError = 'error'

const querySnapshot = ({
  exists: true,
  data: jest.fn(() => Promise.resolve(mockPayload))
});

const collection = ({
  get: jest.fn(() => Promise.resolve(true)),
  doc: jest.fn(() => Promise.resolve(doc))
});

const doc = ({
  get: jest.fn(() => Promise.resolve(querySnapshot))
});

const firestore = {
  collection: jest.fn(() => Promise.resolve(collection)),
  collectionErr: jest.fn(() => Promise.reject(new Error(mockPayloadError))),
  convertQuerySnapshotToObj: jest.fn()
}



export default firestore;