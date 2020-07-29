import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
import * as LoginActions from '../../store/modules/login/actions';

export default function Login() {
  const { loading } = useSelector(state => state.common);
  const { users } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  useEffect(() => {
    dispatch(LoginActions.requestUsersExist());
  }, []); //eslint-disable-line
  useEffect(() => {
    localStorage.setItem('Modelo@users', JSON.stringify(users));
   }, [users]); //eslint-disable-line
  function handleInputChange(text) {
    setNewUser(text.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginActions.addToUserRequest(newUser, users));
    setNewUser('');
  }
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Main
      </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}
