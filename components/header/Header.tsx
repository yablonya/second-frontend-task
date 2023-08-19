import styles from "@/components/header/Header.module.css";
import Image from 'next/image'
import me from '@/public/ryan gosling.png'
import {Typography} from "@mui/material";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Typography variant="h4" sx={{marginLeft: "115px"}} className={`${styles.puzatka} ${styles.underline_left}`}>
        Puzata khata
      </Typography>
      <Image
        src={me}
        width={50}
        height={50}
        alt="me"
        className={styles.image}
      />
      <Typography variant="h4" className={styles.underline_right}>Created by yablonya</Typography>
    </header>
  )
}

export default Header;