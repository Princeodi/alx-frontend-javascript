import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
<<<<<<< HEAD
	  return Promise.all([uploadPhoto(), createUser()])
	    .then((data) => {
		          console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
		        })
	    .catch(() => console.log('Signup system offline'));
=======
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
>>>>>>> 24159c950a47dd7a45aa57e910b28dcee13a1349
}

export default handleProfileSignup;
