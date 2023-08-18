import styles from "@/components/ingredients/Ingredients.module.css"
import {FC} from "react";
import {Typography, List, ListItem, ListItemText, Paper, ListItemIcon} from "@mui/material";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

interface IngredientsProps {
	ingredients: [string, string | unknown][],
	measures: [string, string | unknown][],
}

const Ingredients: FC<IngredientsProps> = ({ingredients, measures}) => {
	const ingAndMeas = [];

	for (let i = 0; i < ingredients.length; i++) {
		ingAndMeas.push([ingredients[i][1], measures[i][1]])
	}

	return (
		<Paper elevation={0} className={styles.ingredients_block}>
			<Typography variant="h5" className={styles.ingredients_header}>
				Ingredients
			</Typography>
			<List>
				{ingAndMeas && ingAndMeas.map(item => (
					<ListItem key={ingAndMeas.indexOf(item)} sx={{p: "8px 0 0"}}>
						<ListItemIcon >
							<ChevronRightRoundedIcon/>
						</ListItemIcon>
						<Typography>
							<b>{item[0]}</b> <span style={{color: "#94979c"}}>{item[1] !== null ? `${item[1]}` : null}</span>
						</Typography>
					</ListItem>
				))}
			</List>
		</Paper>
	)
}

export default Ingredients;