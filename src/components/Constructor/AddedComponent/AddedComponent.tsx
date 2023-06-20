import styles from './addedComponent.module.css'
import { useAppDispatch } from '../../../state/reduxHooks';
import { deleteIngredient } from '../../../state/recipeConstructor/recipeConstructorSlice';

const AddedComponent = ({component, id}: any) => {
const dispatch = useAppDispatch()



    return ( <div className={styles.component} >
        <span className={styles.name}>{component}</span>
        <button onClick={() => dispatch(deleteIngredient(id))} className={styles.button}></button>
    </div> );
}
 
export default AddedComponent;