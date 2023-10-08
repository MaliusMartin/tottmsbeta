import { useRouter } from 'next/router';

const TeacherProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  // Rest of your component code
};

export default TeacherProfile;
