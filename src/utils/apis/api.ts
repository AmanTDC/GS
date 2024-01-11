import axios from '../axios';

export const getCourses = async (
  pageNumber: number,
  pageSize: number,
  params: any
) => {
  console.log({ params });

  try {
    const res = await axios.get(`courses`, {
      params: {
        pageNumber: pageNumber,
        pageSize: pageSize,
        country:
          params?.country?.length > 0
            ? params?.country?.map((e: any) => e?.value)?.join(';')
            : null,
        programLevel:
          params?.level?.length > 0
            ? params?.level?.map((e: any) => e?.value)?.join(';')
            : null,
      },
    });
    return Promise.resolve(res?.data?.data);
  } catch (err) {
    console.error(err);
  }
};
