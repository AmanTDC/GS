import Navbar from "@/components/Navbar/Navbar";
import CourseCard from "@/shared/Cards/CourseCard";
import Select from "react-select";
import { CiSliderHorizontal } from "react-icons/ci";
import Img from "@/shared/Img";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import Button from "@/shared/Button/Button";
import Pagination from "@/shared/Pagination/Pagination";
import useCourseResult from "./views/useCourseResult";
import { FaSearch } from "react-icons/fa";
const CourseResult = () => {
  const {
    isActive,
    setIsActive,
    page,
    setPage,
    totalPages,
    courses,
    filters,
    extractValue,
    updatedValues,
    fetchCourses,
    setUpdatedValues,
  } = useCourseResult();

  return (
    <div className="relative bg-[#FAFAFA]">
      <Navbar />

      <div className=" py-[152px] max-w-[1120px] mx-auto px-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchCourses(updatedValues);
          }}
          className="relative w-full max-w-[700px] mx-auto"
        >
          <input
            type="text"
            placeholder="Search..."
            className="border border-neutral-300 outline-none mb-10 w-full bg-white pl-14 h-14 rounded-full"
            onChange={(e) =>
              setUpdatedValues({
                ...updatedValues,
                searchInput: e.target.value,
              })
            }
          />
          <FaSearch className="absolute top-3 left-3 text-blue-900" size={32} />
          <Button
            type="submit"
            isLoading={isActive === 2}
            className="!rounded-full absolute w-[93px] top-2 right-2"
          >
            Search
          </Button>
        </form>
        <div className="grid lg:grid-cols-12 gap-x-10">
          <div className="col-span-4 bg-white p-6 h-fit lg:block hidden rounded-2xl">
            <div className="text-2xl font-bold">Filters</div>
            <div className="space-y-4 my-6">
              {courses?.courses
                ? filters?.map((item, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-medium text-gray-600 mb-1">
                        {item?.title}
                      </div>
                      <Select
                        options={item?.options}
                        isMulti
                        className="outline-none cursor-pointer"
                        defaultValue={[
                          item?.options[
                            item?.options?.findIndex(
                              (e) =>
                                e?.value ===
                                updatedValues?.defaultValues?.[item?.key]?.value
                            )
                          ],
                        ]}
                        onChange={(e: any) => extractValue(e, item?.key)}
                      />
                    </div>
                  ))
                : [1, 1, 1, 1, 1, 1, 1].map((item, idx: number) => (
                    <div
                      className="h-[68px] w-full bg-gray-200 animate-pulse rounded-xl"
                      key={idx}
                    />
                  ))}
            </div>
            <div className="flex items-center gap-x-6">
              <Button className="bg-white !text-black hover:!bg-transparent w-full px-0 font-bold border border-gray-300">
                Reset
              </Button>
              <Button
                className="bg-blue-900 w-full !px-2 hover:!bg-blue-900/80 font-bold"
                onClick={() => fetchCourses(updatedValues)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
          <div className="col-span-8 space-y-8 relative">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-[32px]">
                {courses?.pagiation?.count} Course Found
              </h1>
              <CiSliderHorizontal
                color="#000"
                size={30}
                onClick={() => setIsActive(0)}
                className="lg:hidden animate-pulse"
              />
            </div>
            <>
              {isActive === 2 && (
                <div className="space-y-4 absolute bg-white/70 flex flex-col justify-center w-full h-[calc(100%-80px)] z-20">
                  <div>
                    <Img
                      src="/icons/logoIcon.png"
                      alt="phone"
                      width={100}
                      height={100}
                      isLocal
                      className="animate-bounce m-auto duration-700 opacity-40"
                    />
                    <div className="text-center font-medium">
                      Please wait...
                    </div>
                  </div>
                </div>
              )}
              {courses?.courses?.map((item: any, idx: number) => (
                <CourseCard key={idx} data={item} />
              ))}
            </>
            {courses?.pagiation?.totalPages > 1 && (
              <div className="absolute w-full">
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  active={({ selected }: any) => setPage(selected + 1)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isActive === 0 && (
        <div
          className="bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]"
          onClick={() => setIsActive(-1)}
        />
      )}
      {isActive === 0 && (
        <div
          className="bg-white h-full sm:w-[450px] w-[300px] space-y-6 py-5 px-4 fixed top-0 right-0"
          id="filter"
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Filters</div>
            <RxCross2
              size={24}
              onClick={() => setIsActive(-1)}
              className="-mr-1"
            />
          </div>
          {/* <div className="h-full justify-between"> */}
          <div className="h-[calc(100%-122px)] overflow-y-scroll space-y-4 pb-5">
            {filters?.map((item, idx) => (
              <div key={idx}>
                <div className="text-xs font-medium text-gray-600 mb-1">
                  {item?.title}
                </div>
                <Select
                  options={item?.options}
                  isMulti
                  className="outline-none cursor-pointer"
                  defaultValue={[
                    item?.options[
                      item?.options?.findIndex(
                        (e) =>
                          e?.value ===
                          updatedValues?.defaultValues?.[item?.key]?.value
                      )
                    ],
                  ]}
                  onChange={(e: any) => extractValue(e, item?.key)}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-4">
            <Button className="bg-white !text-black hover:!bg-transparent w-full px-0 font-bold border border-gray-300">
              Reset
            </Button>
            <Button
              className="bg-blue-900 min-w-fit px-5 hover:!bg-blue-900/80 font-bold"
              onClick={() => fetchCourses(updatedValues)}
            >
              Apply Filters
            </Button>
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default CourseResult;
