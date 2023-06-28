import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userResponse, photoResponse] = await Promise.allSettled([userPromise, photoPromise]);

    return [
      { status: userResponse.status, value: userResponse.value },
      { status: photoResponse.status, value: photoResponse.value },
    ];
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
}

export default handleProfileSignup;
