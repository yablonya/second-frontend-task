import styles from "@/components/pagination-block/PaginationBlock.module.css"
import {FC} from "react";

interface PaginationBlockProps {
  numOfPages: number,
  currentPage: number,
  setCurrentPage: object,
}

const PaginationBlock:FC<PaginationBlockProps> = ({numOfPages, currentPage, setCurrentPage}) => {
  const numbers = [...Array(numOfPages + 1).keys()].slice(1)

  return (
    <div className={styles.container}>
      {numbers && numbers.map((num) => (
        <div
            key={num}
            className={currentPage === num ? styles.current_page_button : styles.page_button}
            onClick={() => setCurrentPage(num)}
        >{num}</div>
      ))}
    </div>
  )
}

export default PaginationBlock;