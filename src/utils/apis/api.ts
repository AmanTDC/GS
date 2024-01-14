import axios from '../axios';

export const getCourses = async (
  pageNumber: number,
  pageSize: number,
  params: any
) => {
  console.log({
    params: `${params?.duration?.map((e: any) => e?.value)}`?.split('-'),
  });

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
        durationGreaterThanMonths:
          params?.duration?.length > 0
            ? `${params?.duration?.map((e: any) => e?.value)}`?.split('-')[0]
            : null,
        durationLessThanMonths:
          params?.duration?.length > 0
            ? `${params?.duration?.map((e: any) => e?.value)}`?.split('-')[1]
            : null,
        disciplineGroups:
          params?.stream?.length > 0
            ? params?.stream?.map((e: any) => e?.value)?.join(';')
            : null,
            preferredIntake:
          params?.intakes?.length > 0
            ? params?.intakes?.map((e: any) => e?.value)?.join(';')
            : null,
      },
    });
    return Promise.resolve(res?.data?.data);
  } catch (err) {
    console.error(err);
  }
};
