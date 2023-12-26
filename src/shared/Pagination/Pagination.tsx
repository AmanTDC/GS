import ReactPaginate from 'react-paginate';
import { usePagination } from './views/usePagination';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Pagination = (props: any) => {
  const { width } = usePagination();
  return (
    <div className='flex my-10 justify-center'>
      <ReactPaginate
        className='flex gap-x-1 sm:gap-x-2 mx-5 text-[10px] sm:text-sm items-center pagination'
        breakLabel='...'
        nextLabel={
          <button className='border rounded-md flex border-gray-400 h-6 w-6 items-center justify-center'>
            <IoIosArrowForward
              className={
                props.page === props.totalPages
                  ? 'text-gray-400 cursor-no-drop'
                  : ''
              }
            />
          </button>
        }
        initialPage={props.page - 1}
        onPageChange={props.active}
        pageRangeDisplayed={width < 600 ? 0 : 2}
        pageCount={props.totalPages}
        previousLabel={
          <button className='border rounded-md flex border-gray-400 h-6 w-6 items-center justify-center'>
            <IoIosArrowBack
              className={props.page === 1 ? 'text-gray-400 cursor-no-drop' : ''}
            />
          </button>
        }
        activeClassName={
          'bg-blue-900 text-white items-center flex cursor-pointer rounded-md'
        }
      />
    </div>
  );
};
export default Pagination;
