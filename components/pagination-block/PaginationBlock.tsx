import styles from "@/components/pagination-block/PaginationBlock.module.css"
import {Dispatch, FC, SetStateAction} from "react";
import {List, ListItem} from "@mui/material";

interface PaginationBlockProps {
  numOfPages: number,
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
}

const PaginationBlock:FC<PaginationBlockProps> = ({numOfPages, currentPage, setCurrentPage}) => {
  const numbers = [...Array(numOfPages + 1).keys()].slice(1)

  return (
    <List className={styles.container}>
      {numbers && numbers.map((num) => (
        <ListItem
            key={num}
            className={currentPage === num ? styles.current_page_button : styles.page_button}
            onClick={() => setCurrentPage(num)}
        >{num}</ListItem>
      ))}
    </List>
  )
}

export default PaginationBlock;