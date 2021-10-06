import admin, { FirebaseError } from 'firebase-admin'
import serviceAccount from './shoes-commerce-327520-firebase-adminsdk-x81k0-3443276112.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id
      }),
      databaseURL:
        'firebase-adminsdk-x81k0@shoes-commerce-327520.iam.gserviceaccount.com'
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error)
  }
}
export default admin.firestore()
