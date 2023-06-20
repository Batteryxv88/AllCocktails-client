import styles from './component.module.css'
import { useAppDispatch } from '../../../state/reduxHooks'
import { addIngredient } from '../../../state/recipeConstructor/recipeConstructorSlice'
import { Filter } from '../Constructor'

interface InputComponentProps {
    data: string
    setFilter: React.Dispatch<React.SetStateAction<Filter>>
    filter: Filter
}

const InputComponent = ({data, filter, setFilter}: InputComponentProps) => {

    const dispatch = useAppDispatch()

    const componentAddHandler = () => {
        dispatch(addIngredient({name: data, id: Date.now()}))
        setFilter({...filter, componentsFound: [], value: ''})
    }
    
    return ( 
        <button className={styles.button} onClick={componentAddHandler} >{data}</button>
     );
}
 
export default InputComponent;