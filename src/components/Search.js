import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../features/user/userSlice';


const Search = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchUser('Iretoms'))
    
    }, [dispatch])
    
    return (
        <div>
           Heyy 
        </div>
    );
};

export default Search;